/**
* koala | minimal javascript framework for mobile apps.
*
* version 0.1
* author  rng
**/
var koala = 
{
		fadeCheck : new Array(),
		
		/**
		* return single dom element (works with native dom selectors)
		* @param query
		* @return element
		**/
		get  : function (query) 
		{
			return document.querySelector(query);
		},

		/**
		* return NodeList inculedes all elements for query (works with native dom selectors)
		* @param query
		* @return NodeList
		**/
		getAll : function (query) 
		{
			return document.querySelectorAll(query);
		},
		
		/**
		* show dom element (display:block) 
		* @param target dom element
		**/
		show : function (target) 
		{
			target.style.display = "block";
		},
		
		/**
		* hide dom element (display:none) 
		* @param target dom element
		**/
		hide : function (target) 
		{
			target.style.display = "none";
		},
		
		/**
		* show element with fadeIn effect
		* @param target dom element
		* @param delay  effect time
		**/
		fadeIn : function (target,delay) 
		{
		    if( koala.in_array(koala.fadeCheck, target.id + target.className) == false )
		    {			
				var opacityUp = 0; var i;
				target.style.opacity = "0";
				for(i = 0; i <= 9; i++ )
				{        
			        delay += 20;
					setTimeout(function() {        			
			            opacity = ( opacityUp == 9 ? "1" : "0." + opacityUp++ );
			            if(opacity == "1") { koala.fadeCheck = new Array(); }
						target.style.opacity = opacity;
					}, delay);
				}
				target.style.display = "block";			
		    }
		},
		
		/**
		* hide element with fadeOut effect
		* @param target dom element 
		* @param delay  effect time
		**/
		fadeOut : function (target,delay) 
		{
		    if( koala.in_array(koala.fadeCheck, target.id + target.className) == false )
		    {
		    	koala.fadeCheck.push( target.id + target.className );
				var opacityUp = 9; var i;
				for(i = 0; i <= 9; i++ )
				{        
			        delay += 25;
					setTimeout(function() {            
			            opacity = "0." + opacityUp--;
						target.style.opacity = opacity;
						if(opacity == "0.0") { target.style.display = "none"; koala.fadeCheck = new Array(); }
					}, delay);
				}
		    }
		},
		
		/**
		* check given value is in given array
		* @param array 
		* @param value
		* @returns {Boolean} item index in array
		**/
		in_array : function(arr,value)
		{
			arr.forEach(function(item,index)
			{
				if( item == value ) { return index; }				 
			});			
			return false;
		},
		
		/**
		* set click listener for given dom element 
		* @param target
		* @param callback function
		**/
		click : function(target, Callback)
		{	
			this.fn = Array.prototype.slice.call(arguments)[1];
			target.addEventListener("click", this.fn, false);			
		},
		
		/**
		* set listener to given event for given dom element 
		* @param target
		* @param callback function
		**/
		event : function(eventname, target, Callback)
		{	
			this.fn = Array.prototype.slice.call(arguments)[2];
			target.addEventListener(eventname, this.fn, false);			
		}		
		
};