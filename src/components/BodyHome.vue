<template>
  <main>
    <div id="about" class="container-flex bg-black">
      <b-container class="d-flex justify-content-center align-items-center flex-column">
        <h2 class="m-header" data-aos="slide-left" data-aos-easing="ease-in-out">
          ABOUT
        </h2>
        <div
          class="m-header-bar"
          data-aos="slide-right"
          data-aos-easing="ease-in-out"
        ></div>
        <div class="row w-100 mb-4">
          <div v-for="(column, index) in aboutInfo" :key="index" class="row col-md-6 m-0">
            <div
              v-for="item in column.data"
              :key="item.title"
              class="col-sm-6 col-md-6 justify-content-center align-items-center mb-4"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-delay="100"
            >
              <div class="d-flex align-items-center flex-column justify-content-center">
                <div class="d-flex justify-content-center mb-2" style="font-size: 10rem">
                  <b-icon-gear-wide-connected
                    font-scale="0.5"
                    class="rounded bg-primary p-3"
                  ></b-icon-gear-wide-connected>
                </div>
                <h3 class="text-center">
                  <b>{{ item.title }}</b>
                </h3>
                <div class="text-center">
                  {{ item.info }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row w-100 justify-content-center align-items-center">
          <div class="col-md-4">
            <b-avatar
              src="https://placekitten.com/300/300"
              data-aos="fade-right"
              data-aos-delay="200"
              size="20rem"
            ></b-avatar>
          </div>
          <div
            class="col-md-8"
            data-aos="fade-left"
            data-aos-delay="200"
            style="color: #a0a0b4"
          >
            <p>
              I love writing code. I was very happy when i code my first page for my
              forum. Then i realize that programming can do more. I believe in the power
              of programming to transform and improve our lives. I work as
              <b>GIS specialist</b> for 6 months and work as full stack developer for 1
              year in VLAB J.S.C. I have experience working with <b>GIS data</b> and
              <b>map framework</b> like leaflet, flutter_map and arcgis. Even when i leave
              the office, i tend to continue writing code at the house. I love running,
              gym and reading book when i'm free. This is what keeps me up at night, a
              never ending thirst to create beautiful, powerful things and share them with
              the world.
            </p>
            <p>
              Skill/Interests:
              <b
                >JavaScript, Flutter, Dart, Vue, Angular, Arcgis, GIS, CSS, HTML, Git,
                Gitlab, PostgreSQL, nginx, python.</b
              >
            </p>
          </div>
        </div>
      </b-container>
    </div>
    <div id="projects" class="container-flex">
      <b-container class="d-flex justify-content-center align-items-center flex-column">
        <h2 class="m-header" data-aos="slide-left" data-aos-easing="ease-in-out">
          PROJECTS
        </h2>
        <div
          class="m-header-bar black"
          data-aos="slide-right"
          data-aos-easing="ease-in-out"
        ></div>
        <div
          class="mb-4"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="200"
        >
          <b-nav class="m-nav-filter" pills>
            <b-nav-item :active="currentTag == 'all'" @click="filter('all')"
              >All</b-nav-item
            >
            <b-nav-item :active="currentTag == 'web'" @click="filter('web')"
              >Website</b-nav-item
            >
            <b-nav-item :active="currentTag == 'mobile'" @click="filter('mobile')"
              >Mobile Apps</b-nav-item
            >
          </b-nav>
        </div>
        <transition-group
          name="list"
          tag="p"
          class="gallary d-flex row flex-wrap justify-content-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div
            v-for="item in filteredProjects"
            :key="item.id"
            class="container__card"
            style="position: relative"
          >
            <div
              class="card"
              v-bind:style="{
                background: 'url(' + item.urlImage + ') center center/cover',
              }"
            ></div>
            <div class="text">
              <div class="bold">{{ item.title }}</div>
              <span class="highlight">
                {{ item.subTitle }}
              </span>
            </div>
            <div class="gallary__button">LEARN MORE</div>
          </div>
        </transition-group>
      </b-container>
    </div>

    <div id="contact" class="container-flex bg-black pt-0">
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="75"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        class="svgcolor-light"
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
      </svg>
      <b-container
        class="d-flex justify-content-center align-items-center flex-column mt-5"
      >
        <h2 class="m-header" data-aos="slide-left" data-aos-easing="ease-in-out">
          CONTACT
        </h2>
        <div
          class="m-header-bar"
          data-aos="slide-right"
          data-aos-easing="ease-in-out"
        ></div>
        <h5 class="text-blue my-4" data-aos="fade-right">
          Have a question or want to work together?
        </h5>
        <form
          class="d-flex justify-content-center flex-column col-lg-6 col-md-10 align-items-center"
          id="contact-form"
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-delay="300"
        >
          <input placeholder="Name" type="text" name="name" required="" />
          <input placeholder="Enter email" type="email" name="email" required="" />
          <textarea placeholder="Your Message" type="text" name="message"></textarea>

          <button
            class="btn btn-w btn-white my-4"
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
            type="submit"
            id="submit"
          >
            SUBMIT
          </button>
        </form>
      </b-container>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      aboutInfo: [
        {
          data: [
            {
              title: 'Fast',
              info: 'Fast load times and lag free interaction, my highest priority.',
            },
            {
              title: 'Responsive',
              info: 'My layouts will work on any device, big or small.',
            },
          ],
        },
        {
          data: [
            {
              title: 'Intuitive',
              info: 'Strong preference for easy to use, intuitive UX/UI.',
            },
            {
              title: 'Dynamic',
              info: "Websites don't have to be static, I love making pages come to life.",
            },
          ],
        },
      ],
      projects: [
        {
          id: 1,
          urlImage: '../assets/projects/haichau/ND_1.jpg',
          title: 'Thông tin quy hoạch',
          subTitle: 'Laravel / PHP',
          active: false,
          tag: 'mobile',
        },
        {
          id: 2,
          urlImage: '../assets/projects/haichau/ND_1.jpg',
          title: 'Thông tin quy hoạch',
          subTitle: 'Laravel / PHP',
          active: false,

          tag: 'web',
        },
        {
          id: 3,
          urlImage: '../assets/projects/haichau/ND_1.jpg',
          title: 'Thông tin quy hoạch',
          subTitle: 'Laravel / PHP',
          active: false,

          tag: 'mobile',
        },
        {
          id: 4,
          urlImage: '../assets/projects/haichau/ND_1.jpg',
          title: 'Thông tin quy hoạch',
          subTitle: 'Laravel / PHP',
          active: false,

          tag: 'web',
        },
        {
          id: 5,
          urlImage: '../assets/projects/haichau/ND_1.jpg',
          title: 'Thông tin quy hoạch',
          subTitle: 'Laravel / PHP',
          active: false,
          tag: 'web',
        },
        {
          id: 6,
          urlImage: '../assets/projects/haichau/ND_1.jpg',
          title: 'Thông tin quy hoạch',
          subTitle: 'Laravel / PHP',
          active: false,
          tag: 'mobile',
        },
        {
          id: 7,
          urlImage: '../assets/projects/haichau/ND_1.jpg',
          title: 'Thông tin quy hoạch',
          subTitle: 'Laravel / PHP',
          active: false,

          tag: 'web',
        },
        {
          id: 8,
          urlImage: '../assets/projects/haichau/ND_1.jpg',
          title: 'Thông tin quy hoạch',
          subTitle: 'Laravel / PHP',
          active: false,
          tag: 'web',
        },
        {
          id: 9,
          urlImage: '../assets/projects/haichau/ND_1.jpg',
          title: 'Thông tin quy hoạch',
          subTitle: 'Laravel / PHP',
          active: false,
          tag: 'mobile',
        },
      ],
      currentTag: 'all',
    };
  },
  computed: {
    filteredProjects() {
      const filter = this.currentTag;
      if (filter === 'all') {
        return this.projects;
      }
      return this.projects.filter((item) => item.tag.toString() === filter);
    },
  },
  methods: {
    setup() {},
    filter(state) {
      this.currentTag = state;
    },
  },
};
</script>

