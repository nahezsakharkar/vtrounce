<template>
  <div
    id="main-container"
    class="main-container"
    :class="[
      VTMenuVisibility ? 'show-menu' : VTHeaderTransparency ? '' : 'scrolled',
    ]"
  >
    <VTHeader @toggle-VTMenu="toggleVTMenu" />
    <div class="main-menu">
      <div class="backdrop"></div>
      <div class="header">
        <div class="logo">
          <nuxt-link to="/">
            <VTLogo />
          </nuxt-link>
        </div>
        <button type="button" class="close-button" @click="toggleVTMenu()">
          <fa :icon="fas.faXmarkCircle" />
        </button>
      </div>
      <div class="menu-container">
        <div class="menu">
          <div
            v-for="item in MenuItems"
            :key="item.id"
            class="menu-item"
            @click="toggleVTMenu()"
          >
            <nuxt-link :to="item.nuxtLink"
              ><span>{{ item.name }}</span></nuxt-link
            >
          </div>
        </div>
        <div class="footer">
          <nuxt-link to="/contact-us"
            ><a class="button-primary large" @click="toggleVTMenu()"
              >Make an enquiry</a
            ></nuxt-link
          >

          <span
            >or call
            <a href="tel:+919773981585" class="phone">+91 9773981585</a> /<a
              href="tel:+919769740453"
              class="phone"
              >+91 9769740453</a
            >.</span
          >
        </div>
      </div>
    </div>
    <nuxt />
    <VTFooter />
  </div>
</template>

<script>
// font awesome icons ---------------------------

import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// AOS----------
import AOS from 'aos'
import 'aos/dist/aos.css'
// -------------

import VTHeader from '../components/VTHeader.vue'
import VTLogo from '../components/HeaderComponents/VTLogo.vue'
import VTFooter from '../components/VTFooter.vue'

