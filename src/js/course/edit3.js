// 导入头部功能
require('../common/header.js');
// 导入侧边栏功能
require('../common/aside.js');

var ulit = require('../common/uilt.js');

var cs_id = ulit.getSearch('cs_id');

// 获取列表数据并渲染数据列表模板
$.get('/v6/course/lesson', { cs_id: cs_id }, function(data) {
    data.result.indexId = 3;
    $('#course-add').append(template('course_edit3_tpl1', data.result));
});

$(document).on('click', '#btn_edit', function() {

    $.get('/v6/course/chapter/edit', { cs_id: cs_id }, function(data) {
        data.result.cs_id = cs_id;
        data.code == 200 && $('#chapterModal').html(template('course_edit_tpl2', data.result));

    });
});