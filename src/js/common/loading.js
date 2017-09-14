// ajax添加loading
var loadingHtml = '<div class="overlay"> <img src ="/public/img/loading.gif"></div>';

$('body').append(loadingHtml);

// 当发送第一个请求时展示loading
$(document).on('ajaxStart', function() {
    $('.overlay').show();
});
// 当发送第一个请求结束时展示loading 
$(document).on('ajaxStop', function() {
    $('.overlay').hide();
});