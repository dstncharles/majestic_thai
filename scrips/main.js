(function(){
    'use strict';
// -------------
// Models / Collections
// -------------
var FoodModel = Backbone.Model.extend ({
  defaults: {
    type: '',
    name: '',
    description: '',
    price: '',
  }
});

var FoodCollection = Backbone.Collection.extend ({
   url: 'https://api.parse.com/1/classes/post',
   model: FoodModel,

   parse: function(response) {
     console.log(response);
     return response.results;
   }

});


// -------------
// Views / (Presentation / Interation)
// -------------
var IndexView = Backbone.View.extend({
  tagName: 'ul',
  className: 'menuList',

  template: _.template($('#index-template').text() ),

  render: function(){
    this.$el.html(this.template());
    return this;
  }
});

var MenuView = Backbone.View.extend({
  tagName: 'li',

  template: _.template($('#menu-template').text() ),

  render: function(){
    this.$el.html(this.template());
    return this;
  }
});

// var CheckoutView = Backbone.View.extend({
//
//   template: _.template($('#checkout-template').text() ),
//
//   render: function(){
//     this.$el.html(this.template());
//     return this;
//   }
// });



// -------------
// Router / Application State
// -------------

var AppRouter = Backbone.Router.extend({
  routes:{
    '': 'index',
    'menu': 'menu',
    'checkout': 'checkout',
  },

initialize: function() {
  this.foodCollection = new FoodCollection();
},

index: function(){
  this.currentView = new IndexView();
  this.currentView.render();
    $('.app-container').html(this.currentView.el);

    this.currentView = new MenuView({collection: this.foodCollection});
    this.currentView.render();
      $('.app-container').append(this.currentView.el);

      // this.currentView = new CheckoutView();
      // this.currentView.render();
      //   $('.app-container').append(this.currentView.el);
},

});



// -------------
// Configuration
// -------------
$.ajaxSetup ({
   headers: {
     "X-Parse-Application-Id": 'vgJoxHtADWuF5g8502Y9CNbpzzH3EG5Fz07dmNuE',
     "X-Parse-REST-API-Key": 'wjOqR7hA3d9ZrsW9HBVNJuzieRAZtlUH5KGHn9M8'
   }
 });



// -------------
// Glue code
// -------------
$(document).ready(function(){
  window.router = new AppRouter();
  Backbone.history.start();
});

})();
