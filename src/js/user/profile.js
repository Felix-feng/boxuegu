// 导入头部功能
require('../common/header.js');
// 导入侧边栏功能
require('../common/aside.js');


$.ajax({
    url: '/v6/teacher/profile',
    type: 'get',
    success: function(data) {
        if (data.code == 200) {
            $('.teacher-profile').html(template('teahcer-profile-tpl', data.result));
        }
    }
});

// 保存资料
$('#teacher-profile-form').ajaxForm({
    // 事件委托，当其模板喧染完毕再执行该程序
    delegation: true,
    success: function(data) {
        if (data.code == 200) {
            alert('修改成功')
        }
    }
})