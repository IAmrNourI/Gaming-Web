console.log("hello");

$(document).ready(function() {
    $('.lds-ripple').fadeOut(2000,function(){
        $('.loading').slideUp(2000,function(){
            $('body').css('overflow', 'visible');
        })

    })
})

particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });