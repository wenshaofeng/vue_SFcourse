<template>
  <div class="about">

    <h1>父组件</h1>
    <!-- <div id="nav">
      <router-link to="/parent/son_1">展示子组件1</router-link> |
      <router-link to="/parent/son_2">展示子组件2</router-link>
    </div> -->
    <button @click="hangdleChange">切换组件</button>
    <son1 v-if="state"></son1>
    <son2 v-else='state'></son2>
      <!-- <router-view /> -->
  </div>
</template>

<script>
  import Son1 from './son_1.vue'
  import Son2 from './son_2.vue'

  export default {
    data() {
      return {
        state: false
      }
    },
    components:{
      Son1,
      Son2
    },
    name: 'parent',
    activated() {
      console.log('父组件激活');

    },
    deactivated(){
      console.log('父组件失活');

      this.$store.commit('addGroups','parent')
    },
    methods:{
      hangdleChange() {
        this.state= !this.state

      }
    },
    mounted() {
      console.log('组件挂载');

    },

  }

</script>

<style lang="less">
  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

</style>
