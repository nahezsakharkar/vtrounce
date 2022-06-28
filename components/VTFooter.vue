<template>
  <footer>
    <div class="wrapper">
      <div class="left">
        <div class="logo">
          <img src="../Images/VTLogoIcon.png" alt="" />
        </div>
        <div class="call">
          <div class="label">Call</div>
          <a href="tel:+919773981585">+91 9773981585</a> /
          <a href="tel:+919769740453">+91 9769740453</a>
        </div>
        <div class="write">
          <div class="label">Write</div>
          <a href="mailto:contact@vtrounce.com">contact@vtrounce.com</a>
        </div>
        <div class="follow">
          <div class="label">Follow</div>
          <div class="links">
            <a href="https://www.linkedin.com/company/vtrounce" target="_blank"
              ><fa font-size="16px" :icon="fab.faLinkedin"
            /></a>
            <a href="https://www.instagram.com/vtrounce_" target="_blank"
              ><fa font-size="16px" :icon="fab.faInstagram"
            /></a>
            <a href="https://www.facebook.com/vtrounce/" target="_blank"
              ><fa font-size="16px" :icon="fab.faFacebook"
            /></a>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="fineprint">
          <div class="label">The Fineprint</div>
          <div class="copy">
            © VTrounce Pvt Ltd 2022
            <span class="divider"></span>
            <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>
            <span class="divider"></span>
            <nuxt-link to="/disclaimer">Disclaimer</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'VTFooter',
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
footer {
  background-color: #333;
  padding: 40px 20px;
  text-align: center;
  font-size: 14px;
  z-index: 2;
}

a,
footer {
  color: #fff;
}

.call a,
.write a {
  font-weight: 700;
  transition: all 0.3s ease;
}

.call a::after,
.call a::before,
.write a::after,
.write a::before {
  display: none;
}

@media (min-width: 1024px) {
  .call a:hover,
  .write a:hover {
    background-color: #dc002e;
    color: #fff;
  }
}

.call,
.follow,
.write {
  margin-bottom: 20px;
}

svg path {
  transition: all 0.3s ease;
}

.links {
  margin: 0 -10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.links a {
  margin: 0 10px;
  transition: all 0.3s ease;
}

.links a::after,
.links a::before {
  display: none;
}

.links a:hover svg path {
  fill: #dc002e !important;
}

.label {
  text-transform: uppercase;
  font-size: 12px;
  opacity: 0.5;
  line-height: 1;
  margin-bottom: 5px;
}

.follow .label {
  margin-bottom: 10px;
}

.logo img {
  width: 50px;
  display: none;
}

.copy {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fineprint a {
  transition: all 0.3s ease;
}

.fineprint a::after,
.fineprint a::before {
  display: none;
}

@media (min-width: 1024px) {
  .fineprint a:hover {
    background-color: #dc002e;
    color: #fff;
  }
}

@media (min-width: 768px) {
  .left {
    margin: 0 -20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .label {
    margin-bottom: 10px;
  }

  .call,
  .follow,
  .write {
    margin: 0 20px 30px;
  }

  .copy {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .divider {
    margin: 0 10px;
    width: 1px;
    height: 10px;
    background-color: #fff;
  }
}

@media (min-width: 1024px) {
  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .logo img {
    display: block;
  }

  .call,
  .follow,
  .write {
    margin: 0 20px;
  }

  footer {
    text-align: left;
  }
}

@media (min-width: 1200px) {
  .logo img {
    margin-right: 30px;
  }

  .call,
  .follow,
  .write {
    margin: 0 30px;
  }
}
</style>