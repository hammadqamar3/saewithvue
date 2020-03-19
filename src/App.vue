<template>
  <div id="app">
    <TheNavigation />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue'
import TheFooter from '@/components/TheFooter.vue'
export default {
  components:{
    TheNavigation,
    TheFooter
  }
}
</script>