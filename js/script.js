$(document).ready(function() {
    console.log("document ready!");
    var $sticky = $('.sticky');
    var $stickyrStopper = $('.sticky-stopper');
    if (!!$sticky.offset()) {
        var generalSidebarHeight = $sticky.innerHeight();
        var stickyTop = $sticky.offset().top;
        var stickOffset = 0;
        var stickyStopperPosition = $stickyrStopper.offset().top;
        var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
        var diff = stopPoint + stickOffset;
        $(window).scroll(function() {
            var windowTop = $(window).scrollTop();

            if (stopPoint < windowTop) {
                $sticky.css({
                    position: 'absolute',
                    top: '0'
                });
            } else if (stickyTop < windowTop + stickOffset) {
                $sticky.css({
                    position: 'fixed',
                    top: stickOffset
                });
            } else {
                $sticky.css({
                    position: 'absolute',
                    top: 'initial'
                });
            }
        });
    }
});


function loadModal(x) {

    var modal = document.querySelectorAll(".mine-modal");
    console.log(x);
    for (var i = 0; i < 2; i++) {

        if (i == x) {
            modal[i].style.display = "block";
        } else {
            modal[i].style.display = "none";
        }
    }

}