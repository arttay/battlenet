define([
  'jquery', 
  'underscore', 
  'backbone', 
  'collections/item.collection', 
  'text!templates/items/shoulder.html',
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
  var ShoulderView = Backbone.View.extend({
    el: $("body"),
    template: _.template(html),
    template1: _.template(toolTip),
    events: {
      "mouseenter .shoulder" : "neckHover",
      "mouseleave .shoulder" : "destroyToolTip"

    },
    initialize: function() {
   

      $(".shoulder").append(this.template(this.collection));

    },
    neckHover: function(e){
      console.log("yep");
      that = this;
          var itemTip;
     itemTip = document.createElement("div");
     itemTip.className = "itemTip";
    document.body.appendChild(itemTip);
      
      this.ItemCollection = new ItemCollection([], {itemID: this.collection.shoulderID});
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
     this.col = e;
     self = this;
     this.combinedObjs = $.extend(this.collection, e);
      $(".itemTip").html(that.template1(this.col));
    $(document).mousemove(function(e){
     
       
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
    },
    render: function(){

    }
  });

  return ShoulderView;
});