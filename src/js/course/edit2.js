// 导入头部功能
require('../common/header.js');
// 导入侧边栏功能
require('../common/aside.js');
var ulit = require('../common/uilt.js');

var ID = ulit.getSearch('cs_id');

$.get('/v6/course/picture', { cs_id: ID }, function(data) {
    data.result.indexId = 2;
    data.code == 200 && $('#course_edit2').append(template('course_edit2_tpl', data.result));
})