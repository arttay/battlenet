define([
  'jquery',
  'underscore', 
  'backbone',
  'collections/item.collection', 
  'text!templates/items/item.html',
  'text!templates/stages/toolTip.html'
  ], function
	(
	$,
	_,
	Backbone,
  ItemCollection,
	html,
  toolTip
	)  {
  var HeadView = Backbone.View.extend({
    template: _.template(html),
    template1: _.template(toolTip),
    el: $("body"),
    initialize: function() {
      self = this;
     this.itemSlot = this.model;
    this.icon = self.itemSlot+"Icon"

    var itemSlotIcon = {
        icon: self.collection[self.icon]
     };
     
    

  

 
    

     
     //console.log(itemSlotIcon);
     $("."+ this.itemSlot).append(this.template(itemSlotIcon));



   

    },
    render: function(data){
    
    }
  });

  return HeadView;
});