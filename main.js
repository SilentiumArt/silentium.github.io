function showSocial(event) { 
    event.preventDefault(); 
    const modal = document.querySelector('.modal');
    const arrow = document.querySelector('.arrow-down');
    modal.classList.toggle("d-none");
    arrow.classList.toggle("rotate");
 }

// Ниже: скрипты, которые по нажатию на кнопку в галерее скрывают галерею и открывают тематический раздел

$('.landingButton').click(function (e) { 
    e.preventDefault();
    $('.gallery-list, .gallery .section_head>span').fadeOut();
    $('.landing-wrap').fadeIn();
    $('.gallery .section_head>h2').text('ЛЕНДИНГ');
    $('.backToGallery').fadeIn();
});
$('.comicsButton').click(function (e) { 
    e.preventDefault();
    $('.gallery-list, .gallery .section_head>span').fadeOut();
    $('.comics-wrap').fadeIn();
    $('.gallery .section_head>h2').text('КОМИКСЫ');
    $('.backToGallery').fadeIn();
});
$('.artButton').click(function (e) { 
    e.preventDefault();
    $('.gallery-list, .gallery .section_head>span').fadeOut();
    $('.art-wrap').fadeIn();
    $('.gallery .section_head>h2').text('АРТ');
    $('.backToGallery').fadeIn();
});
$('.sketchButton').click(function (e) { 
    e.preventDefault();
    $('.gallery-list, .gallery .section_head>span').fadeOut();
    $('.sketch-wrap').fadeIn();
    $('.gallery .section_head>h2').text('СКЕТЧ');
    $('.backToGallery').fadeIn();
});
$('.portretButton').click(function (e) { 
    e.preventDefault();
    $('.gallery-list, .gallery .section_head>span').fadeOut();
    $('.portret-wrap').fadeIn();
    $('.gallery .section_head>h2').text('ПОРТРЕТ');
    $('.backToGallery').fadeIn();
});

// Здесь заканчиваются скрипты с разкрытием тематических разделов.
// Ниже: скрипт, который по нажатию на кнопку "ГАЛЕРЕЯ" в тематическом разделе галереи скрывает его и снова показывает главную галереи

$('.backToGallery').click(function (e) { 
    e.preventDefault();
    $('.typeOfGallery-wrap').fadeOut();
    $('.gallery-list, .gallery .section_head>span').fadeIn();
    $('.gallery .section_head>h2').text('ГАЛЕРЕЯ');
    $(this).fadeOut(); 
});



