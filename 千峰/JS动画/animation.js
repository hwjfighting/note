/*
封装一个getStyle()的函数，通过这个函数可以处理兼容性，来取得当前元素正在应用的样式，实现的动画效果是：最开始运动速度快，
然后逐渐减小，并且到最后，速度为零，且正好到达目的地即目标所在的位置，在此过程中改变透明度，以及宽高，left、top这些值
还要实现同时改变多个元素。
 */

function getStyle(el,property) {
    return getComputedStyle(el)[property];
}
//参数：所改变的元素，改变的属性，目标(属性和目标合为properties)
function animate(el,properties) {
    clearInterval(el.timerId);
    el.timerId=setInterval(function () {
        for(var property in properties){
            var current;
            var target=properties[property];
            if(property==='opacity'){
                current=parseFloat(getStyle(el,'opacity'))*100;
            }else{
                current=parseInt(getStyle(el,property));
            }
            //当target和current相等时，速度就变为0，为了每次都缓慢变化，所以要乘以一个系数
            var speed=(target-current)/30;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            if(property==='opacity'){
                el.style.opacity=(current+speed)/100;
            }
            el.style[property]=current+speed+"px";
        }
    },20)
}
