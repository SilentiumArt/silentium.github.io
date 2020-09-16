$(document).ready(function () {
    $('.showSocial').click(function (e) { 
        e.preventDefault();
        $('.modal').toggleClass('d-none');
        $('.arrow-down').toggleClass('rotate')
    });
    $('.main-screen, .arrow-up').click(function (e) { 
        e.preventDefault();
        $('.modal').addClass('d-none');
        $('.arrow-down').removeClass('rotate')
    });
    $('.showBIO').click(function (e) { 
        e.preventDefault();
        $('.modal-bio').fadeToggle();
    });
    $('.landingButton').click(function (e) { 
        e.preventDefault();
        if ($('.gallery-list').hasClass('animate-single')) {
            $('.gallery-list').removeClass('animate-single')
            $('.gallery-list').addClass('reanimate')
        } else {
            $('.gallery-list').removeClass('reanimate')
            $('.gallery-list').addClass('animate-single')
        };
        if ($('.landing-wrap').hasClass('reanimateG')) {
            $('.landing-wrap').removeClass('reanimateG')
            $('.landing-wrap').addClass('animateG')
            $('.backToGallery').fadeIn();
        } else {
            $('.landing-wrap').addClass('reanimateG')
            $('.landing-wrap').removeClass('animateG'); 
        }
        $('.landing-wrap').parent().toggleClass('index');
    });
    $('.sketchButton').click(function (e) { 
        e.preventDefault();
        if ($('.gallery-list').hasClass('animate')) {
            $('.gallery-list').removeClass('animate')
            $('.gallery-list').addClass('reanimate')
        } else {
            $('.gallery-list').removeClass('reanimate')
            $('.gallery-list').addClass('animate')
        };
        if ($('.sketch-wrap').hasClass('reanimateG')) {
            $('.sketch-wrap').removeClass('reanimateG')
            $('.sketch-wrap').addClass('animateG')
            $('.backToGallery').fadeIn();
        } else {
            $('.sketch-wrap').addClass('reanimateG')
            $('.sketch-wrap').removeClass('animateG'); 
        }
        $('.sketch-wrap').parent().toggleClass('index');
    });
    $('.comicsButton').click(function (e) { 
        e.preventDefault();
        if ($('.gallery-list').hasClass('animate')) {
            $('.gallery-list').removeClass('animate')
            $('.gallery-list').addClass('reanimate')
        } else {
            $('.gallery-list').removeClass('reanimate')
            $('.gallery-list').addClass('animate')
        };
        if ($('.comics-wrap').hasClass('reanimateG')) {
            $('.comics-wrap').removeClass('reanimateG')
            $('.comics-wrap').addClass('animateG')
            $('.backToGallery').fadeIn();
        } else {
            $('.comics-wrap').addClass('reanimateG')
            $('.comics-wrap').removeClass('animateG'); 
        }
        $('.comics-wrap').parent().toggleClass('index');
    });
    $('.artButton').click(function (e) { 
        e.preventDefault();
        if ($('.gallery-list').hasClass('animate')) {
            $('.gallery-list').removeClass('animate')
            $('.gallery-list').addClass('reanimate')
        } else {
            $('.gallery-list').removeClass('reanimate')
            $('.gallery-list').addClass('animate')
        };
        if ($('.art-wrap').hasClass('reanimateG')) {
            $('.art-wrap').removeClass('reanimateG')
            $('.art-wrap').addClass('animateG')
            $('.backToGallery').fadeIn();
        } else {
            $('.art-wrap').addClass('reanimateG')
            $('.art-wrap').removeClass('animateG'); 
        }
        $('.art-wrap').parent().toggleClass('index');
    });
    $('.portretButton').click(function (e) { 
        e.preventDefault();
        if ($('.gallery-list').hasClass('animate')) {
            $('.gallery-list').removeClass('animate')
            $('.gallery-list').addClass('reanimate')
        } else {
            $('.gallery-list').removeClass('reanimate')
            $('.gallery-list').addClass('animate')
        };
        if ($('.portret-wrap').hasClass('reanimateG')) {
            $('.portret-wrap').removeClass('reanimateG')
            $('.portret-wrap').addClass('animateG')
            $('.backToGallery').fadeIn();
        } else {
            $('.portret-wrap').addClass('reanimateG')
            $('.portret-wrap').removeClass('animateG'); 
        }
        $('.portret-wrap').parent().toggleClass('index');
    });
    $('.backToGallery').click(function (e) { 
        e.preventDefault();
        $('.backToGallery').fadeOut();
        $('.gallery-list').removeClass('animate')
        $('.gallery-list').addClass('reanimate')
        $('.typeOfGallery-wrap').addClass('reanimateG')
        $('.typeOfGallery-wrap').removeClass('animateG'); 
        $('.typeOfGallery-wrap').parent().removeClass('index')
    });
});