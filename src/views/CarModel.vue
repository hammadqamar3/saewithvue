<template>
  <main>
    <section id="cars-head">
      <div class="text-block">
        <h1>OUR RACING CARS</h1>
      </div>
    </section>

    <section id="cars-sae">
      <div class="row">
        <div class="col-md-12">
          <div class="image-box spec">
            <img :src="require(`@/assets/images/car_images/${car.image}`)" />
          </div>
          <div class="name">
            <h1>{{  car.name }}</h1>
          </div>
        </div>
      </div>
    </section>
    <!-- Cars specs table -->
    <section class="specs-table">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h1>CAR SPECIFICATIONS</h1>
            <table id="carspecstable">
              <tr>
                <th>PROPERTY</th>
                <th>VALUE</th>
              </tr>
              <tr v-for="(value,index) in car.Specifications" :key="index">
                <td class="head-td">{{value.name}}</td>
                <td>{{value.value}}</td>
              </tr>
            </table>
          </div>
          <!-- Team-Description -->
          <div class="col-md-6">
            <h1>THE TEAM</h1>
            <div class="team_mem">
              <div class="row" v-for="(member,index) in car.Team" :key="index">
                <div class="col-7">
                  <span class="desig">{{ member.designation}}</span>
                </div>
                <div class="col-5">
                  <span class="value">{{ member.name }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-12">
            <h1>GLORIES AND ACHIEVEMENTS</h1>
            <ul class="points"></ul>
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
      car:null
    };
  },
  props: {
    carName: {
      type: String,
      required: true
    }
  },
  created(){
      this.car = store.cars.find( car =>car.name === this.carName )
    }
  
};
</script>

<style scoped>
.image-box{
  margin:auto;
  width: fit-content;
  padding: 30px;
}
.name{
  margin: auto;
  width: fit-content;
  font: 22px rgb(22, 22, 22);
  margin-bottom: 3rem;
}
.col-md-12,.row{
  max-width: 100vw !important;
  padding: 0;
  margin: 0;
}
.col-md-6> h1{
  text-align: center;
  padding:30px 0;
}
#carspecstable tr{
  display: flex;

}
#carspecstable tr th,#carspecstable tr td{
  flex-basis: 40% 40%;
}
</style>