<style lang="scss" scoped>
.container-flex {
  padding: 5rem 0;
  b {
    color: #fff;
  }
  &.bg-black {
    color: #fff;
    background-color: #252934 !important;
  }
}
.m-header {
  font-size: 30pt;
}
.m-header-bar {
  background: #fff;
  margin: 10px 0 40px 0;
  width: 110px;
  height: 4px;
  &.black {
    background: #252934 !important;
  }
}
.m-nav-filter {
  justify-content: center;
  .nav-item {
    min-width: 120px;
    text-align: center;
    margin: 0 2rem;
  }
}
.gallary {
  .container__card {
    .card {
      height: 300px;
      width: 380px;
      transition: 1s ease-in-out;
      border: none;
    }
    .text {
      position: absolute;
      left: 0;
      top: 0;
      text-align: center;
      width: 100%;
      opacity: 0;
      transition: 1s ease-in-out;
      line-height: 18pt;
    }

    .gallary__button {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      text-align: center;
      width: 100%;
      opacity: 0;
      line-height: 18pt;
      margin: 0 auto;
      padding: 7px 0;
      width: 170px;
      border: 2px solid red;
      transition: 1s ease-in-out;
    }

    .bold {
      font-size: 16pt;
      font-family: "Raleway-bold";
      font-weight: bold;
    }

    .highlight {
      color: red;
    }

    &:hover {
      .text {
        top: 20%;
        opacity: 1;
        transition: 0.5s ease-out;
      }
      .card {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
      }
      .gallary__button {
        bottom: 20%;
        opacity: 1;
        transition: 0.5s ease-out;
        cursor: pointer;
      }
    }
  }
}

.list-item {
  transition: all 1s;
}
.list-move {
  transition: all 1s ease-in;
}
.list-enter-active {
  opacity: 1;
  transform: scale(1);
  transition: all 1s ease-out;
}
.list-enter-to {
  opacity: 1;
  transition: opacity 1s ease-out;
}
.list-leave {
  opacity: 1;
  transition: all 1s ease-out;
}
.list-leave-active {
  opacity: 0;
  transition: all 1s ease-out;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transition: all 1s ease-in;
  transform: scale(0.1);
}

#contact-form {
  button {
    width: 10rem;
  }
  input,
  textarea {
    background: #1e242c;
    border: 0;
    box-sizing: border-box;
    color: #fff;
    display: block;
    font-size: 14pt;
    margin-bottom: 10px;
    outline: none;
    padding: 10px 15px;
    width: 100%;
  }
}
</style>
