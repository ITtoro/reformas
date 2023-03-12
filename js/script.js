
$(document).ready(function(e) {

    $('.shadow_popup').click(function (){
	    $(this).fadeOut();
	    $('.form_popup').fadeOut();
	    $('.popup').fadeOut();
		$('#cat_page').fadeOut();
    });
	
    $('.callme').click(function (){
		$('.shadow_popup').fadeIn();
	    $('#callme').fadeIn();
    });
	
	$('.blag').hover(function(){
		$(this).addClass('animated bounce');
		},
		function(){
		$(this).removeClass('animated bounce');
		
	});
	
	$("#form1").submit(function() { return false; });
	$("#form2").submit(function() { return false; });
	$("#form3").submit(function() { return false; });
	$("#form4").submit(function() { return false; });
	$("#form5").submit(function() { return false; });
	
	$("#button1").on("click", function(){
		var namval    = $("#name1").val();
		var namlen    = namval.length;
						
		var msgval    = $("#phone1").val();
		var msglen    = msgval.length;
		
		if(msglen >= 7 && namlen >= 1) {
			$("#button1").replaceWith("<div class='sending' style='text-align: center;margin-top:10px;'>Отправка...</div>");
				
			$.ajax({
					type: 'POST',
					url: 'cat.php',
					data: $("#form1").serialize(),
					success: function(data) {
						if(data == "true") {
							yaCounter23278738.reachGoal('form1');
							$(".sending").replaceWith("<div class='senden' style='text-align: center;margin-top:10px;'>Заявка принята!<br/>Мы скоро Вам перезвоним</div>");
							$("#callme").fadeOut();
							$('#blag').fadeIn();
							$('#blag').delay(3000);
							$('#blag').fadeOut();
							$('.shadow_popup').delay(3000);
							$('.shadow_popup').fadeOut();
							return true;
						} else {
							$(".sending").replaceWith("<div class='senden' style='text-align: center;margin-top:10px;'>Ошибка! Обновите страницу...</div>");
							$('#callme').delay(2000);
							$('#callme').fadeOut();
							$('.shadow_popup').delay(2000);
							$('.shadow_popup').fadeOut();
						}
					}
			});
		}
	});
	$("#button2").on("click", function(){
		var namval    = $("#name2").val();
		var namlen    = namval.length;
						
		var msgval    = $("#phone2").val();
		var msglen    = msgval.length;
		
		if(msglen >= 7 && namlen >= 1) {
			$("#button2").replaceWith("<div class='sending' style='text-align: center;margin-top:10px;'>Отправка...</div>");
				
			$.ajax({
					type: 'POST',
					url: 'cat.php',
					data: $("#form2").serialize(),
					success: function(data) {
						if(data == "true") {
							yaCounter23278738.reachGoal('form2');
							$(".sending").replaceWith("<div class='senden' style='text-align: center;margin-top:10px;'>Заявка принята!<br/>Мы скоро Вам перезвоним</div>");
							$('.shadow_popup').fadeIn();
							$('#blag').fadeIn();
							$('#blag').delay(3000);
							$('#blag').fadeOut();
							$('.shadow_popup').delay(3000);
							$('.shadow_popup').fadeOut();
							return true;
						} else {
							$(".sending").replaceWith("<div class='senden' style='text-align: center;margin-top:10px;'>Ошибка! Обновите страницу...</div>");
						}
					}
			});
		}
	});
	$("#button3").on("click", function(){
		var namval    = $("#name3").val();
		var namlen    = namval.length;
						
		var msgval    = $("#phone3").val();
		var msglen    = msgval.length;
		
		if(msglen >= 7 && namlen >= 1) {
			$("#button3").replaceWith("<div class='sending' style='text-align: center;margin-top:10px;'>Отправка...</div>");
				
			$.ajax({
					type: 'POST',
					url: 'cat.php',
					data: $("#form3").serialize(),
					success: function(data) {
						if(data == "true") {
							yaCounter23278738.reachGoal('form3');
							$(".sending").replaceWith("<div class='senden' style='text-align: center;margin-top:10px;'>Заявка принята!<br/>Мы скоро Вам перезвоним</div>");
							$('.shadow_popup').fadeIn();
							$('#blag').fadeIn();
							$('#blag').delay(3000);
							$('#blag').fadeOut();
							$('.shadow_popup').delay(3000);
							$('.shadow_popup').fadeOut();
							return true;
						} else {
							$(".sending").replaceWith("<div class='senden' style='text-align: center;margin-top:10px;'>Ошибка! Обновите страницу...</div>");
						}
					}
			});
		}
	});
	$("#button4").on("click", function(){
		var namval    = $("#name4").val();
		var namlen    = namval.length;
						
		var msgval    = $("#phone4").val();
		var msglen    = msgval.length;
		
		if(msglen >= 7 && namlen >= 1) {
			$("#button4").replaceWith("<div class='sending' style='text-align: center;margin-top:10px;'>Отправка...</div>");
				
			$.ajax({
					type: 'POST',
					url: 'cat.php',
					data: $("#form4").serialize(),
					success: function(data) {
						if(data == "true") {
							yaCounter23278738.reachGoal('form4');
							$(".sending").replaceWith("<div class='senden' style='text-align: center;margin-top:10px;'>Заявка принята!<br/>Мы скоро Вам перезвоним</div>");
							$('.shadow_popup').fadeIn();
							$('#blag').fadeIn();
							$('#blag').delay(3000);
							$('#blag').fadeOut();
							$('.shadow_popup').delay(3000);
							$('.shadow_popup').fadeOut();
							return true;
						} else {
							$(".sending").replaceWith("<div class='senden' style='text-align: center;margin-top:10px;'>Ошибка! Обновите страницу...</div>");
						}
					}
			});
		}
	});
	$("#button5").on("click", function(){
		var namval    = $("#name5").val();
		var namlen    = namval.length;
						
		var msgval    = $("#phone5").val();
		var msglen    = msgval.length;
		
		if(msglen >= 7 && namlen >= 1) {
			$("#button5").replaceWith("<div class='sending' style='text-align: center;margin-top:10px;'>Отправка...</div>");
				
			$.ajax({
					type: 'POST',
					url: 'cat.php',
					data: $("#form5").serialize(),
					success: function(data) {
						if(data == "true") {
							yaCounter23278738.reachGoal('form5');
							$(".sending").replaceWith("<div class='senden' style='text-align: center;margin-top:10px;'>Заявка принята!<br/>Мы скоро Вам перезвоним</div>");
							$('.shadow_popup').fadeIn();
							$('#blag').fadeIn();
							$('#blag').delay(3000);
							$('#blag').fadeOut();
							$('.shadow_popup').delay(3000);
							$('.shadow_popup').fadeOut();
							return true;
						} else {
							$(".sending").replaceWith("<div class='senden' style='text-align: center;margin-top:10px;'>Ошибка! Обновите страницу...</div>");
						}
					}
			});
		}
	});
	
	
});

$(document).ready(function(){
	$window = $(window);       
	$('.paralax').each(function(){
		var $bgobj = $(this);		
		$(window).scroll(function() {
			var yPos = -($window.scrollTop() - $bgobj.offset().top + $(window).height()-100)/ $bgobj.data('speed'); 
			var coords = '0 '+ yPos + 'px';
			$bgobj.css({ backgroundPosition: coords });
		}); 
	});	
}); 

(function($){
    $(function(){
        var e = $(".scrollTop");
        var    speed = 500;
		e.click(function(){
			$("html,body").animate({ scrollTop: 0, oScrollTop: 0}, 500 );
			return false;
		});
        function show_scrollTop(){
            ( $(window).scrollTop()>300 ) ? e.fadeIn(600) : e.fadeOut();
        }
        $(window).scroll( function(){show_scrollTop()} ); show_scrollTop();
		
		var b = $(".popup_menu");
        function show_scrollTop1(){
            ( $(window).scrollTop()>150 ) ? b.slideDown() : b.slideUp();
        }
        $(window).scroll( function(){show_scrollTop1()} ); show_scrollTop1();
    });
 
})(jQuery)

