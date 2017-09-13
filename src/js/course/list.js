// 导入头部功能
require('../common/header.js');
// 导入侧边栏功能
require('../common/aside.js');

$.get('/v6/course', function(data) {
    // 数据回显并且喧染模板
    data.code == 200 && $('#course_list').append(template('course_list_tpl', data.result));
})