export default {
  name: 'IndexPage',
  components: {
    VTHeader,
    VTLogo,
    VTFooter,
  },
  data() {
    return {
      VTMenuVisibility: false,
      VTHeaderTransparency: true,
      MenuItems: [
        { name: 'Home', nuxtLink: '/' },
        { name: 'Work', nuxtLink: '/work' },
        { name: 'Services', nuxtLink: '/services' },
        { name: 'About', nuxtLink: '/about' },
        { name: 'Contact', nuxtLink: '/contact-us' },
      ],
    }
  },
  computed: {
    fas() {
      return fas
    },
    fab() {
      return fab
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted() {
    AOS.init()
  },
  methods: {
    toggleVTMenu() {
      this.VTMenuVisibility = !this.VTMenuVisibility
    },
    handleScroll() {
      const scrollTop =
        window.pageYOffset ||
        (document.documentElement || document.body.parentNode || document.body)
          .scrollTop
      this.VTHeaderTransparency = !(scrollTop > 100)
    },
  },
}
</script>

<style>
*,
::after,
::before {
  box-sizing: border-box;
  margin: 0;
  outline: 0;
}

html,
body {
  font-family: 'Century Gothic', Roboto, sans-serif;
  padding: 0;
  margin: 0;
  background-color: #fff;
  font-size: 16px;
  line-height: 1.7;
  color: #000;
  font-weight: 300;
}

header.transparent .main,
header.transparent {
  background-color: transparent;
}

.main-menu {
  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  visibility: hidden;
  transition-delay: 0.8s;
}

.main-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  overflow: hidden;
}

.inner-container {
  flex-grow: 1;
}

a {
  text-decoration: none;
}

p {
  margin-bottom: 15px;
}

p a {
  transition: all 0.3s ease;
}

p a::after,
p a::before {
  display: none;
}

@media (min-width: 1024px) {
  p a:hover {
    background-color: #dc002e;
    color: #fff;
  }
}

.close-button {
  border: none;
  background-color: transparent;
  font-size: 32px;
  padding: 0;
  line-height: 1;
  cursor: pointer;
  flex-shrink: 0;
  margin-left: 20px;
  color: #ea1e2b;
  transition: color 0.3s ease;
}

@media (min-width: 1025px) {
  .close-button:hover {
    color: #1051a3;
  }
}

.header {
  height: 70px;
  padding: 0 20px;
  transition: opacity 0.3s ease;
  transition-delay: 0.5s;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

@media (min-width: 375px) {
  .header {
    height: 100px;
  }
}

@media (min-width: 768px) {
  .header {
    padding: 0 40px;
  }
}

.backdrop {
  background-color: rgb(255 255 255 / 90%);
  bottom: 0;
  transition: opacity 0.2s ease;
  transition-delay: 0.5s;
}

.backdrop,
.header {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  opacity: 1;
}

.menu-container {
  position: absolute;
  left: 0;
  right: 0;
  top: 70px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (min-width: 375px) {
  .menu-container {
    top: 100px;
  }
}

.menu-container .menu-item {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.menu-container .menu-item:first-child {
  transition-delay: 0.1s;
}

.menu-container .menu-item:nth-child(2) {
  transition-delay: 0.15s;
}

.menu-container .menu-item:nth-child(3) {
  transition-delay: 0.2s;
}

.menu-container .menu-item:nth-child(4) {
  transition-delay: 0.25s;
}

.menu-container .menu-item:nth-child(5) {
  transition-delay: 0.3s;
}

.menu-container .menu-item:nth-child(6) {
  transition-delay: 0.35s;
}

.menu-container .menu-item:nth-child(7) {
  transition-delay: 0.4s;
}

.footer a {
  text-decoration: none;
}

.footer span {
  white-space: nowrap;
  margin-top: 20px;
  display: block;
}

.footer {
  position: relative;
  height: 180px;
  margin-top: 30px;
  opacity: 0;
  transition: opacity 0.3s ease;
  transition-delay: 0.5s;
  font-size: 20px;
  font-weight: 700;
  color: #ea1e2b;
  padding: 40px 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.phone {
  color: #ea1e2b;
  transition: color 0.3s ease;
}

@media (min-width: 1025px) {
  .phone:hover {
    color: #1051a3;
  }
}

.menu-container .menu-item a {
  cursor: pointer;
  display: block;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  color: #ea1e2b;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
  transition-delay: 0.05s;
}

@media (min-width: 375px) {
  .menu-container .menu-item a {
    font-size: 3.5vh;
  }
}

@media (min-width: 768px) {
  .menu-container .menu-item a {
    font-size: 4.5vh;
  }
}

.menu-container .menu-item a span {
  position: relative;
  z-index: 2;
}

.menu-container .menu-item a::after,
.menu-container .menu-item a::before {
  content: '';
  display: block;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  background-color: #ea1e2b;
  transition: height 0.3s ease, opacity 0.3s ease;
  height: 0;
  opacity: 0;
  bottom: auto;
  width: 100%;
  margin: 0;
}

.menu-container .menu-item a::before {
  top: 50%;
}

.menu-container .menu-item a::after {
  bottom: 50%;
}

@media (min-width: 1025px) {
  .menu-container .menu-item a:hover {
    color: #ea1e2b;
  }

  .menu-container .menu-item a:hover::after,
  .menu-container .menu-item a:hover::before {
    opacity: 0.2;
    height: 50%;
  }
}

.menu-container .menu-item a.nuxt-link-exact-active {
  color: #fff;
}

.menu-container .menu-item a.nuxt-link-exact-active::after,
.menu-container .menu-item a.nuxt-link-exact-active::before {
  opacity: 1;
  height: 50%;
}

#main-container.show-menu .main-menu {
  opacity: 1;
  visibility: visible;
  transition-delay: 0s;
}

#main-container.show-menu header .main {
  opacity: 0;
  transition-delay: 0s;
}

#main-container.scrolled header .main {
  background-color: rgb(255 255 255 / 90%) !important;
}

#main-container.show-menu .main-menu .backdrop {
  opacity: 1;
  transition-delay: 0s;
}

#main-container.show-menu .main-menu .footer,
#main-container.show-menu .main-menu .header {
  opacity: 1;
  transition-delay: 0s;
}

#main-container.show-menu .main-menu .menu-item {
  opacity: 1;
  transform: none;
}

.footer::before {
  content: '';
  display: block;
  height: 3px;
  background-color: #ea1e2b;
  width: 60px;
  top: 0;
  position: absolute;
  left: 50%;
  margin-left: -30px;
}

@media (min-width: 768px) {
  .footer::before {
    height: 6px;
    width: 100px;
    margin-left: -50px;
  }
}

