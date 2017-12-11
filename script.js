function showMsg(msg1, msg2) {
    var msg = msg1 + msg2;
    alert(msg1 + msg2);
    return msg;
}

var showMsg = function (msg1, msg2) {
    var msg = msg1 + msg2;
    return msg;
}

var random = function (n, m) {
    console.log(n, m);
    return Math.floor(Math.random() * (m - n + 1) + n);
}
