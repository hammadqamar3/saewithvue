<template>
  <nav class="navbar navbar-expand-lg" id="navbar">
    <div class="container container-nav" id="contain">
      <router-link class="navbar-brand" :to="{ name: 'Home'}">
        <img src="../assets/icons/nav_icons/logo2.png" alt="logo" id="logo" />
      </router-link>
      <button @click="toggleHamburger"
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div id="nav-icon2" :class="{open:!openClass}" >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav" @click="closeTheNav">
          <li class="nav-item" v-for="item in navList" :key="item.name">
            <router-link class="nav-link" :to="{ name:item.link}">
              <img :src="require(`@/assets/icons/nav_icons/${item.icon}`)" class="nav-icons" />
              {{ item.name }}
            </router-link>
          </li>

          <li class="nav-item dropdown" id="donation">
            <div
              class="nav-link dropdown-toggle"
              :to="{ name:'Donation'}"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src="../assets/icons/nav_icons/rupee.svg" class="nav-icons" />
              <span>S</span>upport
            </div>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <router-link class="dropdown-item" :to="{ name:'Donation' }">Support Us</router-link>
              <router-link class="dropdown-item" :to="{ name:'Sponsors' }">Our Sponsors</router-link>
            </div>
          </li>
        </ul>
      </div>
      <a class="navbar-brand" id="amu-logo" href="https://www.amu.ac.in" target="_blank">
        <div>
          <img src="../assets/icons/nav_icons/amulogo.png" alt />
        </div>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      openClass: true,
      window: window,
      navList: [
        {
          name: "Home",
          icon: "house.svg",
          link: "Home"
        },
        {
          name: "Crew",
          icon: "team-solid.svg",
          link: "Crew"
        },
        {
          name: "Cars",
          icon: "car.png",
          link: "Cars"
        },
        {
          name: "Formula Student",
          icon: "star-half-wide.svg",
          link: "FS"
        }
      ]
    };
  },
  methods: {
    toggleHamburger() {
      this.openClass = !this.openClass;
    },
    closeTheNav(){
      document.getElementById("nav-icon2").click()
    }
  }
};
</script>

<style scoped>

#nav-icon2 {
  width: 40px;
  height: 45px;
  position: relative;
  /* margin: 5px auto; */
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

#nav-icon2 span {
  display: block;
  position: absolute;
  height: 5px;
  width: 50%;
  background: rgb(180, 0, 0);
  opacity: 1;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

#nav-icon2 span:nth-child(even) {
  left: 50%;
  border-radius: 0 9px 9px 0;
}

#nav-icon2 span:nth-child(odd) {
  left: 0px;
  border-radius: 9px 0 0 9px;
}

#nav-icon2 span:nth-child(1),
#nav-icon2 span:nth-child(2) {
  top: 10px;
}

#nav-icon2 span:nth-child(3),
#nav-icon2 span:nth-child(4) {
  top: 20px;
}

#nav-icon2 span:nth-child(5),
#nav-icon2 span:nth-child(6) {
  top: 30px;
}

#nav-icon2.open span:nth-child(1),
#nav-icon2.open span:nth-child(6) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon2.open span:nth-child(2),
#nav-icon2.open span:nth-child(5) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon2.open span:nth-child(1) {
  left: 5px;
  top: 14px;
}

#nav-icon2.open span:nth-child(2) {
  left: calc(50% - 5px);
  top: 14px;
}

#nav-icon2.open span:nth-child(3) {
  left: -50%;
  opacity: 0;
}

#nav-icon2.open span:nth-child(4) {
  left: 100%;
  opacity: 0;
}

#nav-icon2.open span:nth-child(5) {
  left: 5px;
  top: 24px;
}

#nav-icon2.open span:nth-child(6) {
  left: calc(50% - 5px);
  top: 24px;
}
</style>