@media (min-width: 768px) {
  .footer {
    padding: 40px 40px 0;
    font-size: 26px;
    height: 140px;
    display: flex;
    flex-flow: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
}

@media (min-width: 768px) {
  .footer span {
    margin-top: 0;
    margin-left: 20px;
  }
}

.header-spacer {
  height: 70px;
}

@media (min-width: 375px) {
  .header-spacer {
    height: 100px;
  }
}

.arrow {
  height: 0;
  width: 0;
  border-top: 20px solid #dc002e;
  border-right: 20px solid transparent;
  border-left: 20px solid transparent;
  position: absolute;
  top: -1px;
  left: 50%;
  margin-left: -20px;
  z-index: 3;
}

.service-icons {
  padding: 40px 0;
  text-align: center;
  position: relative;
  background-color: #ededed;
}

@media (min-width: 768px) {
  .service-icons {
    padding: 80px 0;
  }
}

.h1,
h1 {
  font-size: 40px;
  font-size: calc(40px + 40 * (100vw - 375px) / 649);
  font-weight: 500;
  line-height: 1.1;
}

@media screen and (min-width: 1024px) {
  .h1,
  h1 {
    font-size: 80px;
  }
}

@media screen and (max-width: 375px) {
  .h1,
  h1 {
    font-size: 40px;
  }
}

.h2,
h2 {
  font-size: 30px;
  font-size: calc(30px + 6 * (100vw - 375px) / 649);
  font-weight: 500;
  line-height: 1.3;
}

@media screen and (min-width: 1024px) {
  .h2,
  h2 {
    font-size: 36px;
  }
}

@media screen and (max-width: 375px) {
  .h2,
  h2 {
    font-size: 30px;
  }
}

.h3,
h3 {
  font-size: 20px;
  font-size: calc(20px + 6 * (100vw - 375px) / 649);
  font-weight: 500;
  line-height: 1.3;
}

@media screen and (min-width: 1024px) {
  .h3,
  h3 {
    font-size: 26px;
  }
}

@media screen and (max-width: 375px) {
  .h3,
  h3 {
    font-size: 20px;
  }
}

.h4,
h4 {
  font-size: 18px;
  font-size: calc(18px + 2 * (100vw - 375px) / 649);
  line-height: 1.3;
  font-weight: 400;
}

@media screen and (min-width: 1024px) {
  .h4,
  h4 {
    font-size: 20px;
  }
}

@media screen and (max-width: 375px) {
  .h4,
  h4 {
    font-size: 18px;
  }
}

.h5,
h5 {
  font-size: 16px;
  font-size: calc(16px + 2 * (100vw - 375px) / 649);
  line-height: 1.3;
  font-weight: 400;
}

@media screen and (min-width: 1024px) {
  .h5,
  h5 {
    font-size: 18px;
  }
}

@media screen and (max-width: 375px) {
  .h5,
  h5 {
    font-size: 16px;
  }
}

h1,
h2,
h3,
h4,
h5 {
  margin-top: 1em;
  margin-bottom: 0.3em;
}

h1:first-child,
h2:first-child,
h3:first-child,
h4:first-child,
h5:first-child {
  margin-top: 0;
}

h1:last-child,
h2:last-child,
h3:last-child,
h4:last-child,
h5:last-child {
  margin-bottom: 0;
}

.cta-bar {
  padding: 40px 20px;
  background-color: #dc002e;
  color: #fff;
  text-align: center;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (min-width: 768px) {
  .cta-bar {
    padding: 70px 20px;
  }
}

.cta {
  margin-top: 15px;
  position: relative;
}

.fs-intro-small {
  font-size: 20px;
  font-size: calc(20px + 6 * (100vw - 375px) / 649);
  line-height: 1.5;
}

@media screen and (min-width: 1024px) {
  .fs-intro-small {
    font-size: 26px;
  }
}

@media screen and (max-width: 375px) {
  .fs-intro-small {
    font-size: 20px;
  }
}

.fs-intro-large {
  font-size: 24px;
  font-size: calc(24px + 6 * (100vw - 375px) / 649);
  line-height: 1.6;
}

@media screen and (min-width: 1024px) {
  .fs-intro-large {
    font-size: 30px;
  }
}

@media screen and (max-width: 375px) {
  .fs-intro-large {
    font-size: 24px;
  }
}

.wrapper {
  max-width: 1180px;
}

.wrap-780,
.wrapper {
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
}

.wrap-780 {
  max-width: 780px;
}

.page-heading {
  padding: 50px 20px 40px;
  text-align: center;
}

@media (min-width: 768px) {
  .page-heading {
    padding: 100px 20px 80px;
  }
}

.swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
}

.button-grey-outline {
  border: none;
  background-color: #fff;
  box-shadow: inset 0 0 0 2px #ededed;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  transition: color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  border-radius: 5px;
  padding: 17px 30px;
  font-weight: 500;
  text-decoration: none;
  color: #000;
  display: inline-flex !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button-grey-outline::after,
.button-grey-outline::before {
  display: none;
}

@media (min-width: 1025px) {
  .button-grey-outline:hover {
    color: #fff;
    background-color: #dc002e;
    box-shadow: inset 0 0 0 2px #dc002e;
  }
}

.button-white-outline {
  border: none;
  background-color: transparent;
  box-shadow: inset 0 0 0 2px #fff;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  transition: color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  border-radius: 5px;
  padding: 17px 30px;
  font-weight: 500;
  text-decoration: none;
  color: #000;
  display: inline-flex !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button-white-outline::after,
.button-white-outline::before {
  display: none;
}

@media (min-width: 1025px) {
  .button-white-outline:hover {
    color: #fff;
    background-color: #dc002e;
    box-shadow: inset 0 0 0 2px #dc002e;
  }
}

.button-primary {
  border: none;
  background-color: #dc002e;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  transition: color 0.3s ease, background-color 0.3s ease;
  border-radius: 5px;
  padding: 17px 30px;
  font-weight: 500;
  text-decoration: none;
  color: #fff;
  display: inline-flex !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button-primary::after,
.button-primary::before {
  display: none;
}

@media (min-width: 1025px) {
  .button-primary:hover {
    color: #fff;
    background-color: #1051a3;
  }
}

.button-primary.large {
  padding-top: 18px;
  padding-bottom: 18px;
  font-weight: 700;
  font-size: 18px;
  font-size: calc(18px + 6 * (100vw - 375px) / 649);
}

@media screen and (min-width: 1024px) {
  .button-primary.large {
    font-size: 24px;
  }
}

@media screen and (max-width: 375px) {
  .button-primary.large {
    font-size: 18px;
  }
}

.button-primary.thin {
  font-weight: 300;
}

.button-white,
b {
  font-weight: 500;
}

.button-white {
  border: none;
  background-color: #fff;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  transition: color 0.3s ease, background-color 0.3s ease;
  border-radius: 5px;
  padding: 17px 30px;
  text-decoration: none;
  color: #dc002e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button-white::after,
.button-white::before {
  display: none;
}

@media (min-width: 1025px) {
  .button-white:hover {
    color: #fff;
    background-color: #1051a3;
  }
}

.button-white.large {
  padding-top: 18px;
  padding-bottom: 18px;
  font-weight: 700;
  font-size: 18px;
  font-size: calc(18px + 6 * (100vw - 375px) / 649);
}

@media screen and (min-width: 1024px) {
  .button-white.large {
    font-size: 24px;
  }
}

@media screen and (max-width: 375px) {
  .button-white.large {
    font-size: 18px;
  }
}

.button-grey {
  border: none;
  background-color: #333;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  transition: color 0.3s ease, background-color 0.3s ease;
  border-radius: 5px;
  padding: 17px 30px;
  font-weight: 500;
  text-decoration: none;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button-grey::after,
.button-grey::before {
  display: none;
}

@media (min-width: 1025px) {
  .button-grey:hover {
    color: #fff;
    background-color: #000;
  }
}

.button-grey.large {
  padding-top: 18px;
  padding-bottom: 18px;
  font-weight: 700;
  font-size: 18px;
  font-size: calc(18px + 6 * (100vw - 375px) / 649);
}

@media screen and (min-width: 1024px) {
  .button-grey.large {
    font-size: 24px;
  }
}

@media screen and (max-width: 375px) {
  .button-grey.large {
    font-size: 18px;
  }
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-thumb {
  background: #ea1e2b;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: #1051a3;
}
</style>
