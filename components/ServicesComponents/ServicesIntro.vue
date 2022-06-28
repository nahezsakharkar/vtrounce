<template>
  <div class="service-intro">
    <div class="inner">
      <div class="heart">
        <fa :icon="fas.faPeopleGroup" width="90" height="161" />
      </div>
      <div>
        <div class="intro">
          Your customers' needs are always front and centre. From big creative
          ideas and beautifully designed websites, to robust technical
          integrations and data-driven marketing, we deliver everything in-house
          and on-shore.
        </div>
        <div class="text"></div>
      </div>
    </div>
  </div>
</template>

<script>
// font awesome icons ---------------------------

import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'ServicesIntro',
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
.service-intro {
  background-color: #dc002e;
  color: #fff;
}

.inner {
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (min-width: 768px) {
  .inner {
    text-align: left;
    padding: 80px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
}

.text {
  font-size: 16px;
  font-size: calc(16px + 4 * (100vw - 420px) / 860);
  line-height: 1.4;
  margin-top: 30px;
  font-weight: 400;
}

@media screen and (min-width: 1280px) {
  .text {
    font-size: 20px;
  }
}

@media screen and (max-width: 420px) {
  .text {
    font-size: 16px;
  }
}

@media (min-width: 768px) {
  .text {
    margin-top: 0;
    margin-left: 40px;
  }
}

.heart {
  margin-bottom: 10px;
}

@media (min-width: 768px) {
  .heart {
    margin-bottom: 0;
  }
}

.heart svg {
  height: 80px;
}

@media (min-width: 768px) {
  .heart svg {
    height: 140px;
  }
}

@media (min-width: 1024px) {
  .heart svg {
    height: auto;
  }
}

.intro {
  font-size: 20px;
  font-size: calc(20px + 6 * (100vw - 420px) / 860);
  margin-bottom: 10px;
  font-weight: 400;
}

@media screen and (min-width: 1280px) {
  .intro {
    font-size: 26px;
  }
}

@media screen and (max-width: 420px) {
  .intro {
    font-size: 20px;
  }
}

@media (min-width: 768px) {
  .intro {
    margin-left: 40px;
  }
}
</style>