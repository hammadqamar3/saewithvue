import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component(){
      return import(/* webpackChunkName: "home" */ "../views/Home.vue")
    }
  },
  {
    path: "/cars",
    name: "Cars",
    component(){
      return import(/* webpackChunkName: "cars" */ "../views/Cars.vue")
    }
  },
  {
    path: "/model/:carName",
    name: "CarModel",
    component(){
      return import(/* webpackChunkName: "cars" */ "../views/CarModel.vue")
    },
    props: true
  },
  {
    path:"/crew",
    name:"Crew",
    component(){
      return import(/* webpackChunkName: "crew" */ "../views/Crew.vue" )
    }
  },
  {
    path:"/fs",
    name: "FS",
    component(){
      return import(/* webpackChunkName: "fs" */ "../views/FS.vue")
    }
  },
  {
    path:"/sponsors",
    name:"Sponsors",
    component(){
      return import(/* webpackChunkName: "sponsors" */ "../views/Sponsors.vue")
    }
  },
  {
    path:"/donation",
    name:"Donation",
    component(){
      return import(/* webpackChunkName: "donation" */ "../views/Donation.vue")
    }
  }
];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
});

export default router;