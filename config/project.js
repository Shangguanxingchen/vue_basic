"use strict";

let name = 'hilife-ecard-web';
let debugWebServiceName = 'hilife-ecard-consumer';
let publishWebServiceName = 'hilife-ecard-consumer';
let debugWebServiceResourcePath = '../../' + debugWebServiceName + '/target/ROOT/WEB-INF/classes/';
let publishWebServiceResourcePath = '../../' + publishWebServiceName + '/src/main/resources/';

module.exports = {
    name: name, // 项目名
    static_root: name,//静态资源路径(线上的assets,html,js文件夹所在路径)
    debugWebServiceResourcePath: debugWebServiceResourcePath, // 调试目录
    publishWebServiceResourcePath: publishWebServiceResourcePath, // 发布目录
    requestURL: 'http://localhost:8081/', //开发模式下 请求地址
    proxyAddr: 'https://test.91hiwork.com/', // 开发模式下  代理地址
    cdnAddr: 'https://cdns1.91hilife.com/',
    cdn_ak: 'ZIq3vwIqfwWVhZ_Yz9SQPn49GtvyeiejZCYzO9HW',
    cdn_sk: 'S-iVaTmW24D7tm8HwS_C48TKuv7YDQhGv-ZTTaYy',
    cdn_bucket: 'hilife-resource',
    project: {
      // 项目列表
      // 组织格式 ： 项目名 => 以项目根目录为基准的index.vue路径
      // 其在webpack中的对应格式为：[name](生成的js名) => [main.js所在路径]
      cardReaderCertified: './src/view/cardReaderCertified', // 读卡器认证
      segmentAssignment: './src/view/segmentAssignment', // 卡号段分配
      readerList: './src/view/readerList', // 读卡器列表
      keyCardManagement: './src/view/keyCardManagement' // 门禁卡管理      
    },
    entry: {
        keyCardManagement: '/' + name + "/keyCardManagement/keyCardManagement.html",
        readerList: '/' + name + "/readerList/readerList.html",
        segmentAssignment: '/' + name + "/segmentAssignment/segmentAssignment.html"
    }
};


