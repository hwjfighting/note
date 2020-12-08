function setCookie(name,value,day) {
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+day);
    document.cookie=name+"="+value+";expires="+oDate;
}
function getCookie(name) {
    var str=document.cookie;
    var arr=str.split("; ");//先把整条字符串分割之后放进数组
    for(var i=0;i<arr.length;i++){//再把数组中的每个元素分割，这次分割是按“=”分割，分割的是等号两边的值
        var arr1=arr[i].split("=");
        if(arr1[0]===name){
            return arr1[1];
        }
    }
}
function removeCookie(name) {
    setCookie(name,1,-1);
}