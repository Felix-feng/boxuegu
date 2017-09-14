// 导入头部功能
require('../common/header.js');
// 导入侧边栏功能
require('../common/aside.js');

require('../common/common.js');
require('../common/loading.js');

// 添加讲师
$('.techaer_add_form').ajaxForm(function(data) {
    if (data.code == 200) {
        alert('添加成功');
    }
});