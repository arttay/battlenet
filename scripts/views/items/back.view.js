define([
  'jquery', 
  'underscore', 
  'backbone',
  'collections/item.collection',  
  'text!templates/items/back.html',
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
  var BackView = Backbone.View.extend({
    template: _.template(html),
    template1: _.template(toolTip),
    el: $("body"),
    events: {
      "mouseenter .back" : "hover",
      "mouseleave .back" : "destroyToolTip",

    },
    initialize: function() {
   

      $(".back").append(this.template(this.collection));

    },
            hover: function(e){
      that = this;
          var itemTip;
     itemTip = document.createElement("div");
     itemTip.className = "itemTip";
    document.body.appendChild(itemTip);
      
      this.ItemCollection = new ItemCollection([], {itemID: this.collection.backID});
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
    $(document).mousemove(function(e){
      console.log(that.col);
        $(".itemTip").html(that.template1(that.col));
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

  return BackView;
});