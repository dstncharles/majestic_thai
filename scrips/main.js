(function(){
    'use strict';
// -------------
// Models / Collections
// -------------


// -------------
// Views / (Presentation / Interation)
// -------------


// -------------
// Router / Application State
// -------------

var AppRouter = Backbone.Router.extend({
  routes:{
    '': 'index',
  },

index: function(){
  var template = _.template($('#index-template').text() );
    $('.app-container').html(template());
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
