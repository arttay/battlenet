define(['jquery', 
      'underscore', 
      'backbone', 
      'models/main.model'
      ], function
	(
	$,
	_,
	Backbone,
	MainModel
	)  {
	var  ItemCollection = Backbone.Collection.extend({
            model: MainModel,
            initialize: function(models, options) {
                  this.itemId = options.itemID;
               
            

              
            },
            sync: function(method, model, options){
            	   options.timeout = 10000;
   					 options.dataType = 'jsonp';
   					 options.jsonp = "jsonp";
   					 options.crossDomain = true;
   					  return Backbone.sync(method, model, options);

            },
            url: function(){
            	return "http://us.battle.net/api/wow/item/" + this.itemId;
            },
            parse: function(data){
                  var data = data;
                  var R = [];
                  var obj = new Object();
                        obj.name = data.name;

                  R.push(obj);
                  //console.log(obj);
                       // console.log("return object");
            		//console.log(obj);
                            return R;
            }
         
         
        });

	  return ItemCollection;
});