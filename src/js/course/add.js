// 导入头部功能
require('../common/header.js');
// 导入侧边栏功能
require('../common/aside.js');

require('../common/common.js');
require('../common/loading.js');

$('#course_add').ajaxForm(function(data) {
    if (data.code == 200) {
        alert('创建成功');
        location.href = '/dist/html/course/edit1.html?cs_id=' + data.result.cs_id;
    };
})