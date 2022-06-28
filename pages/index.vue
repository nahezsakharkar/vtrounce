<template>
  <div class="container inner-container">
    <VTHomePageHero />
    <VTDescription />
    <div class="service-icons">
      <div class="arrow" style="border-top-color: #333;"></div>
      <div class="wrapper">
        <VTServices />
      </div>
    </div>
    <VTWork />
    <VTHello />
  </div>
</template>

<script>
import VTHomePageHero from '../components/HomeComponents/VTHomePageHero.vue'
import VTDescription from '../components/HomeComponents/VTDescription.vue'
import VTServices from '../components/CommonComponents/ServiceIcons.vue'
import VTWork from '../components/HomeComponents/VTWork.vue'
import VTHello from '../components/HomeComponents/VTHello.vue'

export default {
  name: 'HomePage',
  components: {
    VTHomePageHero,
    VTDescription,
    VTServices,
    VTWork,
    VTHello,
  },
}
</script>