<template>
  <main>
    <section>
      <div class="col-md-12">
        <div class="image-box">
          <img :src="require(`@/assets/images/car_images/${car.image}`)" />
        </div>
        <div class="name">
          <h1>{{ car.name }}</h1>
        </div>
      </div>
    </section>
    <!-- Cars specs table -->
    <section class="specs-table">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h1>CAR SPECIFICATIONS</h1>
            <div id="carspecstable">
              <tr>
                <th>PROPERTY</th>
                <th>VALUE</th>
              </tr>
              <tr v-for="(value, index) in car.Specifications" :key="index">
                <td>{{ value.name }}:</td>
                <td>{{ value.value }}</td>
              </tr>
            </div>
          </div>
          <!-- Team-Description -->
          <div class="col-md-6">
            <h1>THE TEAM</h1>
            <div class="team_mem">
              <tr v-for="(member, index) in car.Team" :key="index">
                <td>{{ member.designation }}</td>
                <td>{{ member.name }}</td>
              </tr>
            </div>
          </div>

          <div id="glory-box" class="col-md-12">
            <h1>GLORIES AND ACHIEVEMENTS</h1>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import store from "@/store.js";

export default {
  data() {
    return {
      car: null
    };
  },
  props: {
    carName: {
      type: String,
      required: true
    }
  },
  created() {
    this.car = store.cars.find(car => car.name === this.carName);
  }
};
</script>

<style scoped>
main {
  margin-top: 100px;
}
td,
th {
  padding: 12px;
}
.image-box {
  margin: auto;
  width: fit-content;
  padding: 10px;
}
.image-box img {
  margin: auto;
  display: block;
  max-width: 350px;
  width: 80%;
}
h1{
  text-align: center;
}
.name {
  margin: auto;
  width: fit-content;
  font: 22px rgb(22, 22, 22);
  margin-bottom: 3rem;
}
.col-md-12,
.row {
  max-width: 100vw !important;
  padding: 0;
  margin: 0;
}
.col-md-6 > h1 {
  text-align: center;
  padding: 30px 0;
}
tr {
  display: flex;
  justify-content: space-evenly;
}
 tr:nth-of-type(odd) {
  background-color: beige;
}
tr th,
tr td {
  flex-basis: 45%;
}
#glory-box{
  margin: 50px 0;
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 1.8em;
  }
  .container{
    padding: 0;
  }
}
</style>
