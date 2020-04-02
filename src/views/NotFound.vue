<template>
  <div>
    <h1>Page not Found</h1>
    <p>
      try going to
      <router-link :to="{name:'Home'}">Home</router-link>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
    div{
        margin: 100px 0;
    }
    h1,p{
        text-align: center;
        margin: auto;
    }
</style>