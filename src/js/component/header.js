define(["jquery","cookie"], () => {
	class Header{
		constructor(){
			this.init();
			this.star();
		}
		init(){
			//加载header.html
			new Promise((resolve, reject) => {
				$("header").load("/html/component/header.html", () => {
					resolve();
				})
			}).then(() => {
				this.nav();
				// this.star();
			})
		}
		nav(){
			var titleTop = $('.inner').offset().top;
			// var arr=[];
			if($.cookie("username")){
				var arr = $.cookie("username");
				$("#user").html("欢迎您！"+arr+" "+'<span class="userout">退出</span>');
				$(".userout").on("click",function(e){
					e=e||event;
					var target = e.target || e.srcElement;
					console.log($.cookie("username"));
					// $.cookie("username",null);
					$.cookie("username",null,{expires=-10,'path':'/'});
					window.history.go(0);
				})
			}else{
				var arr = [];
			}
		    $(document).on('scroll',function(){
		      if($(document).scrollTop() > titleTop){
		         $('.inner').css({
		             "position":"fixed",
		             "top":0
		     })
		    }else{
		 
		       $('.inner').css({
		           "position":"relative",
		           "top":0
		       })
		    }
		  })
		}

		star(){
			$("#ho1").onmouseenter(function(){
				$(".second").css("display","block");
			})
			$("#ho2").onmouseenter(function(){
				$(".second").css("display","block");
			})
		}
		
	}
	return new Header();
})