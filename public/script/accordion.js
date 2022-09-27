$('.accordion_title').on('click', function(){
    $('.accordion_title').removeClass('active');
    $(this).addClass('active');

    $('.accordion_content').removeClass('active');
    $(this).next().addClass('active');
})

$('.accordion_title').eq(0).trigger('click');