<template>
  <div class="work-carousel">
    <div class="wrapper">
      <h2>What we're doing.</h2>
    </div>
    <div class="carousel">
      <div class="swiper-wrapper">
        <div class="swiper-slide offset-swiper-slide"></div>
        <div class="swiper-slide">
          <a href="work/gday-parks/index.html" class="work-tile">
            <div class="background">
              <img
                src="../../Images/Try/gday-parks_master-thumbnail-image_devotion.webp"
                alt="G'day Parks | birds eye view of a beachside G'day Parks location | Devotion"
              />
              <div class="logo">
                <img src="../../Images/Try/g-day-parks_logo_white.webp" />
              </div>
            </div>
            <div class="foreground">
              <div class="brand-colour" style="background-color: #207ec5"></div>
              <div class="top">
                <div class="stat">30-40% increase in revenue.</div>
              </div>
              <div class="bottom">
                <div class="type">Rebrand and Digital Platform</div>
                <div class="client">G'day Parks.</div>
              </div>
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="work/canwell-australia/index.html" class="work-tile">
            <div class="background">
              <img
                src="../../Images/Try/gday-parks_master-thumbnail-image_devotion.webp"
                alt="A man reading the label on a CBD oil bottle | Canwell Australia | Devotion"
              />
              <div class="logo">
                <img src="../../Images/Try/g-day-parks_logo_white.webp" />
              </div>
            </div>
            <div class="foreground">
              <div class="brand-colour" style="background-color: #17a824"></div>
              <div class="top">
                <div class="stat">
                  Rapid ideation and development timeframes.
                </div>
              </div>
              <div class="bottom">
                <div class="type">Virtual consultation platform</div>
                <div class="client">Canwell Australia.</div>
              </div>
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="work/halo-alcoholic-kombucha/index.html" class="work-tile">
            <div class="background">
              <img
                src="../../Images/Try/gday-parks_master-thumbnail-image_devotion.webp"
                alt="Halo Alcoholic Kombucha | Kombucha pouring out of a can | Devotion"
              />
              <div class="logo">
                <img src="../../Images/Try/g-day-parks_logo_white.webp" />
              </div>
            </div>
            <div class="foreground">
              <div class="brand-colour" style="background-color: #1f3864"></div>
              <div class="top">
                <div class="stat">531% increase in revenue.</div>
              </div>
              <div class="bottom">
                <div class="type">
                  Digital marketing and eCommerce development
                </div>
                <div class="client">HALO Alcoholic Kombucha.</div>
              </div>
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="work/fleetcare/index.html" class="work-tile">
            <div class="background">
              <img
                src="../../Images/Try/gday-parks_master-thumbnail-image_devotion.webp"
                alt="Fleetcare | a new car lot | Devotion"
              />
              <div class="logo">
                <img src="../../Images/Try/g-day-parks_logo_white.webp" />
              </div>
            </div>
            <div class="foreground">
              <div class="brand-colour" style="background-color: #00b5d6"></div>
              <div class="top">
                <div class="stat">101% increase in pages per session.</div>
              </div>
              <div class="bottom">
                <div class="type">Lead generation and marketing platform</div>
                <div class="client">Fleetcare.</div>
              </div>
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="work/entire-travel-group/index.html" class="work-tile">
            <div class="background">
              <img
                src="../../Images/Try/gday-parks_master-thumbnail-image_devotion.webp"
                alt="Entire Travel Group | fishermen in the ocean | Devotion"
              />
              <div class="logo">
                <img src="../../Images/Try/g-day-parks_logo_white.webp" />
              </div>
            </div>
            <div class="foreground">
              <div class="brand-colour" style="background-color: #ca568e"></div>
              <div class="top">
                <div class="stat">2,042% increase in users.</div>
              </div>
              <div class="bottom">
                <div class="type">B2B and B2C digital platform</div>
                <div class="client">Entire Travel Group.</div>
              </div>
            </div>
          </a>
        </div>
        <div class="swiper-slide offset-swiper-slide"></div>
      </div>
      <div class="wrapper">
        <div class="swiper-scrollbar">
          <div class="swiper-scrollbar-drag"></div>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="cta">
        <nuxt-link to="/work" class="button-grey-outline"
          >View more in Work</nuxt-link
        >
      </div>
    </div>
  </div>
</template>
<script>
// import Vue from 'vue'
// import { Navigation, Pagination, Scrollbar} from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue'
// import 'swiper/swiper-bundle.css'
// Vue.use(Swiper, SwiperSlide)

export default {
  name: 'VTWork',
  // components: {
  //   Swiper,
  //   SwiperSlide,
  // },
  // setup() {
  //   const onSwiper = (swiper) => {
  //     console.log(swiper)
  //   }
  //   const onSlideChange = () => {
  //     console.log('slide change')
  //   }
  //   return {
  //     onSwiper,
  //     onSlideChange,
  //     modules: [Navigation, Pagination, Scrollbar],
  //   }
  // },
}
</script>
<style scoped>
.work-carousel {
  margin-top: 70px;
}

