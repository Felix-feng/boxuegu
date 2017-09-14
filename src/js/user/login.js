require('../common/common.js');
require('../common/loading.js');

// 在登录界面显示头像，本地有缓存则使用本地图片，若没有则显示默认头像
var userinfo = JSON.parse(localStorage.getItem('userinfo')) || {};
var tc_avatar = userinfo.tc_avatar || '/public/img/default.png';
$('.avatar img').attr('src', tc_avatar);



// 当用户点击登陆按钮的时候，这个插件ajaxForm方法会自动监听submit事件
// 然后阻止浏览器默认的刷新提交，然后自动变成ajax的方式发送请求。

// 使用jquery-form插件请求
$('#login-form').ajaxForm({
    success: function(data) {
        if (data.code == 200) {
            alert('登陆成功');
            // 将从后台传过来的头像存储到浏览器localStorage的缓存中
            localStorage.setItem('userinfo', JSON.stringify(data.result));
            // 跳转至首页
            location.href = '/dist';

        } else {
            alert('登陆失败');
        };
    },
    error: function() {
        alert('登陆失败');
    }
});



/* 
// 使用jq原型方式请求数据
$('#login-form').on('submit', function(e) {

    $.ajax({
        url: '/v6/login',
        type: 'post',
        data: $(this).serialize(),
        success: function(data) {
            if(data.code == 200) {
                alert('登陆成功');
            }else {
                alert('登陆失败');
            }
        },
        error: function() {
            alert('登陆失败');
        }
    });

    // jquery中阻止浏览器默认事件return false即可
    return false;
}); */