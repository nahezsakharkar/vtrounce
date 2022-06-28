<template>
  <header id="header" class="transparent">
    <div class="main">
      <nuxt-link to="/"><VTLogo /></nuxt-link>
      <EnquireNow @toggle-VTMenu="$emit('toggle-VTMenu')" />
    </div>
  </header>
</template>

<script>
import VTLogo from './HeaderComponents/VTLogo.vue'
import EnquireNow from './HeaderComponents/VTEnquireNow.vue'

export default {
  name: 'VTHeader',
  components: {
    VTLogo,
    EnquireNow,
  },
}
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
  font-family: Roboto, sans-serif;
}

.main {
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgb(255 255 255 / 90%);
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
  .main {
    height: 100px;
  }
}

@media (min-width: 768px) {
  .main {
    padding: 0 40px;
  }
}
</style>