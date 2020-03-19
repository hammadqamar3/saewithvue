<template>
  <main>
    <div id="fb-root"></div>
    <div class="bd-example">
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            v-for="number in 5"
            :key="number"
            :data-slide-to="number-1"
          ></li>
        </ol>
        <div class="carousel-inner">
          <div
            class="carousel-item"
            v-for="(image,index) in carouselImage"
            :key="index"
            :class="[index === 1?'active':'']"
          >
            <img
              :src="require(`@/assets/images/carousel/${image}`)"
              class="d-block w-100"
              alt="zhcet formula racing team"
            />
          </div>
        </div>
      </div>
    </div>

    <section id="main_image">
      <header id="header_text">
        <p>
          <span>Z</span>HCET
        </p>
        <p>
          <span>F</span>ormula
          <span>R</span>acing
        </p>
      </header>
    </section>
    <section id="description-zfr">
      <header class="some-headings">About Zhcet Formula Racing</header>
      <article class="about-text">
        ZHCET FORMULA RACING is a formula
        racing team of 40 quite hard working and
        passionate undergraduate engineering students from Aligarh Muslim University who ideate, design, fabricate
        and test a formula style race car and participate in various National as well as International formula
        student competitions.
      </article>
    </section>
    <section id="social-block">
      <div>
        <div class="some-headings">Social media updates</div>
      </div>
      <div id="page-container">
        <div class="first">
          <div id="insta-container">
            <iframe
              src="//lightwidget.com/widgets/a783dbf4dca95e0ea5eec31e206ec03f.html"
              allowtransparency="true"
              class="lightwidget-widget"
              style="width:100%;height:500px;border:0;overflow:hidden;"
            ></iframe>
          </div>
        </div>
        <div class="second">
          <div id="fb-page12">
            <div
              class="fb-page"
              data-href="https://www.facebook.com/ZHCETFormulaRacing/"
              data-tabs="timeline"
              data-width="500"
              data-height="500"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote
                cite="https://www.facebook.com/ZHCETFormulaRacing/"
                class="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/ZHCETFormulaRacing/">ZHCET Formula Racing</a>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div id="youtube-box">
        <div id="youtube-player">
          <iframe
            src="https://www.youtube.com/embed/q6yPVslIujk?loop=1&rel=0&modestbranding=0$iv_load_policy=3"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
    <section class="grid-view">
      <div class="parts">
        <section
          class="wrapper"
          v-for="(item,index) in details"
          :key="index"
          :class="[index === 1?'alter-grid':'']"
        >
          <div class="grid-text">
            <div class="icon">
              <figure>
                <img :src="require(`@/assets/icons/home_icons/${item.icon}`)" alt="icon" />
              </figure>
            </div>
            <header class="heading-text">{{ item.heading }}</header>
            <article class="body-text">{{ item.body }}</article>
            <div class="link">
              <router-link :to="{ name:`${item.link}` }">
                <span>
                  Know more
                  <img
                    :src="require('@/assets/icons/home_icons/chevron-solid.svg')"
                    class="chevron-solid"
                  />
                </span>
              </router-link>
            </div>
          </div>
          <div class="grid-image">
            <div class="image-container">
              <img :src="require(`@/assets/images/home_images/${item.image}`)" />
            </div>
          </div>
        </section>
      </div>
    </section>

    <section>
      <TheForm />
    </section>
  </main>
</template>
<script>
import TheForm from "@/components/TheForm.vue";
export default {
  components: {
    TheForm
  },
  data() {
    return {
      carouselImage: ["1.jpeg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
      details: [
        {
          icon: "flag.png",
          heading: "Formula Student",
          body: `Being one of the most prestigious design competitions round the globe, formula
              student is a global showdown which challenges the university undergraduates to combine hands on practical
              appliances along with project management skills.`,
          link: "FS",
          image: "formulastudent.jpg"
        },
        {
          icon: "car.png",
          heading: "Our Cars",
          body: `Till now our club has made 4 cars out of which ZFR4.0 is latest and we are working on
              ZFR5.0`,
          link: "Cars",
          image: "collage.jpg"
        },
        {
          icon: "mechanic.png",
          heading: "Our Crew",
          body:
            "Meet the students who AMU, who are working day and night to make zfr better.",
          image: "team.jpeg",
          link: "Crew"
        }
      ]
    };
  },
  mounted(){
    let scriptAdder = document.createElement('script')
    scriptAdder.setAttribute('src','https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v4.0')
    scriptAdder.setAttribute('crossorigin','anonymous')
    scriptAdder.setAttribute('defer','')
    document.head.appendChild(scriptAdder)
  }
};
</script>

<style scoped>
body {
  overflow-x: hidden;
}

#description-zfr {
  margin-top: 6%;
}

