'use strict';

(function varDisplay() {
    for (var i = 0; i < 10; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 100);
    }
})();