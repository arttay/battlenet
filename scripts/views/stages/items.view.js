define(['jquery', 
  'underscore', 
  'backbone',
  'views/items/head.view',
  'views/items/neck.view',
  'views/items/shoulder.view',
  'views/items/back.view',
  'views/items/chest.view',
  'views/items/wrist.view',
  'text!templates/stages/items.html'
  ], function
	(
	$,
	_,
	Backbone,
  HeadView,
  NeckView,
  ShoulderView,
  BackView,
  ChestView,
  WristView,
	html
	)  {
  var ItemsView = Backbone.View.extend({
    template: _.template(html),
    initialize: function() {
      $(".mainStage").append(this.template);
      this.render();
  

    },
    render: function(){
      this.HeadView = new HeadView({collection: this.collection});
      this.NeckView = new NeckView({collection: this.collection});
      this.ShoulderView = new ShoulderView({collection: this.collection}); 
      this.BackView = new BackView({collection: this.collection}); 
      this.ChestView = new ChestView({collection: this.collection}); 
      this.WristView = new WristView({collection: this.collection}); 
  


    }
  });

  return ItemsView;
});