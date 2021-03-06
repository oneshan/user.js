// ==Use// ==UserScript==
// @name         PTT Userscript
// @namespace    http://github.com/oneshan
// @version      0.3
// @description  自動跳過年齡分級, 推文顯示黑人問號,樓數,高亮作者ID
// @author       oneshan
// @include      https://www.ptt.cc/*
// @grant        none
// ==/UserScript==

(function(location) {

    // 自動跳過年齡分級
    if (window.location.href.indexOf("ask/over18")) {
        $('button:contains("我同意，我已年滿十八歲")').click();
    }

    // Highlight 推文作者ID
    function hl_userid() {
        var author = document.getElementsByClassName('article-meta-value')[0].textContent;
        author = author.split(' ')[0];
        var foo = document.getElementsByClassName('push-userid');
        for (var idx = 0; idx < foo.length; ++idx) {
            if (foo[idx].textContent == author) {
                foo[idx].style.backgroundColor = "#20B2AA";
            }
        }
    }

    function modify_push() {
        var foo = document.getElementsByClassName('push-content');
        for (var idx = 0; idx < foo.length; ++idx) {

            // 推文顯示黑人問號
            var domImgNode = document.createElement("img");
            domImgNode.alt = "黑人問號";
            domImgNode.src = "https://emos.plurk.com/2b2772dc330f168a7c72f29ca6460cc9_w48_h48.jpeg";
            if (foo[idx].textContent.indexOf("黑人問號") > 0) {
                foo[idx].appendChild(domImgNode);
            }

            // 顯示推文樓數
            domTextNode = document.createTextNode(idx + 1 + "F ");
            foo[idx].parentNode.prepend(domTextNode);
        }
    }

    modify_push();
    hl_userid();
})();
