// 导入头部功能
require('../common/header.js');
// 导入侧边栏功能
require('../common/aside.js');
require('../common/common.js');
require('../common/loading.js');

var ulit = require('../common/uilt.js');

var cs_id = ulit.getSearch('cs_id');

// 获取列表数据并渲染数据列表模板
$.get('/v6/course/lesson', { cs_id: cs_id }, function(data) {
    if (data.code == 200) {
        data.result.indexId = 3;
        $('#course-add').append(template('course_edit3_tpl1', data.result));
    }
});

// 编辑章节
$(document).on('click', '.btn_lessons_edit', function() {
    var data = {
        ct_id: $(this).attr('data-id')
    }
    console.log(data);
    $.get('/v6/course/chapter/edit', data, function(data) {
        if (data.code == 200) {
            data.result.cs_id = cs_id;
            $('#chapterModal').html(template('course_edit_tpl2', data.result));

        }
    });
});

// 添加章节
$(document).on('click', '#btn-lesson-add', function() {
    $('#chapterModal').html(template('course_edit_tpl2', { cs_id: cs_id }));
});


$('#edit3_form').ajaxForm({
    delegation: true,
    success: function(data) {
        // 添加成功后，给出提示，并重置表单
        if (data.result) {
            alert('添加成功');
            $('#edit3_form').get(0).reset();
        }
        // 修改成功后，给出提示
        else {
            alert('修改成功');
        }
    }
});