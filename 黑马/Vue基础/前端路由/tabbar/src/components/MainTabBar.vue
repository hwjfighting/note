<template>
  <tab-bar>
    <tab-bar-item path="/home" active-color="pink">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" active-color="pink">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" active-color="pink">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" active-color="pink">
      <div slot="item-text">我的</div>
    </tab-bar-item>

  </tab-bar>
</template>

<script>
  import TabBar from '../components/tabbar/TabBar'
  import TabBarItem from '../components/tabbar/TabBarItem'
    export default {
      name: "MainTabBar",
      components:{
        TabBar,
        TabBarItem
      }
    }
</script>

<style scoped>

</style>
