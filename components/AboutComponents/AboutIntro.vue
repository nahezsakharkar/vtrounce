<template>
  <div class="about-intro">
    <div class="inner">
      <div class="heart">
        <fa font-size="70px" :icon="fas.faPeoplePulling" />
      </div>
      <div class="text fs-intro-small">
        We are devoted to creating meaningful connections between you and your
        customers. This means we work collaboratively as your strategic digital
        partner. We take the time to genuinely listen and then distil complex
        goals and ambitions into clear, transparent actions that generate
        results.
      </div>
    </div>
  </div>
</template>
<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'AboutIntro',
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
.about-intro {
  background-color: #dc002e;
  color: #fff;
}

.inner {
  max-width: 1000px;
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
  margin-top: 30px;
}

@media (min-width: 768px) {
  .text {
    margin-top: 0;
    margin-left: 30px;
  }
}

</style>