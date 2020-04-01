<template>
  <main>
    <div class="container">
      <section class="fst-blog">
        <a href="https://www.imeche.org/events/formula-student">
          <h1 id="formula_head">FORMULA STUDENT</h1>
        </a>
        <p class="blog-text">
          Formula Student is a student engineering competition in which
          students from different prestigious universities around the world design, build,
          test, and race a formula style racing car.
          The events are backed by industry and high-profile engineers such as Patron, Ross Brawn OBE.
          The competition aims to develop enterprising and innovative young engineers
          and encourage more young people to take up a career in engineering.
          The project usually forms part of a degree-level project and is viewed by the motorsport industry
          as the standard for engineering graduates to meet, transitioning them from university to the
          workplace.
          It is a kite-mark for real-world engineering experience, combining practical engineering experience
          with soft skills including business planning and project management.
          Each year, Formula Student sees over 100 university teams from around the globe competing in
          static and dynamic events that will test their preparation and hard work.
        </p>
      </section>
      <section class="static-events">
        <div>
          <h2>STATIC EVENTS</h2>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div>
              <h4>Design Event</h4>
              <p>
                In Design Event, the team presents a design report before a panel of
                judges.On the basis of these documents, the members of the jury
                will evaluate the layout, technical design, construction and implementation of the
                production of the actual vehicle. Then, there will be a discussion where the
                teams are questioned by the judges. These discussions focus on clarifying technical
                details, exploring the thinking behind the chosen design, as well as the corresponding
                technical understanding of the students. The evaluation will not only assess the
                quality of the technical solution
                in question but also the reasons behind it.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <h4>Cost Report</h4>
              <p>
                Cost is a decisive factor in the design of any product.
                In the cost analysis event, the teams must grapple with
                the calculative size of the vehicle, its components, and
                the necessary manufacturing steps and record all of this in a written
                cost report. The students must then answer questions from the
                judges relating to the cost report on their prototype. In addition
                to considering the thoroughness of the written report, the students’
                understanding of the manufacturing process and the total cost calculation
                will be assessed.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <h4>Business Plan Presentation</h4>
              <p>
                Each team presents their business plan for the constructed prototype to a fictitious
                company
                represented by judges. During a ten minute presentation, the team must demonstrate why
                their
                design best fulfils the demands of their target group and show how their design can be
                successfully marketed. The presentation will be followed by a five minute discussion and
                question
                round with the judges. In this event the content, structure, and editing of the
                pres-entation, as
                well as the team‘s performance
                in delivering it, will be evaluated alongside their answers to the panel‘s questions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="dynamic-events">
        <div>
          <h2>DYNAMIC EVENTS</h2>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div>
              <h4>Skidpad</h4>
              <p>
                During the Skid Pad event, the cars must drive a figure of 8 circuit lined with track
                cones,
                performing two laps of each circle. In each case, the sec-ond lap will be measured. The
                lap
                time gives a comparative value for the maximum possible lateral acceleration of the car.
                Most of the cars use aerodynamics to raise the contact pressure and thus, increase
                lateral acceleration. As
                with all the dynamic events, knocking over any of the cones results in a time penalty.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <h4>Acceleration</h4>
              <p>
                The vehicle‘s acceleration from a standing start is measured over a 75 metre straight.
                In addition to trac-tion, the correct engine design is especially important, either in
                terms of greater power or for the highest possible torque. The fastest cars cross the
                line in less than four seconds and can reach speeds of
                over 100 km/h by the end of the stretch.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <h4>Autocross</h4>
              <p>
                In the autocross event, the FSC and FSE cars traverse a kilometre-long, the FSD cars
                traverse a 500 meter track with straights, curves, and chicanes. A fast lap time is a
                sign of high driving dynamics, precise handling and good acceleration and braking
                ability.
                Once again, time penalties occur for those who knock over any cones. The autocross
                rankings
                decide the starting positions for the endurance competition that follows.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <h4>Endurance</h4>
              <p>
                Providing the highest number of points, the Endurance is the main discipline.
                Over a distance of 22 kilometers the cars have to prove their durability under long-term
                conditions.
                Acceleration, speed, handling, dynamics, fuel economy, reliability ‒ the cars have to
                prove it all.
                The Endurance also demands handling skills of the driver because there can be up to four
                cars on the
                track at the same time.
                Each team has only one attempt, the drivers change after 11 kilometers.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <h4>Efficiency</h4>
              <p>
                During the endurance race (FSC, FSE) and track drive event (FSD), fuel consumption
                (combustion cars)
                or energy consumption (electric cars) is precisely recorded. However, the absolute fuel
                and
                energy consumption is not what is used to calculate the efficiency score, but rather the
                consumption relative to speed. This is to prevent teams from driving particularly slowly
                in
                the en-durance competition in order to score as highly as possible in the efficiency
                category.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
main {
  padding: 1px 0;
  background: linear-gradient(rgba(0, 0, 0, 0.898), rgba(0, 0, 0, 0.61)),
    url("../assets/images/background/fb.jpg") no-repeat center center;
  background-size: cover;
}
#formula_head {
  text-align: center;
  padding: 2%;
  margin-top: 3%;
  font-family: "Aldrich";
  font-weight: bold;
}
.fst-blog {
  margin-top: 16vh;
  margin-bottom: 7%;
}
.fst-blog,
.fst-blog a {
  color: white;
  font-weight: 90%;
}
.col-md-4 p {
  color: white;
  font-weight: 50%;
  font-family: "Times New Roman", Times, serif;
  font-size: 120%;
}
.blog-text {
  font-family: "Times New Roman", Times, serif;
  font-size: 130%;
}
.static-events {
  margin-bottom: 3%;
}
.static-events h4,
.dynamic-events h4 {
  text-align: center;
  color: white;
  font-weight: bold;
}
.dynamic-events .col-md-4,
.static-events .col-md-4 {
  margin-bottom: 2%;
}
.static-events h2,
.dynamic-events h2 {
  text-align: center;
  font-family: "Aldrich";
  color: white;
  margin-bottom: 5%;
  font-weight: bold;
}
#header-text div {
  color: white;
  font-size: 8vw;
  font-weight: 800;
  margin: auto;
  width: fit-content;
  text-align: center;
  border-left: 3px solid goldenrod;
  padding-left: 2%;
}
@media screen and (max-width: "768px"){
  main{
    background: linear-gradient(rgba(0, 0, 0, 0.898), rgba(0, 0, 0, 0.61)),
    url("../assets/images/background/fb.r.jpg") no-repeat center center;
  }
}
</style>