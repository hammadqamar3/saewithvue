<template>
  <main>
    <section class="heading">
      <h1>Our Sponsors</h1>
    </section>
    <section id="container">
      <div class="imageBox" v-for="item in 16" :key="item">
        <img :src="require(`@/assets/logos/${item}.png`)" alt="Sponsor image" />
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
main {
  margin: 80px 0;
}
.heading h1 {
  font-family: fantasy;
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  margin: 2em 0;
  padding: 15px;
}
#container {
  display: grid;
  grid-template-columns: 20% 20% 20%;
  grid-gap: 30px 20px;
  justify-content: center;
  justify-items: center;
  align-items: center;
}
.image {
  height: 150px;
  width: 150px;
  border: 1px solid black;
}
</style>