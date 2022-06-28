<template>
  <div class="container inner-container">
    <div class="header-spacer"></div>
    <WorkPageHeading />
    <WorkList />
    <WorkPageIndustries />
    <ContactRedirect :chat="chat" />
  </div>
</template>

<script>
// font awesome icons ---------------------------

import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// ----------------------------------------------
import WorkPageHeading from '../components/WorkComponents/WorkPageHeading.vue'
import WorkList from '../components/WorkComponents/WorkPageWorkList.vue'
import WorkPageIndustries from '../components/WorkComponents/WorkPageIndustries.vue'
import ContactRedirect from '../components/CommonComponents/ContactRedirect.vue'

export default {
  name: 'OurWork',
  components: {
    WorkPageHeading,
    WorkList,
    WorkPageIndustries,
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