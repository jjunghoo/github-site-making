(function (window, document) {
    'use strict';

    const $toggles = document.querySelectorAll('.toogle');
    const $toggleBtn = document.getElementById('toogle-btn');

    $toggleBtn.addEventListener('click', function () {
        toggleElements();
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 1024) {
            // Off toggle element
            offElements();
        }
    })

    function toggleElements() {
        [].forEach.call($toggles, function (toogle) {
            toogle.classList.toggle('on');
        });
    }

    function offElements() {
        [].forEach.call($toggles, function (toogle) {
            toogle.classList.remove('on');
        });
    }
})(window, document)