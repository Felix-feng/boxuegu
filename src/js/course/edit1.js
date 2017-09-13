// 导入头部功能
require('../common/header.js');
// 导入侧边栏功能
require('../common/aside.js');
var ulit = require('../common/uilt');

var id = ulit.getSearch('cs_id');

$.get('/v6/course/basic', { cs_id: id }, function(data) {
    if (data.code == 200) {
        $('#course_edit1').append(template('course_edit1_tpl', data.result));
    }
})


$('#course_edit1_form').ajaxForm({
    delegation: true,
    success: function(data) {
        if (data.code == 200) {
            alert('修改成功');
            location.href = '/dist/html/course/edit2.html?cs_id=' + data.result.cs_id;
        }
    }
})