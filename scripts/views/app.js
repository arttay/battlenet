define(['jquery', 
  'underscore', 
  'backbone', 
  'views/header/header.view',
  'views/stages/stage.view', 
  'collections/main.collection'
  ], function
	(
	$,
	_,
	Backbone,
	HeaderView,
  StageView,
	MainCollection
	)  {
  var App = Backbone.View.extend({
    initialize: function() {
      this.stageView = new StageView({collection: new MainCollection});
      //this.headerView = new HeaderView({collection: new MainCollection});
    },
    render: function(){

    }
  });

  return App;
});