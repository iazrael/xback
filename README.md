如果你做过 Android 的 Web 开发, 那么你应该发现了页面是无法监听屏幕右下方(也可能是左下方)的返回按钮的, 使用 XBack 则可以帮你粗略的监听页面返回事件(虽然不太准, ^_^)

原理
====
XBack 使用 HTML5 的 History 新 API pushState 来曲线监听 Android 设备的返回按钮, 在页面加载后往历史记录写入一个 state, 并监听 popstate 事件, 如果返回按钮被按下, 则会触发 popstate, 比对到触发的 state 跟写入的一致, 则认为返回按钮被按下了.

Example
========
页面引入xback.js后, 使用下面的方法监听返回按钮事件, 支持多方法绑定

	XBack.listen(function(){
		alert('oh! you press the back button');
	});

	XBack.listen(function(){
		alert('ah, press press press');
	});