<template>
  <div class="icons">
    <div class="item-container">
      <nuxt-link to="/contact-us" class="item"
        ><div class="icon">
          <img
            src="../../Images/Assets/Services/MarketingStrategy.png"
            alt="Marketing Strategy"
          />
        </div>
        <div class="content">
          <h3>Strategy.</h3>
          <p>
            Insight and data-led digital strategies with an actionable roadmap
            to deliver results.
          </p>
        </div>
        <div class="link">
          <div class="button-white-outline">Think with us</div>
        </div></nuxt-link
      >
    </div>
    <div class="item-container">
      <nuxt-link to="/contact-us" class="item">
        <div class="icon">
          <img
            src="../../Images/Assets/Services/Website.png"
            alt="Website Development"
          />
        </div>
        <div class="content">
          <h3>Development.</h3>
          <p>
            Customer-centric UX, design, and build for websites, ecommerce, and
            standalone applications.
          </p>
        </div>
        <div class="link">
          <div class="button-white-outline">Build with us</div>
        </div>
      </nuxt-link>
    </div>
    <div class="item-container">
      <nuxt-link to="/contact-us" class="item">
        <div class="icon">
          <img
            src="../../Images/Assets/Services/SocialMedia.png"
            alt="Social Media"
          />
        </div>
        <div class="content">
          <h3>Marketing.</h3>
          <p>
            AI-first, growth-focused, omnichannel digital marketing solutions to
            help your business grow.
          </p>
        </div>
        <div class="link">
          <div class="button-white-outline">Grow with us</div>
        </div>
      </nuxt-link>
    </div>
    <div class="item-container">
      <nuxt-link to="/contact-us" class="item">
        <div class="icon">
          <img
            src="../../Images/Assets/Services/ContentCreation.png"
            alt="Content Creation"
          />
        </div>
        <div class="content">
          <h3>Content Creation.</h3>
          <p>
            Production Creativity which includes Photography & Videography with
            Editing. Graphic Designing & Animation.
          </p>
        </div>
        <div class="link">
          <div class="button-white-outline">Create with us</div>
        </div>
      </nuxt-link>
    </div>
    <div class="item-container">
      <nuxt-link to="/contact-us" class="item">
        <div class="icon">
          <img
            src="../../Images/Assets/Services/DigitalAds.png"
            alt="Digital Ads"
          />
        </div>
        <div class="content">
          <h3>Digital Ads.</h3>
          <p>
            Escalate your Vusiness with ads that are seen! We handle Google,
            Instagram, Facebook, LinkedIn and all other social media ads.
          </p>
        </div>
        <div class="link">
          <div class="button-white-outline">Advertise with us</div>
        </div>
      </nuxt-link>
    </div>
    <div class="item-container">
      <nuxt-link to="/contact-us" class="item">
        <div class="icon">
          <img src="../../Images/Assets/Services/SEO.png" alt="SEO" />
        </div>
        <div class="content">
          <h3>SEO.</h3>
          <p>
            Keywords Research, Articles, Website Audit, Competitor Analysis.
          </p>
        </div>
        <div class="link">
          <div class="button-white-outline">Optimise with us</div>
        </div>
      </nuxt-link>
    </div>
    <div class="item-container">
      <nuxt-link to="/contact-us" class="item">
        <div class="icon">
          <img
            src="../../Images/Assets/Services/ContentWriting.png"
            alt="Content Writing"
          />
        </div>
        <div class="content">
          <h3>Content Writing.</h3>
          <p>
            Get personalized and SEO-Driven Blogs with eye-catching Website
            Content and Catchy Copywriting
          </p>
        </div>
        <div class="link">
          <div class="button-white-outline">Write with us</div>
        </div>
      </nuxt-link>
    </div>
    <div class="item-container">
      <nuxt-link to="/contact-us" class="item">
        <div class="icon">
          <img src="../../Images/Assets/Services/Branding.png" alt="Branding" />
        </div>
        <div class="content">
          <h3>Branding.</h3>
          <p>Brand Revamp, Logo design, Brochure Design, Print Design etc..</p>
        </div>
        <div class="link">
          <div class="button-white-outline">Brand with us</div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'VTServices',
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
.icons {
  display: flex;
  flex-flow: wrap;
  flex-direction: row;
  justify-content: center;
}

.icons .item-container {
  width: 50%;
  padding: 0 20px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
}

@media (min-width: 375px) {
  .icons .item-container {
    width: 100%;
  }
}

@media (min-width: 768px) {
  .icons .item-container {
    width: 33%;
  }
}

@media (min-width: 1024px) {
  .icons .item-container {
    width: 25%;
  }
}

h3 {
  font-weight: 400;
  transition: color 0.3s ease;
}

h3 span {
  white-space: nowrap;
}

@media (min-width: 1025px) {
  .item-container:hover h3 {
    color: #dc002e;
  }

  .item-container:hover .button-white-outline {
    color: #fff;
    background-color: #dc002e;
    box-shadow: inset 0 0 0 2px #dc002e;
  }
}

.icon {
  width: 114px;
  height: 114px;
  top: 0;
  transform: translateX(-50%);
  transition: width 0.1s linear, height 0.1s linear, top 0.1s linear;
}

.icon img,
.icon {
  position: absolute;
  left: 50%;
}

.icon img {
  color: #1051a3;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 60%;
  height: 60%;
  object-fit: contain;
}

.link {
  margin-top: auto;
}

.item {
  text-decoration: none;
  color: #000;
  padding-top: 100px;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.item::after,
.item::before {
  display: none;
}

@media (min-width: 1025px) {
  .item:hover .icon {
    width: 130px;
    height: 130px;
    top: -8px;
  }
}

.item .content {
  display: flex;
  flex-direction: column;
}
</style>