$(document).ready(function(){
    $('.question_grid').click(function(){
        $(".find_out_btn").removeClass("btn_disable");
    });

    $('.find_out_btn').click(function(){
        $(".question_footer, .step1").hide();
       	$(".success_footer, .step2").show();
       	$('.question_progress_bar span').css('width','50%')
	    $('.second').circleProgress({
			value: val,
			startAngle: 4.7,
			fill: {
			  gradient: ['#f2c15f', '#e5854f'], 
			  gradientDirection: [0, 0, 120, 30] 
			}
		});
    
    });


});

console.log(Math.PI);
var val = $(".second").attr("val");

