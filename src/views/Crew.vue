<template>
  <main>
    <div>
      <div class="department-heading" id="zfr5">
        <div>
          <div class="department-heading-box">
            <h1>ZFR5.0</h1>
          </div>
        </div>
      </div>

      <!-- chairperson -->
      <section class="firsttier" id="top-member">
        <div>
          <div class="member">
            <div class="member-image">
              <img :src="require(`@/assets/team images/team-members/${captain.image}`)" alt />
            </div>

            <div>
              <div class="perse-des">
                <h2>{{ captain.position }}</h2>
                <h4>{{ captain.name }}</h4>
              </div>
            </div>
            <div class="linksofmembers">
              <div v-for="(link,index) in captain.links" :key="index">
                <a :href="link.link">
                  <img v-lazy="require(`@/assets/icons/team_icons/${link.image}`)" :alt="link.name" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div v-for="department in departments" :key="department.name">
        <div class="department-heading">
          <div>
            <div class="department-heading-box">
              <h1>{{ department.departmentName}}</h1>
            </div>
          </div>
        </div>

        <section class="firsttier">
          <div>
            <div class="member">
              <div class="member-image">
                <img
                  v-lazy="require(`@/assets/team images/team-members/${department.lead.image}`)"
                  alt
                />
              </div>

              <div>
                <div class="perse-des">
                  <h2>{{ department.lead.position }}</h2>
                  <h4>{{ department.lead.name }}</h4>
                </div>
              </div>
              <div class="linksofmembers">
                <div v-for="(link,index) in department.lead.links" :key="index">
                <a :href="link.link">
                  <img v-lazy="require(`@/assets/icons/team_icons/${link.image}`)" :alt="link.name" />
                </a>
              </div>
              </div>
            </div>
          </div>
        </section>

        <section class="second-tier">
          <div v-for="member in department.members" :key="member.name">
            <div class="member">
              <div class="member-image">
                <img v-lazy="require(`@/assets/team images/team-members/${member.image}`)" alt />
              </div>

              <div class="details">
                <div class="perse-des-small">
                  <h2>{{ member.position }}</h2>
                  <h4>{{ member.name }}</h4>
                </div>
                <div class="linksofmembers">
                  <div v-for="(link,index) in member.links" :key="index">
                <a :href="link.link">
                  <img v-lazy="require(`@/assets/icons/team_icons/${link.image}`)" :alt="link.name" />
                </a>
              </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      captain: {
        image: "IMG-20191124-WA0025.jpg",
        position: "Captain",
        name: "Sarif Anwar",
        links: [
          { name: "insta", image: "insta.png", link: "#" },
          { name: "email", image: "email.png", link: "#" },
          { name: "linkedin", image: "linkedin.png", link: "#" }
        ]
      },
      departments: [
        {
          departmentName: "Vehicle Dynamics",
          lead: {
            name: "Mohd Tashif",
            position: "Vehicle Dynamics Lead",
            image: "IMG_20191125_201318.jpg",
            links: [
              { name: "insta", image: "insta.png", link: "#" },
              { name: "email", image: "email.png", link: "#" },
              { name: "linkedin", image: "linkedin.png", link: "#" }
            ]
          },
          members: [
            {
              name: "Sarif Anwar",
              position: "Steering & Wheel Assembly",
              image: "IMG-20191124-WA0025.jpg",
              links: [
                { name: "insta", image: "insta.png", link: "#" },
                { name: "email", image: "email.png", link: "#" },
                { name: "linkedin", image: "linkedin.png", link: "#" }
              ]
            },
            {
              name: "Rehan Abad Siddiqui",
              position: "Wheel Assembly",
              image: "rehan.jpeg",
              links: [
                { name: "insta", image: "insta.png", link: "#" },
                { name: "email", image: "email.png", link: "#" },
                { name: "linkedin", image: "linkedin.png", link: "#" }
              ]
            },
            {
              name: "Yogesh Kumar",
              position: "Suspension",
              image: "IMG_20191125_200830.jpg",
              links: [
                { name: "insta", image: "insta.png", link: "#" },
                { name: "email", image: "email.png", link: "#" },
                { name: "linkedin", image: "linkedin.png", link: "#" }
              ]
            },
            {
              name: "Hammad Qamar",
              position: "Steering",
              image: "IMG_20191126_235448.jpg",
              links: [
                { name: "insta", image: "insta.png", link: "#" },
                { name: "email", image: "email.png", link: "#" },
                { name: "linkedin", image: "linkedin.png", link: "#" }
              ]
            },
            {
              name: "Aftaab Alam",
              position: "Suspension",
              image: "IMG_20191125_200951.jpg",
              links: [
                { name: "insta", image: "insta.png", link: "#" },
                { name: "email", image: "email.png", link: "#" },
                { name: "linkedin", image: "linkedin.png", link: "#" }
              ]
            },
            {
              name: "Burhan Shamsi",
              position: "Brakes",
              image: "IMG_20191130_011434.jpg",
              links: [
                { name: "insta", image: "insta.png", link: "#" },
                { name: "email", image: "email.png", link: "#" },
                { name: "linkedin", image: "linkedin.png", link: "#" }
              ]
            },

            {
              name: "Waris Khan",
              position: "Brakes",
              image: "IMG_20191130_010441.jpg",
              links: [
                { name: "insta", image: "insta.png", link: "#" },
                { name: "email", image: "email.png", link: "#" },
                { name: "linkedin", image: "linkedin.png", link: "#" }
              ]
            }
          ]
        },
        {
          departmentName: "Chassis",
          lead: {
            name: "Qazi Mohammad Taha",
            position: "chassis Lead",
            image: "IMG_20191125_201205.jpg",
            links: [
                { name: "insta", image: "insta.png", link: "#" },
                { name: "email", image: "email.png", link: "#" },
                { name: "linkedin", image: "linkedin.png", link: "#" }
              ]
          },
          members: [
            {
              name: "Tazeem Khan",
              position: "Team member",
              image: "IMG_20191125_201100.jpg",
              links: [
                { name: "insta", image: "insta.png", link: "#" },
                { name: "email", image: "email.png", link: "#" },
                { name: "linkedin", image: "linkedin.png", link: "#" }
              ]
            },
            {
              name: "Mohammad Ali Gauhar ",
              position: "Team member",
              image: "IMG_20191130_012057.jpg",
              links: [
                { name: "insta", image: "insta.png", link: "#" },
                { name: "email", image: "email.png", link: "#" },
                { name: "linkedin", image: "linkedin.png", link: "#" }
              ]
            },
            {
              name: "Varun Bharadwaz",
              position: "Team member",
              image: "IMG-20191103-WA0007.jpg",
              links: [
                { name: "insta", image: "insta.png", link: "#" },
                { name: "email", image: "email.png", link: "#" },
                { name: "linkedin", image: "linkedin.png", link: "#" }
              ]
            }
          ]
        },
        {
          departmentName: "Power Train",
          lead: {
            name: "Mohd Suboor Aziz",
            position: "Powertrain Lead",
            image: "IMG_20191125_200516.jpg",
            links: [
                { name: "insta", image: "insta.png", link: "#" },
                { name: "email", image: "email.png", link: "#" },
                { name: "linkedin", image: "linkedin.png", link: "#" }
              ]
          },
          members: [
            {
              name: "Muhammad Aatif Qazi",
              position: "Powertrain team member",
              image: "IMG_20191126_235547.jpg",
              links: [
                { name: "insta", image: "insta.png", link: "#" },
                { name: "email", image: "email.png", link: "#" },
                { name: "linkedin", image: "linkedin.png", link: "#" }
              ]
            },
            {
              name: "Swarnima Chaudhary",
              position: "Powertrain team member",
              image: "IMG_20191125_195909.jpg",
              links: [
                { name: "insta", image: "insta.png", link: "#" },
                { name: "email", image: "email.png", link: "#" },
                { name: "linkedin", image: "linkedin.png", link: "#" }
              ]
            }
          ]
        },
        {
          departmentName: "Electronics",
          lead: {
            name: "Mohit Mangal",
            position: "Electronics Lead",
            image: "IMG_20191125_200423.jpg",
            links: [
                { name: "insta", image: "insta.png", link: "#" },
                { name: "email", image: "email.png", link: "#" },
                { name: "linkedin", image: "linkedin.png", link: "#" }
              ]
          },
          members: [
            {
              name: "Hina Tomar",
              position: "Team Member",
              image: "IMG_20191125_200003.jpg",
              links: [
                { name: "insta", image: "insta.png", link: "#" },
                { name: "email", image: "email.png", link: "#" },
                { name: "linkedin", image: "linkedin.png", link: "#" }
              ]
            },
            {
              name: "Kunal Sharma",
              position: "Team Member",
              image: "IMG_20191125_200046.jpg",
              links: [
                { name: "insta", image: "insta.png", link: "#" },
                { name: "email", image: "email.png", link: "#" },
                { name: "linkedin", image: "linkedin.png", link: "#" }
              ]
            }
          ]
        },
        {
          departmentName: "Management",
          lead: {
            name: "Qazi Mohammad Taha",
            position: "Team Manager",
            image: "IMG_20191125_201205.jpg",
            links: [
                { name: "insta", image: "insta.png", link: "#" },
                { name: "email", image: "email.png", link: "#" },
                { name: "linkedin", image: "linkedin.png", link: "#" }
              ]
          },
          members: [
            {
              name: "Burhan Shamsi",
              position: "Team Member",
              image: "IMG_20191130_011434.jpg",
              links: [
                { name: "insta", image: "insta.png", link: "#" },
                { name: "email", image: "email.png", link: "#" },
                { name: "linkedin", image: "linkedin.png", link: "#" }
              ]
            },
            {
              name: "Shubham Jain",
              position: "Team Member",
              image: "shubham.jpg",
              links: [
                { name: "insta", image: "insta.png", link: "#" },
                { name: "email", image: "email.png", link: "#" },
                { name: "linkedin", image: "linkedin.png", link: "#" }
              ]
            },
            {
              name: "Meesum Raza Zaidi",
              position: "Team Member",
              image: "IMG-20191126-WA0019.jpg",
              links: [
                { name: "insta", image: "insta.png", link: "#" },
                { name: "email", image: "email.png", link: "#" },
                { name: "linkedin", image: "linkedin.png", link: "#" }
              ]
            },
            {
              name: "Arsalan Sartaj",
              position: "Team Member",
              image: "IMG_20191127_000107.jpg",
              links: [
                { name: "insta", image: "insta.png", link: "#" },
                { name: "email", image: "email.png", link: "#" },
                { name: "linkedin", image: "linkedin.png", link: "#" }
              ]
            },
            {
              name: "Vinayak Varshney",
              position: "Team Member",
              image: "IMG_20191126_235630.jpg",
              links: [
                { name: "insta", image: "insta.png", link: "#" },
                { name: "email", image: "email.png", link: "#" },
                { name: "linkedin", image: "linkedin.png", link: "#" }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
main {
  background-image: url("../assets/images/background/carback.jpg");
  background-size: 100vw 100vh;
  background-attachment: fixed;
  position: relative;
  padding-bottom: 50px;
  padding-top: 1px;
}
main > div {
  border: 5px white ridge;
  margin: 5% 2%;
  margin-top: 8rem;
}
#zfr5 {
  position: relative;
  top: -70px;
}
#top-member {
  margin-top: 0;
  padding-top: 0;
}
.firsttier {
  margin: 30px 0;
  padding: 30px;
  /* border: 2px solid green; */
}
.firsttier > div {
  width: fit-content;
  min-width: 250px;
  max-width: 300px;
  margin: auto;
  transition: transform 300ms;
}

.firsttier > div,
.second-tier > div {
  box-shadow: 0 0 20px 5px rgb(14, 14, 14), inset 0 -1px 0 0 #dadce0;
  border-radius: 12px;
  background: lightgray;
}
.member {
  margin-top: 10px;
  /* padding: 10px; */
}
.member > div {
  margin: 20px 0;
  text-align: center;
}
.member-image img {
  margin-top: 12px;
  width: 60%;
  border-radius: 70% 30% 50% 50% / 70% 70% 30% 30%;
  box-shadow: 0 0 12px 0px rgb(0, 0, 0);
}

.second-tier {
  margin: 30px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: space-around;
}
.second-tier > div {
  margin: 50px 15px;
  flex-basis: 40% !important;
  min-width: 230px;
  max-width: 260px;
  transition: transform 300ms;
}
.second-tier > div:hover,
.firsttier > div:hover {
  transform: scale(1.1);
}
.linksofmembers {
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
  background-color: rgb(138, 138, 138);
  margin: 0 0 -30px 0;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  padding: 12px 0;
}
.linksofmembers div a img:hover {
  transform: scale(1.1);
}
.linksofmembers div {
  padding-bottom: 5px;
  transition: border-bottom 300ms;
}
.linksofmembers div:hover {
  border-bottom: 2px solid #330926;
}

.linksofmembers div a img {
  height: 40px;
  border-radius: 50%;
  transition: transform 400ms;
  /* box-shadow: 0 0 5px 0 black; */
}
.perse-des,
.perse-des-small {
  color: rgb(18, 62, 98);
  font-family: Domile;
}
.perse-des h2,
.perse-des-small h2 {
  padding: 1%;
  font-weight: 700;
  border-bottom: 4px ridge black;
  color: #000;
}
.perse-des h2 {
  font-size: 1.8rem;
}
.perse-des h4 {
  font-size: 1.4rem;
}
.perse-des-small h2 {
  font-size: 1.4rem;
}
.perse-des-small h4 {
  font-size: 1.1rem;
}
.department-heading > div {
  padding: 1% 10%;
  color: white;
  font-weight: 800;
  font-family: Roboto;
  text-shadow: #000 4px 3px 3px;
  /* text-decoration: underline white; */
  margin: auto;
  width: 80%;
  border-radius: 12px;
  background-color: #09332a;
}
.department-heading-box {
  border-bottom: 2px ridge white;
  margin: auto;
  width: fit-content;
}

.department-heading-box h1 {
  text-align: center;
}
#zfr5 {
  margin-top: 30px;
}

#zfr5 > div {
  width: 95%;
  background: linear-gradient(45deg, #1f171c, rgb(87, 40, 40), #1f171c);
}
@media screen and (max-width: 991px) {
  main{
    background-image: url("../assets/images/background/carback.r.jpg");
  }
  #zfr5 {
    top: -60px;
  }
  .department-heading-box h1 {
    font-size: 1.5rem;
  }
  .perse-des h2 {
    font-size: 1.6rem;
  }
  .second-tier {
    margin: 8% 0;
  }
  .firsttier {
    margin: 4% 0;
  }
  .perse-des h4 {
    font-size: 1.2rem;
  }
}
</style>