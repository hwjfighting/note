const greeting= name =>`hello ${name}`;

const x=100;
exports.x=x;
module.exports.greeting=greeting;
//当exports对象和module.exports对象指向的不是同一个对象时以module.exports为准
module.experts={
    name:'zhangsan'
};
/*
exports是module.exports的别名（地址引用关系），导出对象最终以module.experts为准
 */


// Command JS模块化使用
