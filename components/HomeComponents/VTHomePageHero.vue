<template>
  <div id="homepageHero" class="homepage-hero">
    <div class="carousel">
      <div class="swiper-wrapper" style="transition-duration: 0ms">
        <div class="swiper-slide intro slide1">
          <div class="inner-container">
            <div class="copy">
              <div class="intro-text">
                <div class="typed-element">
                  <client-only>
                    <typewriter :type-interval="100">
                      Hello, we're VTrounce.<br />
                      We're an independent digital agency that
                      <span>GROWS YOUR BUSINESS.</span> <br />
                      through strategy, development, and marketing.
                      <h1>VTrounce is what we create.</h1>
                    </typewriter>
                  </client-only>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="swiper-slide image-slide slide2"
          style="background-color: #cdf6f8"
        >
          <div class="inner-container">
            <div class="copy">
              <div class="stat">2,042%</div>
              <div class="sub">increase in users.</div>
              <div class="description">
                A rebrand and new conversion-focussed digital platform for
                Entire Travel Group.
                <a href="work/entire-travel-group/index.html">Learn more.</a>
              </div>
            </div>
            <div class="image">
              <img
                src="../../Images/Try/entire-travel-group_homepage_feature.webp"
                alt="Entire Travel Group homepage feature image"
              />
            </div>
          </div>
        </div>
        <div
          class="swiper-slide image-slide slide3"
          style="background-color: #fff"
        >
          <div class="inner-container">
            <div class="copy">
              <div class="stat">30-40%</div>
              <div class="sub">increase in revenue.</div>
              <div class="description">
                A rebrand and new digital experience with a best-of-breed
                booking workflow for G'day Parks.
                <a href="work/gday-parks/index.html">Learn more.</a>
              </div>
            </div>
            <div class="image">
              <img
                src="../../Images/Try/gday-parks_homepage_feature.webp"
                alt="G'day Parks homepage feature image"
              />
            </div>
          </div>
        </div>
        <div
          class="swiper-slide image-slide slide4"
          style="background-color: #eae3d6"
        >
          <div class="inner-container">
            <div class="copy">
              <div class="stat">531%</div>
              <div class="sub">increase in revenue.</div>
              <div class="description">
                Growth marketing strategy and campaign execution for HALO
                Alcoholic Kombucha.
                <a href="work/halo-alcoholic-kombucha/index.html"
                  >Learn more.</a
                >
              </div>
            </div>
            <div class="image">
              <img
                src="../../Images/Try/Homepage_Work-Features_v10.webp"
                alt="HALO Alcoholic Kombucha homepage feature image"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination">
        <span
          id="1"
          class="swiper-pagination-bullet swiper-pagination-bullet-active"
          tabindex="0"
          role="button"
          aria-label="Go to slide 1"
          @click="scrollLeft(1)"
          ><fa
            :icon="fas.faCircleDot"
            class="active"
            font-size="25"
            fill="none" />
          <fa
            :icon="fas.faCircleDot"
            class="inactive"
            font-size="16"
            fill="none" /></span
        ><span
          id="2"
          class="swiper-pagination-bullet"
          tabindex="0"
          role="button"
          aria-label="Go to slide 2"
          @click="scrollLeft(2)"
        >
          <fa
            :icon="fas.faCircleDot"
            class="active"
            font-size="25"
            fill="none" />
          <fa
            :icon="fas.faCircleDot"
            class="inactive"
            font-size="16"
            fill="none" /></span
        ><span
          id="3"
          class="swiper-pagination-bullet"
          tabindex="0"
          role="button"
          aria-label="Go to slide 3"
          @click="scrollLeft(3)"
          ><fa
            :icon="fas.faCircleDot"
            class="active"
            font-size="25"
            fill="none" />
          <fa
            :icon="fas.faCircleDot"
            class="inactive"
            font-size="16"
            fill="none" /></span
        ><span
          id="4"
          class="swiper-pagination-bullet"
          tabindex="0"
          role="button"
          aria-label="Go to slide 4"
          @click="scrollLeft(4)"
          ><fa
            :icon="fas.faCircleDot"
            class="active"
            font-size="25"
            fill="none"
          />
          <fa
            :icon="fas.faCircleDot"
            class="inactive"
            font-size="16"
            fill="none"
          />
        </span>
      </div>
    </div>
    <div class="mouse" @click="scrollToDescription()"></div>
  </div>
