 /*var toDoList=[{
    title: '吃饭饭',
     done:false
},{
    title:'睡觉觉',
     done:false
 },];
 localStorage.setItem("todo",JSON.stringify(toDoList));
*/
$(function () {
    //按下回车，把完整数据存储到本地数据
    $("#title").on("keydown",function (event) {
        if(event.keyCode===13){
            //先读取本地存储原来的数据
            var local=getDate();
            //把local数组进行更新数据 把最新的数据追加给local数组
             local.push({title:$(this).val(),done:false});
            //把local数组 存储给本地数组
            saveDate(local);
        }
    });

//读取本地数据
    function getDate() {
        var data=localStorage.getItem("todolist");
        if(data!==null){
            return JSON.parse(data);
        }else{
            return[];
        }
    }
    // 保存本地存储数据
    function saveDate(data) {
        localStorage.setItem("todolist",JSON.stringify(data));
    }
    //渲染加载数据
});
