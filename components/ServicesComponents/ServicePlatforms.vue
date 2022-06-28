<template>
  <div class="platforms">
    <div class="wrapper">
      <h2 data-aos="fade-up">Our Digital Advertisement Platforms.</h2>
      <div class="items-container">
        <div class="items">
          <a
            href="platform/kentico-xperience/index.html"
            data-aos="fade-up"
            class="item"
            ><img src="../../Images/VTLogoName.png" alt="Random Logo" /></a
          ><a
            href="platform/kentico-kontent/index.html"
            data-aos="fade-up"
            class="item"
            ><img src="../../Images/VTLogoName.png" alt="Random Logo" /></a
          ><a
            href="platform/shopify/index.html"
            data-aos="fade-up"
            class="item"
          >
            <img src="../../Images/VTLogoName.png" alt="Random Logo" />
          </a>
        </div>
      </div>
      <div class="items-container icons">
        <div class="items">
          <div data-aos="fade-up" class="item">
            <img src="../../Images/VTLogoName.png" alt="Random Logo" />
          </div>
          <div data-aos="fade-up" class="item">
            <img src="../../Images/VTLogoName.png" alt="Random Logo" />
          </div>
          <div data-aos="fade-up" class="item">
            <img src="../../Images/VTLogoName.png" alt="Random Logo" />
          </div>
          <div data-aos="fade-up" class="item">
            <img src="../../Images/VTLogoName.png" alt="Random Logo" />
          </div>
        </div>
      </div>
      <br />
      <div class="items-container icons">
        <div class="items">
          <a href="" target="_blank" data-aos="fade-up" class="item google"
            ><img src="../../Images/VTLogoName.png" alt="Random Logo"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// font awesome icons ---------------------------

import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'ServicePlatforms',
  computed: {
    fas() {
      return fas
    },
    fab() {
      return fab
    },
  },
}
</script>

<style scoped>
.platforms {
  padding: 40px 0;
}

@media (min-width: 768px) {
  .platforms {
    padding: 80px 0;
  }
}

h2 {
  text-align: center;
}

.items-container {
  max-width: 900px;
  margin: 0 auto;
}

.items {
  margin: 10px -10px -10px;
  display: flex;
  flex-flow: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.item {
  width: 50%;
  max-width: 180px;
  padding: 10px;
}

img {
  width: 100%;
  display: block;
}
</style>