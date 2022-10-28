setTimeout(function(){
    $('.sonbag').css({transform: 'translateY(0)'})
},200)

$('.wapper ul li').on('click',function(){
     $(this).addClass('active');
    $('.wapper ul').addClass('active');
})
$('.cover').on('click',function(e){
    e.stopPropagation()
    $('.wapper ul .active').removeClass('active');
    $('.wapper ul').removeClass('active');
})