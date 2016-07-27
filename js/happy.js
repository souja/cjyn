// JavaScript Document
function download(){
	 var u = navigator.userAgent, app = navigator.appVersion;
     var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
     var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
	 if(isAndroid){
	    window.location.href = "http://www.wanghoubang.com/android/whbapp.apk";
	 }else if(isiOS){
	    window.location.href = "http://www.wanghoubang.com/down/ios";
	 }else{
		 if(type == "android"){
			  window.location.href = "http://www.wanghoubang.com/android/whbapp.apk";
		 }else{
			  alert('请在苹果移动设备上打开此页面!');
		 }
	 }
}
$(document).ready(function(){
	$(".shouqi").click(function(){
		var thisBtn = $(this);
		var target = $(this).parent().children(".listinfo");
		if (target.hasClass("active")) {
			target.removeClass("active");
			thisBtn.addClass("shouqi1").removeClass("shouqi2");
			thisBtn.html("收起");
		} else {
			target.addClass("active");
			thisBtn.removeClass("shouqi1").addClass("shouqi2");
			thisBtn.html("展开");
		}
		
	});
	$(".shouqicomment").click(function(){
		var target = $(this).parent().children(".listinfo");
		if (target.hasClass("active")) {
			window.location.href='#comment';
		} 
		
	});
});