define([
  'jquery', 
  'underscore', 
  'backbone',
  'views/items/head.view', 
  'text!templates/header.html'
  ], 
  function
	   ($,
	   _,
	   Backbone,
     HeadView,
     html
	   )  {
  var HeaderView = Backbone.View.extend({
      template: _.template(html),
      

    initialize: function() {
      that = this;
     this.collection.fetch({
          success : function(collection, response) {
            console.log("datad");
            var data = collection.models[0].attributes
            console.log(data);
           that.render(data);
          },

          error : function(collection, response) {
            // code here
          }
        });    
    },
    render: function(data){
 
      console.log('data');
     
      $(".wrapper").html(this.template);
      this.itemView = new HeadView({collection: data});
  
    }
  });

  return HeaderView;
});