</template>
<script>
// font awesome icons ---------------------------

import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Typewriter from 'typewriter-vue'

export default {
  name: 'VTHomePageHero',
  components: {
    Typewriter,
  },
  computed: {
    fas() {
      return fas
    },
    fab() {
      return fab
    },
  },
  methods: {
    scrollToDescription() {
      const jumpMouse =
        document.querySelector('.customer-experience-bar').offsetTop -
        document.querySelector('.main').clientHeight
      window.scrollTo({
        top: jumpMouse,
        behavior: 'smooth',
      })
    },
    scrollLeft(id) {
      const swiperWrapper = document.querySelector('.swiper-wrapper')
      const wrapperDimensions = swiperWrapper.getBoundingClientRect()
      const wrapperWidth = wrapperDimensions.width
      const clickedBullet = document.querySelector(`#\\3${id}`)
      // if clicked slide is not active
      if (
        !clickedBullet.classList.contains('swiper-pagination-bullet-active')
      ) {
        // check what slide is active
        document
          .querySelectorAll('.swiper-pagination-bullet')
          .forEach(function (i) {
            if (i.classList.contains('swiper-pagination-bullet-active')) {
              // i is active

              // if select slide is greater than current slide
              if (id > i.id) {
                // width of the container multipled by selected slide whole subtracted by width of the container multipled by current slide
                swiperWrapper.scrollLeft +=
                  wrapperWidth * id - wrapperWidth * i.id
              }
              // if select slide is less than current slide
              else if (id < i.id) {
                // width of the container multipled by current slide whole subtracted by width of the container multipled by selected slide
                swiperWrapper.scrollLeft -=
                  wrapperWidth * i.id - wrapperWidth * id
              }
              document
                .querySelectorAll('.swiper-pagination-bullet')
                .forEach(function (item) {
                  // remove all active
                  item.classList.remove('swiper-pagination-bullet-active')
                })
              // add active to selected slide
              clickedBullet.classList.add('swiper-pagination-bullet-active')
            }
          })
      }
    },
  },
}
</script>
<style scoped>
.homepage-hero {
  height: 85vh;
  position: relative;
}

@media (min-width: 1025px) {
  .homepage-hero {
    height: 100vh;
  }
}

.typed-element {
  display: flex;
  align-items: center;
}

.typewriter *:last-child::after {
  display: none;
}

.homepage-hero h1 {
  font-size: 36px;
  font-style: 375px 1024px;
  margin-top: 5px;
  line-height: 1;
  margin-bottom: 0;
  display: block;
  font-weight: 700;
}

@media (min-width: 768px) {
  .homepage-hero h1 {
    font-size: 55px;
    margin-top: 10px;
  }
}

@media (min-width: 1024px) {
  .homepage-hero h1 {
    font-size: 65px;
  }
}

.homepage-hero .intro-text span {
  background-color: #dc002e;
  color: #fff;
  white-space: nowrap;
}

.homepage-hero .intro-text span::after,
.homepage-hero .intro-text span::before {
  display: none;
}

.homepage-hero .image {
  max-width: 200px;
  position: relative;
  z-index: 1;
  margin-top: -20px;
}

@media (min-width: 375px) {
  .homepage-hero .image {
    max-width: 288px;
  }
}

@media (min-width: 768px) {
  .homepage-hero .image {
    max-width: 370px;
  }
}

@media (min-width: 1024px) {
  .homepage-hero .image {
    max-width: 720px;
  }
}

.homepage-hero .image img {
  display: block;
  width: 100%;
}

.homepage-hero .sub {
  display: block;
  font-weight: 700;
  line-height: 1.1;
  font-size: 29px;
}

@media (min-width: 768px) {
  .homepage-hero .sub {
    font-size: 32px;
  }
}

@media (min-width: 1024px) {
  .homepage-hero .sub {
    font-size: 42px;
  }
}

.homepage-hero .stat {
  display: block;
  font-weight: 500;
  line-height: 1.1;
  font-size: 32px;
}

@media (min-width: 768px) {
  .homepage-hero .stat {
    font-size: 80px;
  }
}

.homepage-hero .description {
  display: block;
  font-size: 16px;
  margin-top: 10px;
  font-weight: 300;
}

@media (min-width: 768px) {
  .homepage-hero .description {
    font-size: 26px;
  }
}

.homepage-hero .intro-text {
  font-size: 22px;
  font-weight: 300;
  line-height: 1.4;
  height: 227px;
}

