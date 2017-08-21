// ==UserScript==
// @name         PTT Userscript
// @namespace    http://github.com/oneshan
// @version      0.1
// @description  自動跳過年齡分級, 推文顯示黑人問號
// @author       oneshan
// @include      https://www.ptt.cc/*
// @grant        none
// ==/UserScript==a

(function(location) {

    // 自動跳過年齡分級
    if (window.location.href.indexOf("ask/over18")) {
        $('button:contains("我同意，我已年滿十八歲")').click();
    }

    // 推文顯示黑人問號
    function image() {
        var foo = document.getElementsByClassName('push-content');
        for (var idx = 0; idx < foo.length; ++idx) {
            var domImgNode = document.createElement("img");
            domImgNode.alt = "黑人問號";
            domImgNode.src = "https://emos.plurk.com/2b2772dc330f168a7c72f29ca6460cc9_w48_h48.jpeg";
            if (foo[idx].textContent.indexOf("黑人問號") > 0) {
                foo[idx].appendChild(domImgNode);
            }
        }
    }

    image();

})();
