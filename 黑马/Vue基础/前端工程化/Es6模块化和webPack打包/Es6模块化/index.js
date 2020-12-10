/*//默认导入模块成员
import m1 from './m1.js'
//按需 导入模块成员
import {s1,s2 as ss2,say} from './m1.js'*/

import m1,{s1,s2 as ss2,say} from './m1.js'


console.log(m1);

console.log(s1); //打印输出aaa
console.log(ss2); //打印输出ccc
console.log(say);//打印输出[Function:say]