.chevron-solid {
  height: 20px;
  width: 20px;
}

#main_image {
  position: absolute;
  top: 0;
  width: 100%;
}

#header_text {
  background: rgba(0, 0, 0, 0.5);
  color: rgb(255, 255, 255);
  font-size: 20vw;
  font-family: Cinzel;
  font-weight: 800;
  height: 100vh;
  padding-top: 28vh;
  text-shadow: black 5px 5px 5px;
}

#wrapper {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.bd-example {
  margin-top: 68.25px;
  position: relative;
  z-index: 0;
  width: 100%;
}

.carousel-item img {
  height: calc(100vh - 68.25px);
}

.about-text {
  padding: 5%;
  font-size: 1.4em;
  text-align: justify;
  line-height: 1.8;
  width: 80%;
  font-family: "Open Sans";
  margin: auto;
  min-width: 300px;
  color: #414042;
}

p {
  margin: auto;
  width: fit-content;
  text-align: center;
  border-left: 3px solid goldenrod;
  padding-left: 2%;
}

.parts {
  display: grid;
  grid-template-columns: 1fr;
  min-height: 200px;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 200px;
  grid-column-gap: 5%;
  grid-template-areas: "second first";
}

.wrapper .heading-text {
  font: 500 2.3em Domine;
}

.parts section {
  border-top: 2px solid goldenrod;
  margin-top: 50px;
  padding: 50px 0;
}

.grid-view {
  margin: 50px 5%;
  font-family: "Open Sans";
}

.grid-text {
  width: 100%;
  min-height: 400px;
  padding: 2.2em;
}

.grid-text > div {
  margin: 3%;
  margin-left: 0;
}
article {
  margin: 3% 0;
}
.grid-text .body-text {
  text-align: justify;
  font-family: "Open Sans";
  font-size: 1.4em;
  line-height: 1.6;
  color: #414042;
}

.grid-text .link {
  text-decoration: none;
  font-size: 1.4em;
  text-align: left;
}
.link span {
  color: #333;
}

.icon div {
  background: rgb(245, 244, 244);
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

.icon img {
  height: 50px;
  width: 50px;
}

.grid-image {
  display: flex;
  align-items: center;
}

.grid-image {
  padding: 12px;
}

.grid-image .image-container img {
  height: calc(50vw * (562 / 1000));
  min-height: 200px;
  max-height: 400px;
  border-radius: 12px;
  box-shadow: 0 2px 6px 3px rgba(0, 0, 0, 0.32);
  width: 100%;
  display: block;
  margin: auto;
}

#page-container {
  display: grid;
  margin: 5%;
  padding-top: 0;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5%;
}

#fb-page12 {
  max-width: 500px;
  width: 40vw;
  margin: auto;
}

#social-block {
  border: 2px outset grey;
  margin: 0 2%;
}
.some-headings {
  text-align: center;
  font: 600 2.59em Domine;
  padding: 30px 5%;
}

.alter-grid .grid-image {
  grid-area: second;
}

.alter-grid .grid-text {
  grid-area: first;
}

#insta-container iframe {
  margin: auto;
  /* see the details inside the iframe */
}

#youtube-box {
  margin: 8% 0;
  overflow: hidden;
  background: beige;
}

#youtube-player {
  width: fit-content;
  margin: auto;
  padding: 8px;
}

#youtube-player iframe {
  margin: auto;
  display: block;
  width: 60vw;
  min-width: 280px;
  min-height: 200px;
  height: calc(50vw * (562 / 1000));
}

@media screen and (min-width: 700px) {
  #header_text {
    font-size: 9vw;
  }
}

@media screen and (max-width: 767px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
    min-height: 200px;
    grid-column-gap: 30px;
  }

  #fb-page12 {
    width: 85vw;
    margin: auto;
    margin-top: 10vh;
  }

  #page-container {
    grid-template-columns: 1fr;
  }
  .grid-text {
    padding: 1.6em;
  }
  .grid-text > * {
    padding: 12px 0;
  }
  .grid-text .body-text,
  .about-text {
    font-size: 1.05em;
  }

  .some-headings,
  .wrapper .heading-text {
    margin-top: 20px;
    font-size: 1.7em;
  }

  .wrapper {
    grid-template-columns: 1fr;
    grid-template-areas:
      "first"
      "second";
  }
  .bd-example {
    margin-top: 56px;
  }
  .carousel-item img {
    height: calc(100vh - 56px);
  }
}
</style>
