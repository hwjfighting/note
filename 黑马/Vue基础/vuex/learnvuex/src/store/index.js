import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex);

//2.创建对象
const moduleA={
  state:{},
  mutation:{},
  actions:{},
  getters:{}
};

const store=new Vuex.Store({
  state:{
    counter:1000,
    students:[
      {id:110,name:'why',age:18},
      {id:111,name:'how',age:24},
      {id:112,name:'where',age:30},
      {id:113,name:'when',age:10},
    ],
    info:{
      id:114,
      name:'coco',
      age:19
    }
  },
  mutations:{
    /*
    Vuex的store状态的更新唯一方式:提交Mutation
    Mutation主要包括两部分:
      0字符串的事件类型( type )
      0一个回调函数( handler ) ,该回调函数的第一个参数就是state。

     */
    //方法   increment事件类型    (state){state.counter++;}回调函数
    increment(state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    incrementCount(state,playload){
      //console.log(playload)  // 当使用特殊的提交方式时： {type:'incrementCount',count}
      state.counter +=playload.count;
    },
    addStudent(state,stu) {
      state.students.push(stu)
    },
    updateInfo(state){
      state.info.name='coderwhy'

      //错误代码，不能在这里进行异步操作
      /*setTimeout(()=>{
        state.info.name='conderwhy'
      },1000)*/
    }

  },
  actions:{
    aUpdateInfo(context,playload){
     /* setTimeout(()=>{
        context.commit('updateInfo');
        console.log(playload)
      },1000)*/
     return new Promise((resolve,reject)=>{
       setTimeout(()=>{
         context.commit('updateInfo');
         console.log(playload);
         resolve('11111')
       },1000)
     })
    }

  },
  getters:{
    powerCounter(state){
      return state.counter*state.counter
    },
    more20stu(state){
      return state.students.filter(s=> s.age> 20)
    },
    more20stuLength(state,getters){
      return getters.more20stu.length
    },
    moreAgestu(state){
      return age=> {
        return state.students.filter(s=> s.age> age)
      }
    }
  },
  modules:{
    a: moduleA,
    b:{
      state:{},
      mutation:{},
      actions:{},
      getters:{}
    }
  }
});

//3.导出store独享
export default store
