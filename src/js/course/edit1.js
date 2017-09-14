// 导入头部功能
require('../common/header.js');
// 导入侧边栏功能
require('../common/aside.js');

require('../common/common.js');
require('../common/loading.js');

var ulit = require('../common/uilt.js');

var id = ulit.getSearch('cs_id');

$.get('/v6/course/basic', { cs_id: id }, function(data) {
    data.result.indexId = 1;
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
});


/*
学科二级联动：
     1、 因为整个数据回显是动态构建的， 所以通过委托的方式监听父级学科select的change事件 +
     2、 事件发生时获取所选顶级学科cg_id， 调用接口获取对应的子级学科列表 +
     3、 拿到数据后动态生成新的子级option进行替换 +
*/

// 给文档注册事件进行委托
$(document).on('change', "#category_top_select", function() {

    var html = "";
    // 获取顶级分类的id
    var topID = $(this).val();

    // get请求获取子级数据
    $.get('/v6/category/child', { cg_id: topID }, function(data) {
        if (data.code == 200) {
            // 遍历返回的数组，并拼接字符串
            for (var i = 0; i < data.result.length; i++) {
                html += '<option value="' + data.result[i].cg_id + '">' + data.result[i].cg_name + '</option>';
            }
        }
        $('#category_childs_select').html(html);
    });

})