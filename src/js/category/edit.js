// 导入头部功能
require('../common/header.js');
// 导入侧边栏功能
require('../common/aside.js');
console.log(123);
// 引用获取id值的方法
var uilt = require('../common/uilt.js');
// 获取id值
var cg_id = uilt.getSearch('cg_id');
// 引用get方法调用ajax喧染引擎模板并设置id值
$.get('/v6/category/edit', { cg_id: cg_id }, function(data) {
    $('.category-add').html(template('category_edit_tpl', data.result));

})

$('#catetory-edit-form').ajaxForm({

    delegation: true,
    success: function(data) {

        if (data.code == 200) {
            alert("保存成功");
        }
    }
});