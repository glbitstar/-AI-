$(document).ready(function(){

$(function() {
    var topBtn = $('.pagetop');    
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
	});
});


$(document).ready(function(){

$(function() {
    var topBtn = $('#reg');    
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
	});
});

