// 获取返会参数的id值

// 获取返回的参数值
function getSearch(key) { //参数返回值 --- '?cg_id=1&cg_name=op'
    var searchStr = location.search.slice(1); //获取返回的参数并且剪切掉?连接符 ---‘cg_id=1&cg_name=op’
    var searchArr = searchStr.split('&'); // 将searchStr字符串从&符号分割开形成数组 --['cg_id=1','cg_name=op']
    // 创建一个变量储存数据
    var searchObj = {},
        teampArr;
    // 遍历seachArr数组获取每个元素
    for (var i = 0; i < searchArr.length; i++) {
        // 将每个元素再从=中剪切成新的数组
        teampArr = searchArr[i].split('=');
        // 将新的数组以键值对的方式组成一个对象
        searchObj[teampArr[0]] = teampArr[1];
    }

    return key ? searchObj[key] : searchObj;

}

// 将getSearch暴露，可以允许访问
module.exports.getSearch = getSearch;