<template>
  <div>
    <nuxt-link to="/contact-us" class="enquiry-button"> Enquire now</nuxt-link>

    <button type="button" class="menu-button" @click="onMenuButtonClick()">
      <fa :icon="fas.faBars" />
    </button>
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'EnquireNow',
  computed: {
    fas() {
      return fas
    },
    fab() {
      return fab
    },
  },
  methods: {
    onMenuButtonClick() {
      this.$emit('toggle-VTMenu')
    },
  },
}
</script>

<style scoped>
.enquiry-button {
  height: 60px;
  background-color: #ea1e2b;
  border-radius: 5px;
  color: #fff;
  text-decoration: none;
  padding-left: 30px;
  padding-right: 30px;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-family: Roboto, sans-serif;
  font-size: 24px;
  font-weight: 500;
  position: absolute;
  right: 110px;
  top: 50%;
  margin-top: -30px;
  display: none;
}

.enquiry-button::after,
.enquiry-button::before {
  display: none;
}

@media (min-width: 768px) {
  .enquiry-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 1025px) {
  .enquiry-button:hover {
    background-color: #1051a3;
    color: #fff;
  }
}

.enquiry-button.nuxt-link-exact-active {
  opacity: 0;
  visibility: none;
}

.menu-button {
  border: none;
  background-color: transparent;
  font-size: 32px;
  padding: 0;
  line-height: 1;
  cursor: pointer;
  flex-shrink: 0;
  margin-left: 20px;
  transition: color 0.3s ease;
  color: #1051a3;
}

.menu-button::after,
.menu-button::before {
  display: none;
}

@media (min-width: 1025px) {
  .menu-button:hover {
    color: #dc002e;
  }
}

/* .menu-button::after,
.menu-button::before {
  display: block;
} */
</style>