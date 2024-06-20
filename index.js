$(document).ready(function(){
    $('a.scroll-to-div').on('click', function(event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
});

function checkScreenSize() {
    if (window.innerWidth > 768) {
        alert("Please use a mobile gadget for compatibility.");
    }
}

window.onload = checkScreenSize;
window.onresize = checkScreenSize;