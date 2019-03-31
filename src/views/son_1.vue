<template>
  <div class="about">
    <h1>子组件1</h1>
    <button @click="hangdleChange">切换孙子组件</button>
    <g-son1 v-if="state"></g-son1>
    <g-son2 v-else='state'></g-son2>
  </div>
</template>

<script>
  import gSon1 from './g-son1.vue'
  import gSon2 from './g-son2.vue'
  export default {
    data() {
      return {
        state: false
      }
    },
    methods: {
      hangdleChange() {
        this.state = !this.state

      }
    },
    components: {
      gSon1,
      gSon2
    },
    name: 'son_1',
    activated() {
      console.log('子组件1')
    },
  }

</script>
