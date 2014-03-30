define([
  'jquery', 
  'underscore', 
  'backbone',
  'collections/item.collection', 
  'text!templates/items/chest.html',
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
  var ChestView = Backbone.View.extend({
    template: _.template(html),
    template1: _.template(toolTip),
    el: $("body"),
    events: {
      "mouseenter .chest" : "hover",
      "mouseleave .chest" : "destroyToolTip",

    },
    initialize: function() {
     

      $(".chest").append(this.template(this.collection));

    },
        hover: function(e){
      that = this;
          var itemTip;
     itemTip = document.createElement("div");
     itemTip.className = "itemTip";
    document.body.appendChild(itemTip);
      
      this.ItemCollection = new ItemCollection([], {itemID: this.collection.chestID});
            if(this.collection.chestGem0){
        this.chestGem0 = new ItemCollection([], {itemID: this.collection.chestGem0});
         this.chestGem0.fetch({
          success : function(collection, response) {
          
           that.gem0Info = new Object();
            var data = response;
            if(data.gemInfo.bonus){
              that.gem0Info.gem0Bonus = data.gemInfo.bonus;
            }
   
          },
          error : function(collection, response) {
            // code here
          }
        });
      }
      if(this.collection.chestGem1){
        this.chestGem1 = new ItemCollection([], {itemID: this.collection.chestGem1});
         this.chestGem1.fetch({
          success : function(collection, response) {
            that.gem1Info = new Object();
            var data = response;
            if(data.gemInfo.bonus){
              that.gem1Info.gem1Bonus = data.gemInfo.bonus;
            }
          },
          error : function(collection, response) {
            // code here
          }
        });
      }
      if(this.collection.chestGem2){
        this.chestGem2 = new ItemCollection([], {itemID: this.collection.chestGem2});
        this.chestGem2.fetch({
          success : function(collection, response) {
           that.gem2Info = new Object();
            var data = response;
            if(data.gemInfo.bonus){
              that.gem2Info.gem2Bonus = data.gemInfo.bonus;
            }
           
   
          },
          error : function(collection, response) {
            // code here
          }
        });
      }
  
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
      if(that.gem0Info){
        self.combinedObjs = $.extend(this.collection, e, that.gem0Info);
      }
      if(that.gem1Info){
        console.log(that.gem1Info);
        console.log(that.gem0Info);

        self.combinedObjs = $.extend(this.collection, e, that.gem0Info, that.gem1Info);
      }
      if(that.gem2Info){

        self.combinedObjs = $.extend(this.collection, e, that.gem0Info, that.gem1Info, that.gem2Info);
      }
      console.log(self.combinedObjs);
      //console.log(this.combinedObjs);
     // console.log(that.gem1Info);

     //this.combinedObjs = $.extend(this.collection, e);
      //console.log(this.combinedObjs);


    $(document).mousemove(function(e){
    
        $(".itemTip").html(that.template1(self.combinedObjs));
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
      delete self.combinedObjs.gem0Bonus;
      delete self.combinedObjs.gem1Bonus;
      delete self.combinedObjs.gem2Bonus;
      console.log(self.combinedObjs);
    },
    render: function(){

    }
  });

  return ChestView;
});