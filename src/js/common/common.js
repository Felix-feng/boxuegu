// 验证是否已经登录过

// 获取本地的cookie值,判断是否登录
var islogin = !!$.cookie('PHPSESSID');
var loginPath = location.pathname == "/dist/html/user/login.html";

if (loginPath && islogin) {
    location.href = "/dist";
} else if (!loginPath && !islogin) {
    location.href = "/dist/html/user/login.html";
};

/**添加页面进度条：
 * 1、首先调用进度条的start方法
 * 2、然后监听window的load事件，触发时候调用进度条done方法
 * */
NProgress.start();
window.onload = function() {
    NProgress.done();
};