window.Manipulator=function(t){"use strict";window.console&&window.console.log;var e=function(e){this.$el=t(e),this.init()};return e.prototype.init=function(){this.initShuffle(),this.setupEvents()},e.prototype.initShuffle=function(){this.$el.shuffle({itemSelector:".shuffeldiv",speed:250,easing:"ease",columnWidth:function(e){return parseInt(t(".shuffeldiv").css("width"))},gutterWidth:function(e){return parseInt(t(".shuffeldiv").css("margin-left"))}}),this.shuffle=this.$el.data("shuffle")},e.prototype.setupEvents=function(){var e=this;t("#sfsi_wDiv").on("click",t.proxy(e.onRandomize,e)),e.$el.on("removed.shuffle",(function(t,e,n){}))},e.prototype.onAddClick=function(){var e,n,o,i,s,f=document.createDocumentFragment(),u=this.$el[0],h=[],r=["w2","h2","w3"];for(o=0;o<5;o++)i=Math.random(),(n=document.createElement("div")).className="shuffeldiv",i>.8&&(s=Math.floor(3*Math.random()),n.className=n.className+" "+r[s]),h.push(n),f.appendChild(n);u.appendChild(f),e=t(h),this.shuffle.appended(e)},e.prototype.getRandomInt=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},e.prototype.onRemoveClick=function(){var e=this,n=e.shuffle.visibleItems,o=Math.min(3,n),i=[],s=0,f=t();if(n){for(;s<o;s++)i.push(e.getRandomInt(0,n-1));t.each(i,(function(t,n){f=f.add(e.shuffle.$items.eq(n))})),e.shuffle.remove(f)}},e.prototype.onRandomize=function(){this.shuffle.sort({randomize:!0})},e}(jQuery);