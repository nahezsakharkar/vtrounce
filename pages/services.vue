<template>
  <div class="container inner-container">
    <div class="header-spacer"></div>
    <ServicesPageHeading />
    <ServicesIntro />
    <div class="service-icons">
      <div class="arrow" style="border-top-color: #dc002e"></div>
      <div class="wrapper">
        <div class="copy">
          <h2>What we do.</h2>
        </div>
        <VTServices />
      </div>
    </div>
    <ServiceFAQ />
    <ServicePlatforms />
    <ContactRedirect :chat="chat" />
  </div>
</template>

<script>
// font awesome icons ---------------------------

import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// ----------------------------------------------
import ServicesPageHeading from '../components/ServicesComponents/ServicesPageHeading.vue'
import ServicesIntro from '../components/ServicesComponents/ServicesIntro.vue'
import VTServices from '../components/CommonComponents/ServiceIcons.vue'
import ServiceFAQ from '../components/ServicesComponents/ServiceFAQ.vue'
import ServicePlatforms from '../components/ServicesComponents/ServicePlatforms.vue'
import ContactRedirect from '../components/CommonComponents/ContactRedirect.vue'

export default {
  name: 'OurServices',
  components: {
    ServicesPageHeading,
    ServicesIntro,
    VTServices,
    ServiceFAQ,
    ServicePlatforms,
    ContactRedirect,
  },
  data() {
    return {
      chat: " Let's chat to find out how we can work together.",
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
}
</script>

<style scoped>
/* knskncsd */
</style>