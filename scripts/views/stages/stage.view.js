define(['jquery', 
  'underscore', 
  'backbone', 
  'views/stages/items.view',
  'collections/main.collection',
  'text!templates/stages/stage.html'
  ], function
	(
	$,
	_,
	Backbone,
  ItemsView,
	MainCollection,
  html
	)  {
  var StageView = Backbone.View.extend({
     template: _.template(html),
     className: "mainStage",
    initialize: function() {
      that = this;
         this.collection.fetch({
          success : function(collection, response) {
            var data = collection.models[0].attributes;
           that.render(data);
          },
          error : function(collection, response) {
            // code here
          }
        });

    },
    render: function(data){
     $(".wrapper").append($(this.el));
     this.itemsView = new ItemsView({collection: data});
     



    }
  });

  return StageView;
});