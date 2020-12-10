import $ from 'jquery' //直接引入此行会报错，原因：这种语法属于ES6的模块化语法
                        //浏览器对这种语法支持的并不是很好，浏览器不识别就报错了
                        //用webpack把有兼容性的代码转换成没有兼容性的代码
$(function () {
   $('li:odd').css('background','pink');
   $('li:even').css('background','yellow');
});
