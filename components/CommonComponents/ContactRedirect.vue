<template>
  <div class="cta-bar fs-intro-small">
    <div data-aos="fade-up">{{ chat }}</div>
    <div data-aos="fade-up" class="cta">
      <nuxt-link to="/contact-us" class="button-white large"
        >Get in touch</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactRedirect',
  props: {
    "chat": {
      type: String,
      default: "Let's chat about how we can work together."
    },
  },
}
</script>