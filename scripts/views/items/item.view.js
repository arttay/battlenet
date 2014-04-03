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
    events: {
      "mouseenter .back"      :     "hover",
      "mouseleave .back"      :     "destroyToolTip",
      "mouseenter .chest"     :     "hover",
      "mouseleave .chest"     :     "destroyToolTip",
      "mouseenter .head"      :     "hover",
      "mouseleave .head"      :     "destroyToolTip",
      "mouseenter .neck"      :     "neckHover",
      "mouseleave .neck"      :     "destroyToolTip",
      "mouseenter .shoulder"  :     "neckHover",
      "mouseleave .shoulder"  :     "destroyToolTip",
      "mouseenter .wrist"     :     "hover",
      "mouseleave .wrist"     :     "destroyToolTip"

    },
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
    hover: function(e){
          var itemSlotHover = e.currentTarget.className;
          var itemId = itemSlotHover + "ID";
          console.log(this.collection[itemId]);



      that = this;
          var itemTip;
     itemTip = document.createElement("div");
     itemTip.className = "itemTip";
    document.body.appendChild(itemTip);


    this.ItemCollection = new ItemCollection([], {itemID: this.collection[itemId]});
      this.ItemCollection.fetch({
          success : function(collection, response) {
            console.log(response);
            that.createTooltip(response);
   
          },
          error : function(collection, response) {
            // code here
          }
        });


  },
  createTooltip: function(e){
      //console.log(e);
      this.col = e;
      self = this

    $(document).mousemove(function(e){
    //  console.log(self.combinedObjs);
        $(".itemTip").html(that.template1(self.col));
        $(".itemTip").css({
            position: function(index, value){
              return "fixed";
        },
          left: function(index, value){
              return e.pageX + 20;
        },
          top: function(index, value){
              return e.pageY + 20;
          }
      });
    });
    
    },
     destroyToolTip: function(e) {
      $(".itemTip").remove();
        console.log(self.combinedObjs);

      console.log(self.combinedObjs);
    },
  
    render: function(data){
    
    }
  });

  return HeadView;
});