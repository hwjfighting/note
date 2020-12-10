<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <p>{{$store.getters.powerCounter}}</p>
    <p>{{$store.getters.more20stu}}</p>
  </div>
</template>

<script>
    export default {
        name: "HelloVuex"
    }
</script>

<style scoped>

</style>
