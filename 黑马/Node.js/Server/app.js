//引用系统模块 用于创建网站服务器的模块
const http=require('http');
//创建web服务器 app对象就是网站服务器对象
const app=http.createServer();
//当客户端发送请求的时候
app.on('require',(req,res)=>{
    //获取请求方式
    //req.method
    console.log(req.method);
    //响应
    res.end('<h1>hi,user</h1>')
});
//监听3000端口
app.listen(3000);
console.log('服务器已启动，监听3000端口，请访问localhost:3000');