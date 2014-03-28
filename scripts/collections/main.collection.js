define(['jquery', 'underscore', 'backbone', 'models/main.model'], function
	(
	$,
	_,
	Backbone,
	MainModel
	)  {
	var MainCollection = Backbone.Collection.extend({
            model: MainModel,
            initialize: function() {
            

              
            },
            sync: function(method, model, options){
            	   options.timeout = 10000;
   					 options.dataType = 'jsonp';
   					 options.jsonp = "jsonp";
   					 options.crossDomain = true;
   					  return Backbone.sync(method, model, options);

            },
            url: function(){
            	return "http://us.battle.net/api/wow/character/Alexstrasza/Leica?fields=guild,items,professions,stats,pvp,titles,audit,progression,appearance,talents";
            },
            parse: function(data){
            	console.log("parse data");
            	console.log(data);
            	
                  var data = data;
                  var R = [];
            	var obj = new Object();
            	if(data.achievementPoints){
            		obj.achievementPoints = data.achievementPoints
            	}
            	if(data.class){
            		obj.charClass = data.class;
            	}
            	if(data.level){
            		obj.level = data.level;
            	}
            	if(data.name){
            		obj.name = data.name;
            	}
            	if(data.realm){
            		obj.realm = data.realm;
            	}
            	if(data.thumbnail){
            		obj.thumbnail = data.thumbnail;
            	}
                  if(data.race){
                        obj.race = data.race;
                  }
              
                  obj.rgbRating = data.pvp.brackets.ARENA_BRACKET_RBG.rating;
                  obj.rgbLost = data.pvp.brackets.ARENA_BRACKET_RBG.seasonLost;
                  obj.rgbSeasonPlayed = data.pvp.brackets.ARENA_BRACKET_RBG.seasonPlayed;
                  obj.rgbSeasonWon = data.pvp.brackets.ARENA_BRACKET_RBG.seasonWon;
                  obj.rgbWeeklyLost = data.pvp.brackets.ARENA_BRACKET_RBG.weeklyLost;
                  obj.rgbWeeklyPlayed = data.pvp.brackets.ARENA_BRACKET_RBG.weeklyPlayed;
                  obj.rgbWeeklyWon = data.pvp.brackets.ARENA_BRACKET_RBG.weeklyWon;
                  
                  obj.arena3v3Rating = data.pvp.brackets.ARENA_BRACKET_3v3.rating;
                  obj.arena3v3seasonLost = data.pvp.brackets.ARENA_BRACKET_3v3.seasonLost;
                  obj.arena3v3seasonPlayed = data.pvp.brackets.ARENA_BRACKET_3v3.seasonPlayed;
                  obj.arena3v3seasonWon = data.pvp.brackets.ARENA_BRACKET_3v3.seasonWon;
                  obj.arena3v3weeklyLost = data.pvp.brackets.ARENA_BRACKET_3v3.weeklyLost;
                  obj.arena3v3weeklyPlayed = data.pvp.brackets.ARENA_BRACKET_3v3.weeklyPlayed;
                  obj.arena3v3weeklyWon = data.pvp.brackets.ARENA_BRACKET_3v3.weeklyWon;
                                    
                  obj.arena2v2rating = data.pvp.brackets.ARENA_BRACKET_2v2.rating;
                  obj.arena2v2seasonLost = data.pvp.brackets.ARENA_BRACKET_2v2.seasonLost;
                  obj.arena2v2seasonPlayed = data.pvp.brackets.ARENA_BRACKET_2v2.seasonPlayed;
                  obj.arena2v2seasonWon = data.pvp.brackets.ARENA_BRACKET_2v2.seasonWon;
                  obj.arena2v2weeklyLost = data.pvp.brackets.ARENA_BRACKET_2v2.weeklyLost;
                  obj.arena2v2weeklyPlayed = data.pvp.brackets.ARENA_BRACKET_2v2.weeklyPlayed;
                  obj.arena2v2weeklyWon = data.pvp.brackets.ARENA_BRACKET_2v2.weeklyWon;
                                    
                  obj.arena5v5rating = data.pvp.brackets.ARENA_BRACKED_5v5.rating;
                  obj.arena5v5seasonLost = data.pvp.brackets.ARENA_BRACKED_5v5.seasonLost;
                  obj.arena5v5seasonPlayed = data.pvp.brackets.ARENA_BRACKED_5v5.seasonPlayed;
                  obj.arena5v5seasonWon = data.pvp.brackets.ARENA_BRACKED_5v5.seasonWon;
                  obj.arena5v5weeklyLost = data.pvp.brackets.ARENA_BRACKED_5v5.weeklyLost;
                  obj.arena5v5weeklyPlayed = data.pvp.brackets.ARENA_BRACKED_5v5.weeklyPlayed;
                  obj.arena5v5weeklyWon = data.pvp.brackets.ARENA_BRACKED_5v5.weeklyWon;
                         
                
                  obj.guildName = data.guild.name;
                  obj.spec = data.talents[0].spec.name;



                        if(data.guild.name){
                              obj.guildName = data.guild.name;
                        }
                        if(data.guild.realm){
                              obj.guildRealm = data.guild.realm;
                        }
                        if(data.guild.battlegroup){
                              obj.guildBattleGroup = data.guild.battlegroup;
                        }
                        if(data.guild.members){
                              obj.guildMemberNumber = data.guild.members;
                        }
                        if(data.guild.emblem){
                             if(data.guild.emblem.backgroundColor){
                                    obj.guildEmblemBackgroundColor = data.guild.emblem.backgroundColor;
                             } 
                             if(data.guild.emblem.border){
                                    obj.guildEmblemBorder = data.guild.emblem.border;
                             }
                             if(data.guild.emblem.borderColor){
                                    obj.guildEmblemBorderColor = data.guild.emblem.borderColor;
                             }
                             if(data.guild.emblem.icon){
                                    obj.guildEmblemIcon =data.guild.emblem.icon;
                             }
                             if(data.guild.emblem.iconColor){
                                    obj.guildEmblemIconColor = data.guild.emblem.iconColor;
                             }
                        }//end data.guild.emblem
            if(data.talents){
                  
            }
              
  
            if(data.professions){
                  if(data.professions.primary){
                        if(data.professions.primary[0]){
                              if(data.professions.primary[0].name){
                                    obj.firstProfName = data.professions.primary[0].name;
                              }
                              if(data.professions.primary[0].icon){
                                    obj.firstProfIcon = data.professions.primary[0].icon;
                              }
                              if(data.professions.primary[0].max){
                                    obj.firstProfMax = data.professions.primary[0].max;
                              }
                              if(data.professions.primary[0].rank){
                                    obj.firstProfRank = data.professions.primary[0].rank;
                              }
                              if(data.professions.primary[0].recipes){
                                    obj.firstProfRecipes = data.professions.primary[0].recipes;
                              }
                        }//end primary[0]
                        if(data.professions.primary[1]){
                              if(data.professions.primary[1].icon){
                                    obj.secondProfIcon = data.professions.primary[1].icon;
                              }
                              if(data.professions.primary[1].max){
                                    obj.secondProfMax = data.professions.primary[1].max;
                              }
                              if(data.professions.primary[1].name){
                                    obj.secondProfName = data.professions.primary[1].name;
                              }
                              if(data.professions.primary[1].rank){
                                    obj.secondProfRank = data.professions.primary[1].rank;
                              }
                              if(data.professions.primary[1].recipes){
                                    obj.seconProfRecipes = data.professions.primary[1].recipes;
                              }
                        }//end primary[1]
                  }//end primary
            }//end proff
       
            if(data.audit){
                  if(data.audit.emptySockets){
                        obj.emptySockets = data.audit.emptySockets;
                  }
                  if(data.audit.emptyGlyphSlots){
                        obj.emptyGlyphSlots = data.audit.emptyGlyphSlots;
                  }
                  if(data.audit.noSpec){
                        obj.noSpec = data.audit.noSpec;
                  }
                  if(data.audit.numberOfIssues){
                        obj.numberOfIssues = data.audit.numberOfIssues;
                  }
                  if(data.audit.unspentTalentPoints){
                        obj.unspentTalentPoints = data.audit.unspentTalentPoints;
                  }
                  if(!$.isEmptyObject( data.audit.inappropriateArmorType )){
                        obj.inappropriateArmorType = data.audit.inappropriateArmorType;
                        
                  }
                   if(!$.isEmptyObject( data.audit.itemsWithEmptySockets )){
                        obj.itemsWithEmptySockets = data.audit.itemsWithEmptySockets;
                        
                  }
                   if(!$.isEmptyObject( data.audit.missingBlacksmithSockets )){
                        obj.missingBlacksmithSockets = data.audit.missingBlacksmithSockets;
                        
                  }
                   if(!$.isEmptyObject( data.audit.missingEnchanterEnchants )){
                        obj.missingEnchanterEnchants = data.audit.missingEnchanterEnchants;
                        
                  }
                   if(!$.isEmptyObject( data.audit.missingEngineerEnchants )){
                        obj.missingEngineerEnchants = data.audit.missingEngineerEnchants;
                        
                  }
                   if(!$.isEmptyObject( data.audit.missingExtraSockets )){
                        obj.missingExtraSockets = data.audit.missingExtraSockets;
                        
                  }
                  if(!$.isEmptyObject( data.audit.missingLeatherworkerEnchants )){
                        obj.missingLeatherworkerEnchants = data.audit.missingLeatherworkerEnchants;
                        
                  }
                  if(!$.isEmptyObject( data.audit.missingScribeEnchants )){
                        obj.missingScribeEnchants = data.audit.missingScribeEnchants;
                        
                  }
                  if(!$.isEmptyObject( data.audit.recommendedBeltBuckle )){
                        obj.recommendedBeltBuckle = data.audit.recommendedBeltBuckle;
                        
                  }
                  if(!$.isEmptyObject( data.audit.unenchantedItems )){
                        obj.unenchantedItems = data.audit.unenchantedItems;
                        
                  }
            }//end audit
   
            if(data.items){
                  if(data.items.averageItemLevel){
                        obj.averageItemLevel = data.items.averageItemLevel;
                  }
                  if(data.items.averageItemLevelEquipped){
                        obj.averageItemLevelEquipped = data.items.averageItemLevelEquipped;
                  }
                  if(data.items.back){
                        if(data.items.back.armor){
                              obj.backArmor = data.items.back.armor;
                        }
                        if(data.items.back.icon){
                              obj.backIcon = data.items.back.icon;
                        }
                        if(data.items.back.id){
                              obj.backID = data.items.back.id;
                        }
                        if(data.items.back.itemLevel){
                              obj.backItemLevel = data.items.back.itemLevel;
                        }
                        if(data.items.back.name){
                              obj.backName = data.items.back.name;
                        }
                  }//end back

                  if(data.items.feet){
                        if(data.items.feet.armor){
                              obj.feetArmor = data.items.feet.armor;
                        }
                        if(data.items.feet.icon){
                              obj.feetIcon = data.items.feet.icon;
                        }
                        if(data.items.feet.id){
                              obj.feetID = data.items.feet.id;
                        }
                        if(data.items.feet.itemLevel){
                              obj.feetItemLevel = data.items.feet.itemLevel;
                        }
                        if(data.items.feet.name){
                              obj.feetName = data.items.feet.name;
                        }
                  }//end feet

                  if(data.items.chest){
                        if(data.items.chest.armor){
                              obj.chestArmor = data.items.chest.armor;
                        }
                        if(data.items.chest.icon){
                              obj.chestIcon = data.items.chest.icon;
                        }
                        if(data.items.chest.id){
                              obj.chestID = data.items.chest.id;
                        }
                        if(data.items.chest.itemLevel){
                              obj.chestItemLevel = data.items.chest.itemLevel;
                        }
                        if(data.items.chest.name){
                              obj.chestName = data.items.chest.name;
                        }
                        if(data.items.chest.hasOwnProperty("tooltipParams")){
                              obj.chestToolTipParams = data.items.chest.tooltipParams;
                              console.log("tooltips");
                              console.log(obj.chestToolTipParams);
                              if(data.items.chest.tooltipParams.hasOwnProperty("gem0")){
                                    obj.gem0 = data.items.chest.tooltipParams.gem0;
                               }
                              if(data.items.chest.tooltipParams.hasOwnProperty("gem1")){
                                   obj.gem1 = data.items.chest.tooltipParams.gem1;
                               }
                              if(data.items.chest.tooltipParams.hasOwnProperty("gem2")){
                                   obj.gem2 = data.items.chest.tooltipParams.gem2;
                               }
                        }

                  }//end chest

                  if(data.items.finger1){
                        if(data.items.finger1.armor){
                              obj.finger1Armor = data.items.finger1.armor;
                        }
                        if(data.items.finger1.icon){
                              obj.finger1Icon = data.items.finger1.icon;
                        }
                        if(data.items.finger1.id){
                              obj.finger1ID = data.items.finger1.id;
                        }
                        if(data.items.finger1.itemLevel){
                              obj.finger1ItemLevel = data.items.finger1.itemLevel;
                        }
                        if(data.items.finger1.name){
                              obj.finger1Name = data.items.finger1.name;
                        }
                  }//end finger1
                  if(data.items.finger2){
                        if(data.items.finger2.armor){
                              obj.finger2Armor = data.items.finger2.armor;
                        }
                        if(data.items.finger2.icon){
                              obj.finger2Icon = data.items.finger2.icon;
                        }
                        if(data.items.finger2.id){
                              obj.finger2ID = data.items.finger2.id;
                        }
                        if(data.items.finger2.itemLevel){
                              obj.finger2ItemLevel = data.items.finger2.itemLevel;
                        }
                        if(data.items.finger2.name){
                              obj.finger2Name = data.items.finger2.name;
                        }
                  }//end finger1

                  if(data.items.hands){
                        if(data.items.hands.armor){
                              obj.handsArmor = data.items.hands.armor;
                        }
                        if(data.items.hands.icon){
                              obj.handsIcon = data.items.hands.icon;
                        }
                        if(data.items.hands.id){
                              obj.handsID = data.items.hands.id;
                        }
                        if(data.items.hands.itemLevel){
                              obj.handsItemLevel = data.items.hands.itemLevel;
                        }
                        if(data.items.hands.name){
                              obj.handsName = data.items.hands.name;
                        }
                  }//end finger1

                  if(data.items.head){
                        if(data.items.head.armor){
                              obj.headArmor = data.items.head.armor;
                        }
                        if(data.items.head.icon){
                              obj.headIcon = data.items.head.icon;
                        }
                        if(data.items.head.id){
                              obj.headID = data.items.head.id;
                        }
                        if(data.items.head.itemLevel){
                              obj.headItemLevel = data.items.head.itemLevel;
                        }
                        if(data.items.head.name){
                              obj.headName = data.items.head.name;
                        }
                  }//end finger1


                  if(data.items.legs){
                        if(data.items.legs.armor){
                              obj.legsArmor = data.items.legs.armor;
                        }
                        if(data.items.legs.icon){
                              obj.legsIcon = data.items.legs.icon;
                        }
                        if(data.items.legs.id){
                              obj.legsID = data.items.legs.id;
                        }
                        if(data.items.legs.itemLevel){
                              obj.legsItemLevel = data.items.legs.itemLevel;
                        }
                        if(data.items.legs.name){
                              obj.legsName = data.items.legs.name;
                        }
                  }//end finger1

                  if(data.items.mainHand){
                        if(data.items.mainHand.armor){
                              obj.mainHandArmor = data.items.mainHand.armor;
                        }
                        if(data.items.mainHand.icon){
                              obj.mainHandIcon = data.items.mainHand.icon;
                        }
                        if(data.items.mainHand.id){
                              obj.mainHandID = data.items.mainHand.id;
                        }
                        if(data.items.mainHand.itemLevel){
                              obj.mainHandItemLevel = data.items.mainHand.itemLevel;
                        }
                        if(data.items.mainHand.name){
                              obj.mainHandName = data.items.mainHand.name;
                        }
                  }//end finger1


                  if(data.items.neck){
                        if(data.items.neck.armor){
                              obj.neckArmor = data.items.neck.armor;
                        }
                        if(data.items.neck.icon){
                              obj.neckIcon = data.items.neck.icon;
                        }
                        if(data.items.neck.id){
                              obj.neckID = data.items.neck.id;
                        }
                        if(data.items.neck.itemLevel){
                              obj.neckItemLevel = data.items.neck.itemLevel;
                        }
                        if(data.items.neck.name){
                              obj.neckName = data.items.neck.name;
                        }
                  }//end finger1
            }//end items

            if(data.items.offHand){
                        if(data.items.offHand.armor){
                              obj.offHandArmor = data.items.offHand.armor;
                        }
                        if(data.items.offHand.icon){
                              obj.offHandIcon = data.items.offHand.icon;
                        }
                        if(data.items.offHand.id){
                              obj.offHandID = data.items.offHand.id;
                        }
                        if(data.items.offHand.itemLevel){
                              obj.finger1ItemLevel = data.items.offHand.itemLevel;
                        }
                        if(data.items.offHand.name){
                              obj.offHandName = data.items.offHand.name;
                        }
                  }//end finger1


                  if(data.items.shoulder){
                        if(data.items.shoulder.armor){
                              obj.shoulderArmor = data.items.shoulder.armor;
                        }
                        if(data.items.shoulder.icon){
                              obj.shoulderIcon = data.items.shoulder.icon;
                        }
                        if(data.items.shoulder.id){
                              obj.shoulderID = data.items.shoulder.id;
                        }
                        if(data.items.shoulder.itemLevel){
                              obj.shoulderItemLevel = data.items.shoulder.itemLevel;
                        }
                        if(data.items.shoulder.name){
                              obj.shoulderName = data.items.shoulder.name;
                        }
                  }//end finger1



                  if(data.items.trinket1){
                        if(data.items.trinket1.armor){
                              obj.trinket1Armor = data.items.trinket1.armor;
                        }
                        if(data.items.trinket1.icon){
                              obj.trinket1Icon = data.items.trinket1.icon;
                        }
                        if(data.items.trinket1.id){
                              obj.trinket1ID = data.items.trinket1.id;
                        }
                        if(data.items.trinket1.itemLevel){
                              obj.trinket1ItemLevel = data.items.trinket1.itemLevel;
                        }
                        if(data.items.trinket1.name){
                              obj.trinket1Name = data.items.trinket1.name;
                        }
                  }//end finger1


                  if(data.items.trinket2){
                        if(data.items.trinket2.armor){
                              obj.trinket2Armor = data.items.trinket2.armor;
                        }
                        if(data.items.trinket2.icon){
                              obj.trinket2Icon = data.items.trinket2.icon;
                        }
                        if(data.items.trinket2.id){
                              obj.trinket2ID = data.items.trinket2.id;
                        }
                        if(data.items.trinket2.itemLevel){
                              obj.trinket2ItemLevel = data.items.trinket2.itemLevel;
                        }
                        if(data.items.trinket2.name){
                              obj.trinket2Name = data.items.trinket2.name;
                        }
                  }//end finger1



                  if(data.items.waist){
                        if(data.items.waist.armor){
                              obj.waistArmor = data.items.finger1.armor;
                        }
                        if(data.items.waist.icon){
                              obj.waistIcon = data.items.finger1.icon;
                        }
                        if(data.items.waist.id){
                              obj.waistID = data.items.finger1.id;
                        }
                        if(data.items.waist.itemLevel){
                              obj.finger1ItemLevel = data.items.finger1.itemLevel;
                        }
                        if(data.items.waist.name){
                              obj.waistName = data.items.finger1.name;
                        }
                  }//end finger1
                   if(data.items.wrist){
                        if(data.items.wrist.armor){
                              obj.wristArmor = data.items.wrist.armor;
                        }
                        if(data.items.wrist.icon){
                              obj.wristIcon = data.items.wrist.icon;
                        }
                        if(data.items.wrist.id){
                              obj.wristID = data.items.wrist.id;
                        }
                        if(data.items.wrist.itemLevel){
                              obj.wristItemLevel = data.items.wrist.itemLevel;
                        }
                        if(data.items.wrist.name){
                              obj.finger1Name = data.items.wrist.name;
                        }
                  }//end wrist
               





                 
      

                  R.push(obj);
               
                  

                       // console.log("return object");
            		//console.log(obj);
                            return R;
            }
         
         
        });

	  return MainCollection;
});