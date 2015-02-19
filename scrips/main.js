(function(){
    'use strict';
// -------------
// Models / Collections
// -------------

// -------------
// Views / (Presentation / Interation)
// -------------
var MenuView = Backbone.View.extend({
  tagname: 'li',
  template: _.template($('#menu-template').html()),

});

// -------------
// Router / Application State
// -------------

var AppRouter = Backbone.View.extend({
  routes:{
  '': 'index',
},

index: function(){
  $('.app-container').append(this.el);
  this.$el.append(this.template);
}

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
