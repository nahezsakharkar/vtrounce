<template>
  <div class="about-supporting-text">
    <div class="triangle"></div>
    <div class="items">
      <div class="item">
        <div class="heading-container">
          <div data-aos="fade-right" class="heading">
            <h3>Experience matters.</h3>
          </div>
        </div>
        <div data-aos="fade-left" class="description">
          <p>
            While we're unfailingly future-focused, we're also proud of our
            heritage. With close to two decades' digital experience, we've
            evolved alongside the technology we use, and with our clients'
            needs. We have deep technical knowledge and creative ability, make
            sound recommendations based on real experience, and love nothing
            more than a new challenge.
          </p>
        </div>
      </div>
      <div class="item">
        <div class="heading-container">
          <div data-aos="fade-right" class="heading">
            <h3>People-powered.</h3>
          </div>
        </div>
        <div data-aos="fade-left" class="description">
          <p>
            When you choose to partner with VTrounce, you get a skilled, smart
            team with diverse experience and a true passion for achievement. We
            believe that if a job's worth doing, it's worth doing properly. This
            means always keeping things clear, simple and effective. We believe
            in an AI-first approach and are devoted to sourcing creative and
            intelligent automation solutions so we can focus on the aspects of
            engagement that make us more human: problem-solving, creativity,
            empathy, and partner relationships.
          </p>
        </div>
      </div>
      <div class="item">
        <div class="heading-container">
          <div data-aos="fade-right" class="heading">
            <h3>Integrated offering.</h3>
          </div>
        </div>
        <div data-aos="fade-left" class="description">
          <p>
            Our full-service offering is genuine. Our projects range from
            website development to deep technical integrations to growth
            strategies and creative campaign development. We're one team focused
            on delivering end-to-end solutions in-house. We think, we build, and
            we grow. Simple.
          </p>
        </div>
      </div>
      <div class="button-container">
        <div class="button-spacer"></div>
        <div data-aos="fade-up" class="buttons">
          <nuxt-link
            to="/work"
            class="button-grey-outline"
            ><span>Explore our case studies</span></nuxt-link
          >
          <nuxt-link
            to="/services"
            class="button-grey-outline"
            ><span>See our capabilities</span></nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutSupporting',
}
</script>
<style scoped>
.about-supporting-text {
  background-color: #fff;
  padding: 50px 20px 40px;
  position: relative;
}

@media (min-width: 1024px) {
  .about-supporting-text {
    padding: 90px 20px 80px;
  }
}

.triangle {
  height: 0;
  width: 0;
  border-top: 20px solid #dc002e;
  border-right: 20px solid transparent;
  border-left: 20px solid transparent;
  position: absolute;
  top: -1px;
  left: 50%;
  transform: translateX(-50%);
}

.items {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.item {
  margin-bottom: 10px;
}

@media (min-width: 1024px) {
  .item {
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
}

.item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border: none;
}

.heading-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

@media (min-width: 1024px) {
  .heading-container {
    width: 30%;
    flex-shrink: 0;
  }
}

@media (min-width: 1024px) {
  .heading {
    white-space: nowrap;
  }
}

.description {
  margin-top: 20px;
}

@media (min-width: 1024px) {
  .description {
    margin-top: 0;
    margin-left: 30px;
  }
}

@media (min-width: 768px) {
  .button-container {
    margin-top: 30px;
  }
}

@media (min-width: 1024px) {
  .button-container {
    margin-top: 0;
    display: flex;
    flex-direction: row;
  }
}

@media (min-width: 1024px) {
  .button-container .button-spacer {
    width: 30%;
    flex-shrink: 0;
  }
}

.button-container .buttons {
  width: 100%;
}

@media (min-width: 1024px) {
  .button-container .buttons {
    margin-left: 30px;
  }
}

.button-container .buttons a {
  display: block;
  margin-bottom: 10px;
  width: 100%;
}

@media (min-width: 768px) {
  .button-container .buttons a {
    display: inline-block;
    margin-right: 17px;
    width: auto;
  }
}

.button-container .buttons a:last-child {
  margin-right: 0;
  margin-bottom: 0;
}
</style>