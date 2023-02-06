/*!
* Start Bootstrap - Clean Blog v6.0.8 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})


// jQuery 스크롤 맨아래 감지.
$(".modal-body").scroll(function(){
    var scrollTop = $(this).scrollTop();
    var innerHeight = $(this).innerHeight();
    var scrollHeight = $(this).prop('scrollHeight');

    if (scrollTop + innerHeight >= scrollHeight) {
    $("#agree").attr('disabled', false);
    }
});

// 약관 동의시 체크박스 활성화.
$("#agree").click(function(){
    $("#flexCheckDefault").attr('disabled', false);
});

// 초대버튼 활성화 비활성화.
$("#flexCheckDefault").change( function(){
    var imChecked = $(this).is(":checked");
    if (imChecked == true) {
        $("#inviteButton").attr('disabled', false);
    } else {
        $("#inviteButton").attr('disabled', true);
    }
});
