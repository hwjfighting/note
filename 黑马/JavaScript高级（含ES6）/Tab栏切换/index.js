var that;
class Tab{

    constructor(id){
        //获取元素
        that=this;
        this.main=document.querySelector(id);
        this.add=this.main.querySelector('.tabAdd');

        //li的父元素
        this.ul=this.main.querySelector('.firstNav ul:first-child');
        //section的父元素
        this.fsection=this.main.querySelector('.tabscon');

        this.init();
    }

    init(){
        this.updateNode();
        // init 初始化操作让相关的元素绑定事件
        this.add.onclick=Tab.addTab;
        for(var i=0;i<this.lis.length;i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab; //不用加()  加小括号的话会立即调用
            this.remove[i].onclick=this.removeTab;
            this.spans[i].ondblclick=Tab.editTab;
            this.sections[i].ondblclick=Tab.editTab;
        }
    }
    updateNode(){
        this.lis=this.main.querySelectorAll('li');
        this.sections=this.main.querySelectorAll('section');
        this.remove=this.main.querySelectorAll('.icon-guanbi');
        this.spans=this.main.querySelectorAll('.firstNav li span:first-child');

    }
    toggleTab(){
        that.clearClass();
        this.className='liactive';
        that.sections[this.index].className='conactive';
    }
    clearClass(){
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].className='';
            this.sections[i].className='';
        }
    }
    static addTab(){
        that.clearClass();
        //创建li元素和section元素
        var li='<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>'
        var section='<section class="conactive">测试</section>';
        //把这两个元素追加到对应的父元素里面
        that.ul.insertAdjacentHTML('beforeend',li);
        that.fsection.insertAdjacentHTML('beforeend',section);
        that.init();
    }
    removeTab(e){
        e.stopPropagation();//阻止冒泡
       var index=this.parentNode.index;
       //根据索引号删除对应的li和section remove（）方法可以直接删除指定的元素
       that.lis[index].remove();
       that.sections[index].remove();
       that.init();
       //当我们删除的不是选定状态的li的时候，原来的选中状态li保持不变
        if(document.querySelector('.liactive')) return;
       //当我们删除了选中状态的这个li的时候，让它的前一个li 处于选定状态
        index--;
        //手动调用点击事件 不需要鼠标触发
        // 回调函数&&回调函数()   &&前为真再执行&&后面的函数 否则不用执行
        that.lis[index]&&that.lis[index].click();
    }
    static editTab() {
        var str=this.innerHTML;
        //双击禁止选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text"/>';
        var input=this.children[0];
        input.value=str;
        input.select();//文本框里面的文字处于选定状态
        //当我们离开文本框就把文本框里面的值给span
        input.onblur=function () {
            this.parentNode.innerHTML=this.value;
        };
        //按下回车也可以吧文本框里面的值给span
        input.onkeyup=function (e) {
            if(e.keyCode===13){
                this.blur();
            }
        }
    }
}
new Tab("#tab");
