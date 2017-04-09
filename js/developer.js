(function(window,undefined){
	var throttle = function(fn,time){
		var __fn = fn,
			timer = null,
			first = true;
		return function(){
			var args = arguments,
				__self = this;
			if(first){
				__fn.apply(__self,args);
				return first = false;
			}
			if(timer){
				return false;
			}
			timer = setTimeout(function(){
				clearTimeout(timer);
				timer = null;
				__fn.apply(__self,args);
			},time || 500);
		}
	};
	window.throttle = throttle;
})(window)
