<template>
  <div id="contact-us" class="container inner-container">
    <div class="header-spacer"></div>
    <div class="page-heading">
      <h1>Hello.</h1>
      <div class="intro fs-intro-small">
        We love hearing from people and chatting about new things. Get in touch
        today regarding:
      </div>
    </div>
    <div class="contact-tabs">
      <div class="wrapper">
        <div class="tab">
          <button type="button" class="button-primary tab-button">
            Working together<span class="icon"></span>
          </button>
        </div>
        <div class="tab">
          <button type="button" class="button-primary tab-button">
            Becoming a Part of VTrounce Army<span class="icon"></span>
          </button>
        </div>
        <div class="tab">
          <button type="button" class="button-primary tab-button">
            Something else entirely<span class="icon"></span>
          </button>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <h3 class="or">Or...</h3>
      <div class="contact-details">
        <div class="detail">
          <div class="icon"><fa :icon="fas.faMobileScreen" /></div>
          <h3>Drop us a line.</h3>
          <a href="tel:+919773981585">ANCHIT: +91 9773981585</a> / <br />
          <a href="tel:+919769740453">EMMANUEL: +91 9769740453</a>
        </div>
        <div class="detail">
          <div class="icon"><fa :icon="fas.faLocationDot" /></div>
          <h3>Drop by the office.</h3>

          Office No. 127, Satra Plaza<br />
          Palm Beach Rd, Phase 2, Sector 19D<br />
          Vashi, Navi Mumbai, Maharashtra. 400703<br />
          <a href="https://goo.gl/maps/cxWZTzR12nFbSq3P6" target="_blank"
            >View map</a
          >
        </div>
        <div class="detail">
          <div class="icon"><fa :icon="fas.faPaperPlane" /></div>
          <h3>Drop us an email.</h3>
          <a href="mailto:contact@vtrounce.com">contact@vtrounce.com</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'ContactUs',
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

.container {
  position: relative;
  padding-bottom: 80px;
}

.contact-tabs {
  display: none;
}

@media (min-width: 768px) {
  .contact-tabs {
    display: block;
  }
}

.contact-tabs .tab {
  width: 100%;
  padding: 0 10px;
}

.contact-tabs .wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
}

.contact-tabs button {
  width: 100%;
}

.contact-tabs .tab:not(.active) .tab-button.inactive {
  border: none;
  background-color: #fff;
  box-shadow: inset 0 0 0 2px #ededed;
  cursor: pointer;
  transition: color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  color: #000;
  display: inline-flex !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contact-tabs .tab:not(.active) .tab-button.inactive::after,
.contact-tabs .tab:not(.active) .tab-button.inactive::before {
  display: none;
}

@media (min-width: 1025px) {
  .contact-tabs .tab:not(.active) .tab-button.inactive:hover {
    color: #fff;
    background-color: #ea1e2b;
    box-shadow: inset 0 0 0 2px #ea1e2b;
  }
}

svg {
  color: #ea1e2b;
  width: 32px;
  height: 54px;
  fill: none;
}

.tab .tab-button {
  position: relative;
}

.tab .tab-button .icon {
  position: absolute;
  left: 50%;
  bottom: 5px;
  transform: translateX(-50%);
  display: none;
}

.tab.active .tab-button {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  height: 70px;
  padding-bottom: 20px;
  padding-top: 0;
  background-color: #ededed;
  color: #000;
  transition: none;
}

.tab.active .tab-button .icon {
  display: block;
}

.intro {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
}

.contact-details,
.or {
  text-align: center;
  margin-top: 40px;
}

.contact-details {
  margin-left: auto;
  margin-right: auto;
  max-width: 300px;
}

.contact-details h3 {
  margin-top: 10px;
}

.contact-details .detail {
  margin-bottom: 30px;
}

@media (min-width: 768px) {
  .contact-details {
    max-width: 1005px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }

  .contact-details .detail {
    width: 100%;
    padding: 0 10px;
  }
}

.page-heading {
  padding: 50px 20px 40px;
  text-align: center;
}

@media (min-width: 768px) {
  .page-heading {
    padding: 100px 20px 80px;
  }
}

h1 {
  margin-bottom: 20px;
}

@media (min-width: 1024px) {
  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
}

a {
  color: #ea1e2b;
  position: relative;
}

a::after,
a::before {
  content: '';
  position: absolute;
  bottom: -2px;
  width: 0;
  height: 1px;
  margin: 2px 0 0;
  transition: all 0.2s ease-in-out;
  opacity: 0;
  background-color: #ea1e2b;
}

a::before {
  left: 50%;
}

a::after {
  right: 50%;
}

a:hover {
  color: #1051a3;
}

@media (min-width: 1025px) {
  a:hover::after,
  a:hover::before {
    color: #1051a3;
    width: 50%;
    opacity: 1;
  }
}
</style>
