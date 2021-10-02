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
          logData : function () {
              return data;
          }
      }


})();

//UI Controller
const UIController = (function() {
       console.log('UI Controller');
})();


//App Controller
const AppController = (function(ItemsController, UIController) {

  //Init
  return{
      init : function () {
          ItemsController.logData();
      }
  }
})(ItemsController, UIController);

//Initializing the App
AppController.init();