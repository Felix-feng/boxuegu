// 导入头部功能
require('../common/header.js');
// 导入侧边栏功能
require('../common/aside.js');

// 获取数据渲染模板引擎
$.get('/v6/category/top', function(data) {
    if (data.code == 200) {
        $('#category_select').append(template('category_add_tpl', data.result));
    }
});


// 添加学科
$('#category_add_form').ajaxForm(function() {
    alert('成功创建一个学科');
});