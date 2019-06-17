
一站式RGB教學網站
----------------

主題簡介：

前端工程師和設計師經常使用rgb編碼來選擇顏色，但初學者經常不太能理解rgb的運作模式。
只看文字介紹很難理解rgb的概念，而網路上雖然有許多可以訓練rgb敏感度的小遊戲（例如：http://www.rgbchallenge.com/），但通常沒有介紹rgb的概念和運作模式，因此我製作了這個網站，希望透過整合rgb介紹和練習的一站式教學網站，用比較直覺的方式幫助初學者快速理解rgb的概念。

使用方式：
網站分為三個部分：
第一部分.rgb概念介紹
第二部分.自行輸入rgb產生顏色
第三部分.rgb選擇小遊戲

-----------------

第二部分：
我將rgb分為r,g,b三個欄位讓使用者輸入，並在使用者點擊generate!按鈕時，觸發jquerry event並分別抓取三個input欄位的數值，並個數值合併成rgb色票，改變範例的圓形顏色：
    var gencolor = ("rgb(" + r + ", " + g + ", " + b + ")");
    $('#generate').css("background", gencolor);
比起單純透過文字理解rgb的意思，透過拆解三種顏色的數值並親自操作並獲得反饋，使用者可以更快的理解rgb的運作模式

----------

第三部分：
我透過Math.random()隨機產生rgb色票（r,g,b分別產生）並讓使用者選擇正確的色票（用白字在網頁上顯示題目要求的色票）。我將題目的色票儲存在pickedColor變數，並在使用者點擊一個圓圈時，由每個圓圈上的eventlistner進行if-else判斷，pickedColor中的色票（正確答案）是否與圓圈的backgroundColor吻合（使用者提交的答案），當使用者選擇正確時，所有的圓圈都會變成正確答案的顏色，並透過更改textContent跳出correct！的提示;若選擇錯誤，則選錯的圓圈顏色將變的跟背景顏色相同（看起來消失，不能再選），並跳出try again的提示直到使用者選到正確的顏色為止。


若使用者想更改題目的色票或重置遊戲時，可以點擊new colors來更改所有圓圈的背景顏色並更換題目色票。在點擊new colors時也會將原本的提示移除。

我設計了兩種難度供使用者選擇，若選擇hard,則圓圈數量會由3個變成6個。我透過numsquare變數儲存圓圈的數量，並依此數量隨機生成rgb色票的陣列(將numsquare傳進generateColor),並用迴圈將顏色套用在每一個圓圈上，當使用者點擊hard時，numsquare變數將由3變為6,並重置所有圓圈的色票和題目的色票。

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return ("rgb(" + r + ", " + g + ", " + b + ")");
}

function generateColor(nums) {
    var arr = [];
    for (var i = 0; i < nums; i++) {
        arr.push(randomColor());
    }
    return arr;
}

我為每個按鈕設計了紅色（與背景對比）的hover和selected效果，讓使用者得到更醒目的提示，了解如何與這個網頁互動。當使用者選則hard時，hard會增加.selected的紅色背景,而easy的按鈕則會取消.selected,反之亦然.


透過這樣的設計，期望使用者只要透過與這個網站的互動，就能很快速的掌握rgb的概念，並培養對色彩的敏感度！

-------------------------
靈感來源：
http://www.rgbchallenge.com/



