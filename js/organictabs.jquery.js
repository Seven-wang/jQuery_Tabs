$(function(){
	var eq_now 
  	$(".nav li").live('click',
    	function(){
	      	var eq = $(".nav li").index(this)
	      	if(eq_now != eq){
		      	$(".list-wrap ul").animate({
		           opacity: "hide"
		       	}, 500); 
		       	setTimeout('$(".list-wrap ul").eq('+eq+').animate({ opacity: "show"}, 500)',500)
		    	var $allListWrap = $("#example-one").find(".list-wrap");
		    	var curListHeight = $("#example-one").find(".list-wrap ul").eq(eq).height();
		    	$allListWrap.height(curListHeight);
		    	eq_now = eq
	      	}
   		}
  	)
})