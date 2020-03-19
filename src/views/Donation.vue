<template>
  <main>
    <section class="one">
      <header class="donation-heading">
        <h1>Donate to support us</h1>
      </header>
      <div class="donation-body">
        <article>
          Team ZHCET formula racing strives hard & passionately to bring up the talent from Aligarh Muslim University
          to give an exposure on Indian & global platforms. We encourage young talent to be a part of us and to
          provide them an adequate environment so that they can perform some sophisticated work in the field of
          motorsports, automobiles and Management sectors.
          <p>
            From when we were just a few students to this time when we
            are preparing for our 5th version ZFR 5.0, a lot of changes have taken place .We work hard, sometimes we
            run, sometimes we walk, sometimes we crawl but the passion for automotive engineering keeps firing in our
            hearts .
          </p>
          <p>
            We could not have been here unless people like you did not support us. By considering the immensity
            of event and availability of resources, we as a team of aspiring & enthusiast automotive engineers looks
            upon corporate & private firms who sponsor us & let us help to ignite our passion. As someone said “Rome was
            not built in a day”, so we firmly believe that we can achieve it but what we need is your support & your
            trust on us.
          </p>
          <p>So that we can create a new benchmark for upcoming automotive enthusiast.</p>
        </article>
        <div id="amu-icon">
          <img src="/images/donation_images/amu-logo.jpg" alt />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>

.one{
  margin-top:10vh;
}
.one,.two{
   padding: 12px 5%;
}

.donation-heading{
    text-align: center;
    font-family: Algerian;
}
.donation-heading h1{
    padding: 32px;
    font-size: 3.2em;
}
.donation-body{
    padding: 12px 10%;
    line-height: 1.8;
    width: 70%;
    min-width: 300px;
    text-align: justify;
    margin:auto;
    color: #414042;
    font-size: 1.4em;
    font-family: Domine;
}
#amu-icon img{
    height: 50%;
    padding: 0 12px;
    width: 100%;
    max-width: 200px;
    color: #ffffd0;
    margin: auto;
    display: block;
}

@media screen and (max-width: 767px) {
    .donation-body{
        font-size: 1em;
        padding: 12px 0;
    }
    .donation-heading h1{
        font-size: 2.2em;
    }
}
</style>