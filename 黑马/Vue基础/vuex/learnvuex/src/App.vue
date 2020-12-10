<template>
  <div id="app">
    <h2>----------App内容--------</h2>
      <h2>{{$store.state.info}}</h2>
      <h2>{{message}}</h2>
      <h2>{{$store.state.counter}}</h2>
      <button @click="addition">+</button>
      <button @click="substraction">-</button>
      <button @click="addCount(5)">+5</button>
      <button @click="addCount(10)">+10</button>
      <button @click="addStu">添加学生</button>
      <button @click="updateInfo">修改信息</button>


    <h2>----------App内容：getters相关信息---------</h2>
    <p>{{$store.getters.powerCounter}}</p>
    <p>{{$store.getters.more20stu}}</p>
    <p>{{$store.getters.more20stuLength}}</p>
    <p>{{$store.getters.moreAgestu(12)}}</p>


    <h2>--------HelloVuex内容-----------</h2>
      <hello-vuex/>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex'
export default {
  name: 'App',
  data(){
    return{
      message:'我是App组件',

    }
  },
  methods:{
    addition(){
      this.$store.commit('increment')
    },
    substraction(){
      this.$store.commit('decrement')
    },
    addCount(count){
      //1.普通的提交封装
      // this.$store.commit('incrementCount',count);
      //2.特殊的提交封装
      this.$store.commit({
        type:'incrementCount',
        count
      })

    },
    addStu(){
      //参数被称为是mutation的载荷(Payload)
      const stu={id:114,name:'hhh',age:35};
      this.$store.commit('addStudent',stu);
    },
    updateInfo(){
      //this.$store.commit('updateInfo')
      this.$store
        .dispatch('aUpdateInfo','我是携带的信息')
        .then(res=>{
          console.log('里面完成了提交');
          console.log(res);
        })

    }

  },
  computed:{
    /*more20stu(){
      return this.$store.state.students.filter(s=>{
        return s.age>20
      })
    }*/
  },
  components:{
    HelloVuex
  }

}
</script>

<style>


</style>
