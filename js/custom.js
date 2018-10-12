$(document).ready(function(){
    $('.question_grid').click(function(){
        $(".find_out_btn").removeClass("btn_disable");
    });

    $('.find_out_btn').click(function(){
        $(".question_footer, .step1").hide();
       	$(".success_footer, .step2").show();
    });

});

