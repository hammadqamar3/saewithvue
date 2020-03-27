<template>
  <main>
    <section class="one">
      <header class="donation-heading">
        <h1>Donate to support us</h1>
      </header>
      <div class="donation-body">
        <section id="description">
          <article>
            Team ZHCET formula racing strives hard & passionately to bring up the
            talent from Aligarh Muslim University to give an exposure on Indian &
            global platforms. We encourage young talent to be a part of us and to
            provide them an adequate environment so that they can perform some
            sophisticated work in the field of motorsports, automobiles and
            Management sectors.
            <p>
              From when we were just a few students to this time when we are
              preparing for our 5th version ZFR 5.0, a lot of changes have taken
              place .We work hard, sometimes we run, sometimes we walk, sometimes
              we crawl but the passion for automotive engineering keeps firing in
              our hearts .
            </p>
            <p>
              We could not have been here unless people like you did not support
              us. By considering the immensity of event and availability of
              resources, we as a team of aspiring & enthusiast automotive
              engineers looks upon corporate & private firms who sponsor us & let
              us help to ignite our passion. As someone said “Rome was not built
              in a day”, so we firmly believe that we can achieve it but what we
              need is your support & your trust on us.
            </p>
            <p>
              So that we can create a new benchmark for upcoming automotive
              enthusiast.
            </p>
          </article>
        </section>
        <section id="account">
          <h2>Details</h2>
          <ul>
            <li v-for="prop in account" :key="prop.name">
              <tr>{{ prop.name }} :</tr>
              <div class="detailsInline">
                <tr class="account-details">{{ prop.value }}</tr>
                <button v-clipboard="prop.value">
                  <img
                    title="click to copy"
                    class="copyIcon"
                    :src="require('@/assets/icons/copy.svg')"
                    alt="Click to copy the details"
                  />
                </button>
              </div>
            </li>
          </ul>
        </section>
      </div>
      <div id="amu-icon">
        <img src="../assets/images/donation_images/amu-logo.jpg" alt />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      account: [
        { name: "Account Name", value: "SAEINDIA ZHCET COLLEGIATE CLUB" },
        { name: "Account Number", value: 32710722841 },
        { name: "Bank", value: "State Bank Of India,AMU Branch" },
        { name: "CIF No.", value: 86544925905 },
        { name: "Branch Code", value: 5555 },
        { name: "IFSC Code", value: "SBIN0005555" }
      ]
    };
  }
};
</script>

<style scoped>
button {
  border: none;
  background: none;
  position: relative;
  cursor: pointer;
}

button::after{
  content: "Copy Here";
  line-height: 1.2;
  font-size: 0.6rem;
  position: absolute;
  left: 0;
  color: white;
  opacity: 0;
  font-weight: 900;
  bottom: 5px;
  
}
.detailsInline:hover button{
   background: #1e928c; 
}

.detailsInline:hover .copyIcon{
  /* transition: margin-top 0.3s linear; */
  margin-top: -15px;
}
.detailsInline:hover button::after{
  transition: opacity 0.3s linear;
  display: inline;
  opacity: 1;
}

li {
  padding: 10px 0 0 12px;
  margin: 8px 0;
}
.one {
  margin-top: 10vh;
  padding: 0;
}
.account-details {
  background: #e2e2d8;
  padding: 12px;
  width: fit-content;
}
.detailsInline {
  display: flex;
}
.copyIcon {
  display: inline;
  cursor: pointer;
  margin: 12px;
  margin-top:12px;
  transition: margin-top 0.3s linear;
}

.donation-heading {
  text-align: center;
  font-family: Algerian;
}
.donation-heading h1 {
  padding: 32px;
  font-size: 3em;
}
#account > h2 {
  color: #2d2d2e;
  text-align: center;
  font-weight: 800;
  padding: 12px;
  background-color: rgb(195, 206, 216);
}
.donation-body {
  display: flex;
  justify-content: space-evenly;
  line-height: 1.8;
  /* min-width: 300px; */
  text-align: justify;
  color: #414042;
  font-size: 1.2em;
  font-family: Domine;
}
.donation-body > section:nth-child(1) {
  flex-basis: 40%;
}
.donation-body > section:nth-child(2) {
  flex-basis: 40%;
}

.donation-body article {
  word-wrap: wrap;
}
#amu-icon img {
  height: 30%;
  padding:12px;
  max-height: 200px;
  color: #ffffd0;
  margin: auto;
  display: block;
}

@media screen and (max-width: 767px) {
  .one {
    padding: 12px;
  }
  .donation-body {
    font-size: 0.8em;
    padding: 12px 0;
    flex-direction: column;
    align-content: space-around;
  }
  .account-details {
    padding: 8px;
  }
  #account {
    padding: 6px;
  }
  li {
    padding-left: 0;
  }
  .copyIcon {
    padding: 6px;
  }
  .donation-body > * {
    flex-basis: 70% !important;
    margin: 40px 0;
    padding: 0 12px;
  }
  .donation-heading h1 {
    font-size: 2.2em;
  }
}
</style>
