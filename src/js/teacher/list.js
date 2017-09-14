// 首页需要头部功能，所以这里导入一下
require('../common/header.js');
// 首页导入头像加载功能
require('../common/aside.js');

require('../common/common.js');
require('../common/loading.js');

$.get('/v6/teacher', function(data) {
    data.code == 200 && $('#teacher-list-table').append(template('teacher_list_tpl', data.result));
});

// 点击注销与开启功能
$(document).on('click', '.btn-status', function() {
    // 获取当前点击对象储存
    var _this = $(this);
    // 储存要传递的对象
    var data = {
            tc_id: $(this).attr('data-id'),
            tc_status: $(this).attr('data-status')
        }
        // ajax请求数据
    $.post('/v6/teacher/handle', data, function(data) {
        // 获取后台返回的数据
        var newStatus = data.result.tc_status;
        // 对点击的对象的字体进行修改
        _this.text(newStatus == 0 ? "注 销" : "开 启");
        _this.attr('data-status', newStatus);
    })
})

// 查看功能
$(document).on('click', '.btn-view', function() {
    // 获取该标签的id
    var id = $(this).attr('data-id');
    // 请求数据
    $.get('/v6/teacher/view', { tc_id: id }, function(data) {
        // 判断是否请求成功，若成功则渲染讲师信息模板
        data.code == 200 && $('#teacher_view').html(template('teacher_view_tpl', data.result));
    })

});