// 导入头部功能
require('../common/header.js');
// 导入侧边栏功能
require('../common/aside.js');

var uilt = require("../common/uilt");


var tc_id = uilt.getSearch('tc_id');

$.get('/v6/teacher/edit', { tc_id: tc_id }, function(data) {
    // 判断请求数据是否成功，若成功则回显数据并且喧染模板
    data.code == 200 && $('.teacher-add').html(template('teacher_edit_tpl', data.result))
})

$('#teacher_edit').ajaxForm({
    delegation: true,
    success: function(data) {
        data.code == 200 && alert('保存成功');
    }
})