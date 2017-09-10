// 从浏览器的缓存区获取相对应图片路径
var userinfoStr = localStorage.getItem('userinfo');
// 因为获取到的是字符串，因此转换为json格式
var userinfo = JSON.parse(userinfoStr);
// 设置图片路径
$('.aside img').attr('src', userinfo.tc_avatar);
$('.aside h4').text(userinfo.tc_name);

// 导航栏标签的显示与隐藏
$('.navs a').on('click', function() {
    $(this).next('ul').slideToggle();
});

// 当页面改变时相对应的页面标签添加active样式

// 获取a标签的herf属性值
var path = location.pathname;
// 移除a标签的active类名
$('.navs a').removeClass('active');
// 给当前页面的a标签添加active类名，并且  让其父元素展开
$('.navs a[href = "' + path + '"]').addClass('active').parents('ul').show();