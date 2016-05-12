/**
 * 使用 HTML5 的 History 新 API pushState 来曲线监听 Android 设备的返回按钮
 * @author azrael  
 * @date 2013/02/04
 * @version 1.0
 * @example
 * XBack.listen(function(){
		alert('oh! you press the back button');
	});
 */
;!function(pkg, undefined){
	var STATE = 'x-back';
	var element;

	var onPopState = function(event){
		event.state === STATE && fire();
	}

	var record = function(state){
		history.pushState(state, null, location.href);
	}

	var fire = function(){
		var event = document.createEvent('Events');
		event.initEvent(STATE, false, false);
		element.dispatchEvent(event);
	}

	var listen = function(listener){
		element.addEventListener(STATE, listener, false);
	}

	;!function(){
		element = document.createElement('span');
		window.addEventListener('popstate', onPopState);
		this.listen = listen;
		record(STATE);
	}.call(window[pkg] = window[pkg] || {});

}('XBack');
