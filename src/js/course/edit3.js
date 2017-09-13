// 导入头部功能
require('../common/header.js');
// 导入侧边栏功能
require('../common/aside.js');

var ulit = require('../common/uilt.js');

var cs_id = ulit.getSearch('cs_id');

$.get('/v6/course/lesson', { cs_id: cs_id }, function(data) {
    data.result.indexId = 3;
    $('#course-add').append(template('course_edit3_tpl', data.result));
});