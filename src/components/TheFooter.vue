<template>
  <footer class="page-footer font-small stylish-color-dark pt-4">
    <!-- Footer Links -->
    <div class="container text-center text-md-left">
      <!-- Grid row -->
      <div class="row">
        <!-- Grid column -->
        <div class="col-md-4 mx-auto">
          <!-- Content -->
          <h5 class="font-weight-bold mt-3 mb-4">
            <div>Contact Us</div>
          </h5>

          <ul class="list-unstyled">
            <li v-for="contact in contactDetails" :key="contact.name">
              {{ contact.name }}
              <a :href="contact.link">{{ contact.value }}</a>
            </li>
            <br />
            <li>
              <address>
                Address :
                <br />{{ address }}
              </address>
            </li>
          </ul>
        </div>
        <!-- Grid column -->

        <hr class="clearfix w-100 d-md-none" />

        <!-- Grid column -->
        <div class="col-md-5 mx-auto">
          <!-- Links -->
          <h5 class="font-weight-bold mt-3 mb-4">
            <div>Our Cars</div>
          </h5>

          <ul class="list-unstyled list-inline">
            <li class="list-inline-item" v-for="car in cars" :key="car.name">
              <router-link :to="car.link">{{ car.name }}</router-link> |
            </li>

          </ul>
        </div>
        <!-- Grid column -->
        <!-- Grid row -->
      </div>
      <!-- Footer Links -->

      <hr />

      <!-- Call to action -->
      <ul class="list-unstyled list-inline text-center py-2">
        <li class="list-inline-item">
          <h5 class="mb-1">Support Us</h5>
        </li>
        <li class="list-inline-item">
          <router-link :to="{name:'Donation'}" class="btn btn-danger btn-rounded">Donate here!</router-link>
        </li>
      </ul>
      <!-- Call to action -->

      <hr />

      <!-- Social buttons -->
      <ul class="list-unstyled list-inline text-center" id="social-buttons">
        <li class="list-inline-item" v-for="(item,index) in Social" :key="index">
          <a
            :href="item.link"
            target="_blank"
            class="btn-floating btn-fb mx-1"
          ><img :src="require(`@/assets/icons/footer_icons/${item.image}`)" alt="fb link" /></a>
        </li>
      </ul>
      <!-- Social buttons -->

      <!-- developer -->
      <div class="text-center py-3" id="developer">
        Developed by
        <a href="https://www.linkedin.com/in/anasmohd/" target="_blank">Mohd Anas</a>
        &
        <a
          href="https://www.linkedin.com/in/gauhar-ayub-khan-8202b516b/"
          target="_blank"
        >Gauhar Ayub Khan</a>
      </div>
      <!-- developer -->
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      contactDetails: [
        {
          name: "Email",
          value: "zhcetformularacing@gmail.com",
          link: "mailto:zhcetformularacing@gmail.com"
        },
        {
          name: "Phone No.",
          value: "+917417294492",
          link: "tel:+917417294492"
        }
      ],
      address: "SAE zhcet,AMU,Aligarh,Uttar Pradesh,India",
      cars: [
        {
          name: "ZFR 5.0",
          link: "/cars/5.0"
        },
        {
          name: "ZFR 4.1",
          link: "/cars/4.1"
        },
        {
          name: "ZFR 4.0",
          link: "/cars/4.0"
        },
        { name: "ZFR 3.0",
          link: "/cars/3.0" 
        },
        {
          name: "ZFR 2.0",
          link: "/cars/2.0"
        },
        {
          name: "ZFR 1.0",
          link: "/cars/1.0"
        }
      ],
      Social:[
          {
              link:"https://www.facebook.com/ZHCETFormulaRacing/",
              image:"fb.png"
          },
          {
              link:"https://twitter.com/zfr_amu?lang=en",
              image:"twitter.png"
          },
          {
              link:"https://www.linkedin.com/company/zhcet-formula-racing-zfr/about/",
              image:"linkedin.png"
          },{
              link:"https://www.instagram.com/zhcet_formula_racing/?hl=en",
              image:"insta.png"
          }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>