.cta {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2 {
  text-align: center;
}

.carousel {
  margin-top: 30px;
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
  overflow-x: scroll;
  scroll-behavior: smooth;
}

.swiper-wrapper::-webkit-scrollbar {
  display: none;
}

.offset-swiper-slide {
  max-width: 143.5px !important;
}

.swiper-scrollbar {
  margin-left: -20px;
  margin-right: -20px;
  border-radius: 10px;
  position: relative;
  touch-action: none;
  background: rgb(0 0 0 / 10%);
  height: 25px;
  background-color: transparent !important;
  margin-top: 10px;
}

.swiper-scrollbar::before {
  display: block;
  content: '';
  left: 0;
  right: 0;
  top: 10px;
  bottom: 10px;
  border-radius: 3px;
  background-color: #0000001a;
  position: absolute;
}

.swiper-scrollbar-drag {
  height: 100%;
  width: 100%;
  position: relative;
  background: rgba(0 0 0 /50%);
  left: 0;
  top: 0;
  background-color: transparent !important;
  border-radius: 0 !important;
}

.swiper-scrollbar-drag::before {
  display: block;
  content: '';
  left: 0;
  right: 0;
  top: 10px;
  bottom: 10px;
  border-radius: 3px;
  background-color: #dc002e;
  position: absolute;
}

.swiper-slide {
  width: 80%;
}

@media (min-width: 400px) {
  .swiper-slide {
    width: 70%;
  }
}

@media (min-width: 500px) {
  .swiper-slide {
    width: 60%;
  }
}

@media (min-width: 600px) {
  .swiper-slide {
    width: 50%;
  }
}

@media (min-width: 768px) {
  .swiper-slide {
    width: 45%;
    max-width: 480px;
  }
}

@media (max-width: 1024px) {
  .work-tile .foreground {
    opacity: 1;
    transition-delay: 0s;
  }

  .work-tile .brand-colour {
    transform: none;
    transition-delay: 0s;
  }

  .work-tile .stat {
    opacity: 1;
    transform: none;
    transition-delay: 0.2s;
  }

  .work-tile .top::after {
    opacity: 1;
    transform: none;
    transition-delay: 0.3s;
  }

  .work-tile .type {
    opacity: 1;
    transform: none;
    transition-delay: 0.4s;
  }

  .work-tile .client {
    opacity: 1;
    transform: none;
    transition-delay: 0.5s;
  }
}

@media (min-width: 1025px) {
  .work-tile:hover .foreground {
    opacity: 1;
    transition-delay: 0s;
  }

  .work-tile:hover .brand-colour {
    transform: none;
    transition-delay: 0s;
  }

  .work-tile:hover .stat {
    opacity: 1;
    transform: none;
    transition-delay: 0.2s;
  }

  .work-tile:hover .top::after {
    opacity: 1;
    transform: none;
    transition-delay: 0.3s;
  }

  .work-tile:hover .type {
    opacity: 1;
    transform: none;
    transition-delay: 0.4s;
  }

  .work-tile:hover .client {
    opacity: 1;
    transform: none;
    transition-delay: 0.5s;
  }
}

.background {
  right: 0;
  bottom: 0;
  z-index: 1;
  overflow: hidden;
}

.background img,
.background {
  position: absolute;
  left: 0;
  top: 0;
}

.background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.background .logo {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 40%;
  transform: translateX(-50%);
}

.background .logo img {
  object-fit: contain;
}

.foreground {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  z-index: 2;
  color: #fff;
  opacity: 0;
  overflow: hidden;
  transition-delay: 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (min-width: 768px) {
  .foreground {
    padding: 30px;
  }
}

@media (min-width: 1024px) {
  .foreground {
    padding: 40px;
  }
}

.brand-colour {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.9;
  transform: translateX(-100%);
  transition: transform 0.2s ease;
  transition-delay: 0.2s;
}

.bottom,
.top {
  position: relative;
  z-index: 2;
}

.type {
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 500;
}

.client,
.type {
  opacity: 0;
  transform: translateX(30px);
  transition: transform 0.3s ease, opacity 0.3s ease;
  transition-delay: 0s;
}

.client {
  font-size: 20px;
  font-size: calc(20px + 18 * (100vw - 375px) / 649);
  font-weight: 700;
  line-height: 1;
}

@media screen and (min-width: 1024px) {
  .client {
    font-size: 38px;
  }
}

@media screen and (max-width: 375px) {
  .client {
    font-size: 20px;
  }
}

.stat {
  font-size: 24px;
  font-size: calc(24px + 12 * (100vw - 375px) / 649);
  font-weight: 700;
  line-height: 1.3;
  opacity: 0;
  transform: translateX(30px);
  transition: transform 0.3s ease, opacity 0.3s ease;
  transition-delay: 0s;
}

@media screen and (min-width: 1024px) {
  .stat {
    font-size: 36px;
  }
}

@media screen and (max-width: 375px) {
  .stat {
    font-size: 24px;
  }
}

.top::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background-color: #fff;
  margin-top: 10px;
  opacity: 0;
  transform: translateX(30px);
  transition: transform 0.3s ease, opacity 0.3s ease;
  transition-delay: 0s;
}

@media (min-width: 768px) {
  .top::after {
    width: 90px;
    height: 5px;
  }
}

@media (min-width: 1024px) {
  .top::after {
    margin-top: 20px;
  }
}

.work-tile {
  display: block;
  height: 220px;
}

.work-tile::after,
.work-tile::before {
  display: none;
}

@media (min-width: 600px) {
  .work-tile {
    height: 300px;
  }
}

@media (min-width: 1000px) {
  .work-tile {
    height: 330px;
  }
}
</style>