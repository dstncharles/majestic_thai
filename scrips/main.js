(function(){
    'use strict';
// -------------
// Models / Collections
// -------------


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
  template: _.template($('#index-template').text() ),
});

var CheckoutView = Backbone.View.extend({
  template: _.template($('#index-template').text() ),
});

// -------------
// Router / Application State
// -------------

var AppRouter = Backbone.Router.extend({
  routes:{
    '': 'index',
  },

initialize: function() {
  this.currentView = new IndexView();
},

index: function(){
  this.currentView.render();
    $('.app-container').html(this.currentView.el);
},

});

// -------------
// Configuration
// -------------

// -------------
// Glue code
// -------------
$(document).ready(function(){
  window.router = new AppRouter();
  Backbone.history.start();
});

})();
