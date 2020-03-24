<template>
  <div id="app">
    <TheNavigation />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    TheNavigation,
    TheFooter
  },
  mounted() {
    let prevScrollpos = window.pageYOffset;

    window.addEventListener("scroll",() => {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos - 1 || currentScrollPos<100) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-80px";
      }
      prevScrollpos = currentScrollPos;
    });
  }
};
</script>