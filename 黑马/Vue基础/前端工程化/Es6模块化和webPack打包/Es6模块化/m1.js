//定义私有成员a和c
let a=10;
let c=20;
//外界访问不到变量d，因为它没有被暴露出去
let d=30;
function show(){}
//将本模块中的私有变量成员暴露出去，供其他模块使用
export default{
    a,c,show
}

//向外按需导出变量s1
export let s1='aaa';
//向外按需导出变量s2
export let s2='ccc';
//向外按需导出方法 say
export function say(){
    console.log('aaa');
}
