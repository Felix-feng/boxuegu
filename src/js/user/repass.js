// 导入头部功能
require('../common/header.js');
// 导入侧边栏功能
require('../common/aside.js');

// 使用ajaxsubnit方法修改密码
$('#repass-form').on('submit', function() {

    // 判断两次输入的密码是否相等，若不等着停止事件程序的执行
    if ($('inout_pass').val() !== $('#input_new_pass').val()) {
        alert("两次输入的密码不一致，请重新输入");
        return false;
    };

    $('#repass-form').ajaxSubmit({
        success: function(data) {
            console.log(data);
        }
    })

    return false;
})