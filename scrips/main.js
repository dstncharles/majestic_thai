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

  template: _.template($('#menu-template').text() ),

  render: function(){
    this.$el.html(this.template());
    return this;
  }
});

var CheckoutView = Backbone.View.extend({

  template: _.template($('#checkout-template').text() ),

  render: function(){
    this.$el.html(this.template());
    return this;
  }
});

// -------------
// Router / Application State
// -------------

var AppRouter = Backbone.Router.extend({
  routes:{
    '': 'index',
    'menu': 'menu',
    'checkout': 'checkout',
  },

index: function(){
  this.currentView = new IndexView();
  this.currentView.render();
    $('.app-container').html(this.currentView.el);
},

menu: function(){
  this.currentView = new MenuView();
  this.currentView.render();
    $('.app-container').html(this.currentView.el);
},

checkout: function(){
  this.currentView = new CheckoutView();
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
