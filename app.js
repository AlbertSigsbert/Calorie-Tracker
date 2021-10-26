//Storage Controller
// const StorageController = (function() {
//        console.log('Storage Controller');
// })();

//Item Controller
const ItemsController = (function() {
      //Constructor
      const Item = function(id, name, calories) {
          this.id = id
          this.name = name
          this.calories = calories
      }

    //Data Structures /
     const data = {
         items: 
            [
                {id:0, name: 'Makande' , calories: 1700 },
                {id:1, name: 'Pilau' , calories: 3500 },
                {id:2, name: 'Chips' , calories: 2000 },
            ],
         
         currentItem : null,
         totalCalories: 0
     }

      return {
          getData: function () {
              return data.items;
          },

          addData : function(name ,calories){
              let ID;
              if(data.items.length > 0){
                ID = data.items[data.items.length -1].id + 1
              }else{
                  ID = 0
              }

              calories = parseInt(calories)

              const newItem = new Item(ID, name, calories)
              

              data.items.push(newItem);
           
              return newItem
          },

          logData : function () {
             return data
          }
      }


})();

//UI Controller
const UIController = (function() {
    const UISelectors = {
        itemList : '#item-list',
        addBtn : '.add-btn',
        itemName : '#item-name',
        itemCalories : '#item-calories'
    }

    return {
        populateListItems : function (items) {
            let  listitems = '';
             
             items.forEach(item => {
                 listitems += `
                  <li class="collection-item" id="item-${item.id}">
                 <strong> ${item.name}: </strong> <em>${item.calories}Calories</em>
                 <a href="#" class="secondary-content">
                   <i class="edit-item fa fa-pencil"></i>
                 </a>
               </li>`;
             });

             document.querySelector(UISelectors.itemList).innerHTML = listitems;
             

        },
        getSelectors: function(){
            return UISelectors
        },
        addListItem: function(item){
            const li = document.createElement('li');
            li.className = 'collection-item';

            li.id = `item-${item.id}`;

            li.innerHTML = `
            <strong> ${item.name}: </strong> <em>${item.calories}Calories</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
            </a>`;

             //Insert Item
             document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
           
        },
        clearInputs: function () {
             document.querySelector(UISelectors.itemName).value = '';
             document.querySelector(UISelectors.itemCalories).value = '';
        },
        getItemInput: function(){
            return {
                name : document.querySelector(UISelectors.itemName).value,
                calories :document.querySelector(UISelectors.itemCalories).value
            }
        }
        
    }
})();


//App Controller
const AppController = (function(ItemsController, UIController) {
   //Load Event Listeners
    const loadEventListeners = function(){
        //Get UI Selectors
        const UISelectors = UIController.getSelectors()

        //Add meal btn event listener
        document.querySelector(UISelectors.addBtn).addEventListener('click',itemAddSubmit);

    }

    const itemAddSubmit = function(e){
        //Get UI Selectors
        const UISelectors = UIController.getSelectors()
        
       //Get input items
       const inputs = UIController.getItemInput()

       if(inputs.name !== '' && inputs.calories !== ''){
           //Add Item
          const newItem = ItemsController.addData(inputs.name,inputs.calories);

          //Add Item to the UI
          UIController.addListItem(newItem);

          //Clear Inputs
          UIController.clearInputs();
       }else{
           //Flash message to enter correct inputs
       }
       
        e.preventDefault();
     }

   

  //Init
  return{
      init : function () {
          const items = ItemsController.getData();

          UIController.populateListItems(items);
          loadEventListeners()
          
      }
  }
})(ItemsController, UIController);

//Initializing the App
AppController.init();