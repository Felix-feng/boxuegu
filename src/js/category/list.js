// 导入头部功能
require('../common/header.js');
// 导入侧边栏功能
require('../common/aside.js');


// 使用jq的ajax插件请求数据
$.get('/v6/category', function(data) {
    $('#category_list').append(template('category-list-tpl', data.result));
})