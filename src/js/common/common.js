// 验证是否已经登录过

// 获取本地的cookie值,判断是否登录
var islogin = !!$.cookie('PHPSESSID');
var loginPath = location.pathname == "/dist/html/user/login.html";

if (loginPath && islogin) {
    location.href = "/dist";
} else if (!loginPath && !islogin) {
    location.href = "/dist/html/user/login.html";
}