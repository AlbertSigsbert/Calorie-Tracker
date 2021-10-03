//Storage Controller
const StorageController = (function() {
       console.log('Storage Controller');
})();

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
          logData : function () {
              return data;
          }
      }


})();

//UI Controller
const UIController = (function() {
   
    const UISelectors = {
        itemList : '#item-list'
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

        }
    }
})();


//App Controller
const AppController = (function(ItemsController, UIController) {

  //Init
  return{
      init : function () {
          const items = ItemsController.getData();

          UIController.populateListItems(items);
       
      }
  }
})(ItemsController, UIController);

//Initializing the App
AppController.init();