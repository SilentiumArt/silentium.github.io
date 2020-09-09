function showSocial(event) { 
    event.preventDefault(); 
    const modal = document.querySelector('.modal');
    const arrow = document.querySelector('.arrow-down');
    modal.classList.toggle("d-none");
    arrow.classList.toggle("rotate");
 }

// function showGallery (event) {
//     event.preventDefault(); 
//     const blackBg = document.querySelector('.carousel');
//     blackBg.fadeOut();
// }

$('.landingButton').click(function (e) { 
    e.preventDefault();
    $('.gallery-list, .gallery .section_head>span').fadeOut();
    $('.landing-wrap').fadeIn();
    $('.gallery .section_head>h2').text('ЛЕНДИНГ');
    
});
$('.comicsButton').click(function (e) { 
    e.preventDefault();
    $('.gallery-list, .gallery .section_head>span').fadeOut();
    $('.comics-wrap').fadeIn();
    $('.gallery .section_head>h2').text('КОМИКСЫ');
    
});
$('.artButton').click(function (e) { 
    e.preventDefault();
    $('.gallery-list, .gallery .section_head>span').fadeOut();
    $('.art-wrap').fadeIn();
    $('.gallery .section_head>h2').text('АРТ');
    
});
$('.sketchButton').click(function (e) { 
    e.preventDefault();
    $('.gallery-list, .gallery .section_head>span').fadeOut();
    $('.sketch-wrap').fadeIn();
    $('.gallery .section_head>h2').text('СКЕТЧ');
    
});
$('.portretButton').click(function (e) { 
    e.preventDefault();
    $('.gallery-list, .gallery .section_head>span').fadeOut();
    $('.portret-wrap').fadeIn();
    $('.gallery .section_head>h2').text('ПОРТРЕТ');
    
});
$('.backToGallery').click(function (e) { 
    e.preventDefault();
    $('.typeOfGallery-wrap').fadeOut();
    $('.gallery-list, .gallery .section_head>span').fadeIn();
    $('.gallery .section_head>h2').text('ГАЛЕРЕЯ');
    
});