@media (min-width: 768px) {
  .homepage-hero .intro-text {
    font-size: 30px;
  }
}

@media (min-width: 1024px) {
  .homepage-hero .intro-text {
    font-size: 36px;
  }
}

.homepage-hero .copy {
  position: relative;
  z-index: 2;
  margin-left: auto;
  margin-right: auto;
  max-width: 300px;
  padding: 0;
}

@media (min-width: 768px) {
  .homepage-hero .copy {
    max-width: 500px;
    margin-left: 0;
  }
}

@media (min-width: 1024px) {
  .homepage-hero .copy {
    max-width: 440px;
  }
}

.homepage-hero .copy a {
  white-space: nowrap;
  transition: all 0.3s ease;
}

.homepage-hero .copy a::after,
.homepage-hero .copy a::before {
  display: none;
}

@media (min-width: 1024px) {
  .homepage-hero .copy a:hover {
    background-color: #dc002e;
    color: #fff;
  }
}

.carousel {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
  overflow: scroll;
  scroll-behavior: smooth;
}

.swiper-wrapper::-webkit-scrollbar {
  display: none;
}

.inner-container {
  max-width: 1240px;
  margin: -20px auto 0;
  padding: 0 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
}

@media (min-width: 1024px) {
  .inner-container {
    padding: 0 35px;
    margin-top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
}

.swiper-slide {
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  /* width: 1090px;
  opacity: 1; */

  /* transform: translate3d(0px, 0px, 0px);
  transition-duration: 0ms; */
}

.swiper-container-android .swiper-slide,
.swiper-wrapper {
  transform: translateZ(0);
}

.swiper-slide .copy {
  margin-top: -10px;
}

@media (min-width: 1024px) {
  .swiper-slide .copy {
    margin-top: 0;
  }
}

.swiper-slide.intro .inner-container {
  margin-top: 0;
}

.swiper-slide.intro .copy {
  max-width: 100%;
  width: 100%;
}

.mouse {
  width: 26px;
  height: 42px;
  border: 2px solid #000;
  border-radius: 24px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 20;
  opacity: 0.3;
  display: none;
}

@media (min-width: 1025px) {
  .mouse {
    display: block;
  }
}

.mouse::after {
  content: '';
  position: absolute;
  top: 5px;
  left: 50%;
  margin-left: -2px;
  background-color: #000;
  border-radius: 100%;
  width: 4px;
  height: 4px;
  opacity: 1;
  transform: translateY(0) scaleY(1) scaleX(1) translateZ(0);
  animation: scroll-mouse 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) -1s infinite;
}

@keyframes scroll-mouse {
  0%,
  20% {
    transform: translateY(0) scaleY(1) scaleX(1) translateZ(0);
  }

  10% {
    transform: translateY(0) scaleY(1.2) scaleX(1.2) translateZ(0);
    opacity: 1;
  }

  to {
    transform: translateY(20px) scaleY(2.5) scaleX(0.5) translateZ(0);
    opacity: 0.01;
  }
}

.swiper-pagination {
  text-align: left;
  position: absolute;
  transition: opacity 0.3s;
  transform: translateZ(0);
  z-index: 10;
  bottom: 30px;
  left: 30px;
  top: auto;
}

@media (min-width: 768px) {
  .swiper-pagination {
    margin-top: 330px;
    position: absolute;
    bottom: auto;
    text-align: center;
    left: 0;
    right: 0;
    top: 50%;
  }
}

@media (min-width: 1024px) {
  .swiper-pagination {
    padding: 0 40px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    max-width: 1240px;
    margin-top: 180px;
    text-align: left;
  }
}

.swiper-pagination-bullet {
  cursor: pointer;
  width: 25px;
  height: 25px;
  border-radius: 0;
  display: inline-block;
  background-color: transparent;
  position: relative;
  opacity: 1;
  margin: 0 2px;
}

.swiper-pagination-bullet svg {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  overflow: visible;
}

.swiper-pagination-bullet-active path {
  fill: #dc002e;
}

.swiper-pagination-bullet svg.inactive path {
  fill: rgb(185 185 185);
}

.swiper-pagination-bullet:hover .inactive path {
  fill: #dc002e;
}

.swiper-pagination-bullet .active {
  opacity: 0;
}

.swiper-pagination-bullet-active .active {
  opacity: 1;
}

.swiper-pagination-bullet-active .inactive {
  opacity: 0;
}
</style>