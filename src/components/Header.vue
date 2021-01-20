<template>
  <header id="home" class="bg-image">
    <div class="m-container">
      <b-navbar fixed="top" toggleable="lg" type="dark" id="m_nav-bar" class="m-nav-bar">
        <b-navbar-brand id="m_brand" href="/">MAP STUDIO</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav align="left" class="ml-auto">
            <b-nav-item
              class="item-nav"
              href="#home"
              :active="navbar === 'home'"
              @click="scrollIntoView"
              >HOME</b-nav-item
            >
            <b-nav-item
              class="item-nav"
              href="#framework"
              :active="navbar === 'framework'"
              @click="scrollIntoView"
              >FRAMEWORK</b-nav-item
            >
            <b-nav-item
              class="item-nav"
              href="#about"
              :active="navbar === 'about'"
              @click="scrollIntoView"
              >ABOUT</b-nav-item
            >
            <b-nav-item
              class="item-nav"
              href="#projects"
              :active="navbar === 'projects'"
              @click="scrollIntoView"
              >PROJECTS</b-nav-item
            >
            <b-nav-item
              class="item-nav"
              href="#contact"
              :active="navbar === 'contact'"
              @click="scrollIntoView"
              >CONTACT</b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <div class="hr-hero">
        <h1 class="text-white" data-aos="slide-left" data-aos-easing="ease-in-out">
          Hello, <span class="text-red">I'm An</span>
        </h1>
        <h1 class="text-white" data-aos="slide-right" data-aos-easing="ease-in-out">
          I'm a web and mobile developer.
        </h1>
        <div class="m-btn-wrapper">
          <a
            href="#contact"
            class="btn btn-w btn-blue mb-2 mr-sm-5"
            data-aos="zoom-in"
            data-aos-easing="ease-in"
            @click="scrollIntoView"
            >Contact with me</a
          >
          <a
            href="#"
            class="btn btn-w btn-white mb-2"
            data-aos="zoom-in"
            data-aos-easing="ease-in"
            >View my work</a
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      navbar: 'home',
    };
  },
  mounted() {
    this.scrollSpy();
  },
  methods: {
    scrollSpy() {
      $(document).scroll(() => {
        const scrollPos = $(window).scrollTop();
        const navItems = document.getElementsByClassName('item-nav');
        const mNavbar = document.getElementById('m_nav-bar');

        if (scrollPos > mNavbar.offsetHeight) {
          console.log('scroll roi ne');
          mNavbar.classList.add('scrolled');
        } else {
          mNavbar.classList.remove('scrolled');
        }

        navItems.forEach((item) => {
          const href = item.firstChild.getAttribute('href');
          const el = href ? document.querySelector(href) : null;
          if (el) {
            if (
              el.offsetTop - mNavbar.offsetHeight <= scrollPos
              && scrollPos < el.offsetTop + el.offsetHeight - mNavbar.offsetHeight
            ) {
              this.navbar = el.id;
              console.log('tao ne', el);
            }
          }
        });
      });
    },
    scrollIntoView(event) {
      event.preventDefault();
      const href = event.target.getAttribute('href');
      const el = href ? document.querySelector(href) : null;
      const mNavbar = document.getElementById('m_nav-bar');

      if (el) {
        window.scroll({
          top: el.offsetTop - mNavbar.offsetHeight,
          behavior: 'smooth',
        });

        setTimeout(() => {
          window.scroll({
            top: el.offsetTop - mNavbar.offsetHeight + 3,
            behavior: 'smooth',
          });
        }, 600);
      } else {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    },
  },
};
</script>

<style lang="scss">
header {
  position: relative;
  z-index: 2;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100vh;
  min-height: 600px;
  padding-right: 40px;
  padding-bottom: 90px;
  padding-left: 40px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;

  &.bg-image {
    background-size: auto, cover;
    background-repeat: repeat, no-repeat;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
      url("../assets/bg-image-map.webp");
  }

  .hr-hero {
    position: relative;
    display: flex;
    // padding-top: 80px;
    // padding-bottom: 30px;
    -webkit-box-orient: vertical;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    -webkit-box-direction: normal;
    align-items: center;
    height: 100%;

    h1 {
      line-height: 1.15em;
    }
  }

  .m-container {
    max-width: 1200px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .m-nav-bar {
    background-color: transparent;
    // margin-left: auto;
    // margin-right: auto;
    // max-width: 1200px;
    padding: 3rem 10%;
    // padding-left: 10%;
    // padding-right: 10%;
    font-size: 1rem;
    #m_brand {
      font-size: 1.5rem;
    }
    transition: all 0.5s ease-in-out;

    .nav-link:focus,
    .nav-link:hover {
      color: red;
    }

    &.scrolled {
      background-color: rgba(35, 35, 35, 0.9) !important;
      // padding-top: 10% !important;
      // padding-bottom: 10% !important;
      padding: 0.5rem 10%;
      transition: all 0.5s ease-in-out;
      font-size: 1rem;
      border-bottom: 3px solid #007bff;

      #m_brand {
        font-size: 1.5rem;
      }
    }
    a {
      color: #fff;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 0.15em;

      display: inline-block;
      padding: 15px 20px;
      position: relative;
    }
    a:after {
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: "";
      display: block;
      height: 2px;
      left: 50%;
      position: absolute;
      background: #fff;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }
    a:hover:after {
      width: 100%;
      left: 0;
    }
  }

  .m-btn-wrapper {
    display: flex;
    margin-top: 32px;
    margin-right: auto;
    margin-left: auto;
    font-size: 18px;
    line-height: 18px;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    .btn {
      min-width: 200px;
    }
    .btn-w {
      border-radius: 50px;
      margin-right: 0;
      margin-left: 0;
      padding: 14px 36px;
    }
  }
}
</style>
