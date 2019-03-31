<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
  export default {
    name: 'about',
    activated() {
      console.log('about激活');

    },
    mounted() {
      console.log('组件挂载');

    }
  }

</script>
