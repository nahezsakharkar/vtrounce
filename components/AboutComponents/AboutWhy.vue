<template>
  <div class="why-container">
    <div class="why">
      <h2>Why VTrounce?</h2>
      <div class="why-carousel">
        <div class="carousel">
          <div class="swiper-wrapper">
            <div class="swiper-slide slide1">
              <div class="text">
                <p>
                  We're <strong>customers first, always</strong>. Everything we
                  do starts and ends with your customer.
                </p>
              </div>
            </div>
            <div class="swiper-slide slide2">
              <div class="text">
                <p>
                  We're <strong>relationship-focused</strong>. We have proven
                  longstanding relationships with clients and each other.
                </p>
              </div>
            </div>
            <div class="swiper-slide slide3">
              <div class="text">
                <p>
                  We're <strong>people-powered</strong>. We're a team of
                  devotees with exceptional belief in each other and what we do.
                </p>
              </div>
            </div>
            <div class="swiper-slide slide4">
              <div class="text">
                <p>
                  We're <strong>results-driven</strong>. We focus on delivering
                  meaningful and measurable results for our clients.
                </p>
              </div>
            </div>
            <div class="swiper-slide slide5">
              <div class="text">
                <p>
                  We're <strong>quality-obsessed</strong>. Our process focuses
                  on governance and best practices.
                </p>
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
            ></span
            ><span
              id="2"
              class="swiper-pagination-bullet"
              tabindex="0"
              role="button"
              aria-label="Go to slide 2"
              @click="scrollLeft(2)"
            ></span
            ><span
              id="3"
              class="swiper-pagination-bullet"
              tabindex="0"
              role="button"
              aria-label="Go to slide 3"
              @click="scrollLeft(3)"
            ></span
            ><span
              id="4"
              class="swiper-pagination-bullet"
              tabindex="0"
              role="button"
              aria-label="Go to slide 4"
              @click="scrollLeft(4)"
            ></span
            ><span
              id="5"
              class="swiper-pagination-bullet"
              tabindex="0"
              role="button"
              aria-label="Go to slide 5"
              @click="scrollLeft(5)"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutWhy',
  methods: {
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
.why-container {
  background-color: #fff;
  user-select: none;
}

.why {
  margin-left: auto;
  margin-right: auto;
  max-width: 1180px;
  background-color: #f6f6f6;
  padding: 40px 40px 0;
}

@media (min-width: 1024px) {
  .why {
    padding: 80px 80px 0;
  }
}

h2 {
  font-size: 40px;
  font-size: calc(40px + 25 * (100vw - 375px) / 649);
  margin-top: 0;
  line-height: 1;
}

@media screen and (min-width: 1024px) {
  h2 {
    font-size: 65px;
  }
}

@media screen and (max-width: 375px) {
  h2 {
    font-size: 40px;
  }
}

.carousel {
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
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}

.swiper-wrapper::-webkit-scrollbar {
  display: none;
}

.text {
  padding-bottom: 60px;
  font-size: 24px;
  font-size: calc(24px + 12 * (100vw - 375px) / 649);
  line-height: 1.5;
}

@media screen and (min-width: 1024px) {
  .text {
    font-size: 36px;
  }
}

@media screen and (max-width: 375px) {
  .text {
    font-size: 24px;
  }
}

.text span {
  color: #fff;
  background-color: #dc002e;
  display: inline-block;
  padding-left: 5px;
  padding-right: 5px;
}

.swiper-pagination {
  position: absolute;
  text-align: center;
  transition: opacity 0.3s;
  transform: translateZ(0);
  z-index: 10;
}

.carousel > .swiper-pagination,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 10px;
  left: 0;
  width: 100%;
}

.swiper-pagination-bullet {
  display: inline-block;
  opacity: 0.2;
  width: 40px;
  height: 5px;
  border-radius: 3px;
  background-color: #dc002e;
  cursor: pointer;
  margin: 0 4px;
}

.swiper-pagination-bullet-active {
  opacity: 1;
  background: #dc002e;
}
</style>