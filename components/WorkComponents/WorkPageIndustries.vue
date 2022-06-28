<template>
  <div id="industries" class="industry-icons">
    <div class="wrapper">
      <div class="copy">
        <h2 data-aos="fade-up">Work by industry.</h2>
        <div data-aos="fade-up" class="intro fs-intro-small">
          Our consistent processes, customer focus and commitment to simplicity
          mean we can deliver great results across a wide range of industries -
          in both B2B and B2C contexts.
        </div>
      </div>
      <div class="icons">
        <div data-aos="zoom-in" class="item">
          <a href="../industries/building-and-construction/index.html">
            <div class="icon">
              <img
                src=""
                alt="Building and construction industry icon"
              />
            </div>
            <div class="label">Building and construction</div>
          </a>
        </div>
        <div data-aos="zoom-in" class="item">
          <a href="../industries/education-and-government/index.html">
            <div class="icon">
              <img
                src=""
                alt="Education and government industry icon"
              />
            </div>
            <div class="label">Education and government</div>
          </a>
        </div>
        <div data-aos="zoom-in" class="item">
          <a href="../industries/financial-services/index.html">
            <div class="icon">
              <img src="" alt="Financial services industry icon" />
            </div>
            <div class="label">Financial services</div>
          </a>
        </div>
        <div data-aos="zoom-in" class="item">
          <a href="../industries/food-and-beverage/index.html">
            <div class="icon">
              <img src="" alt="Food and beverage industry icon" />
            </div>
            <div class="label">Food and beverage</div>
          </a>
        </div>
        <div data-aos="zoom-in" class="item">
          <a href="../industries/health-and-wellbeing/index.html">
            <div class="icon">
              <img
                src=""
                alt="Health and wellbeing industry icon"
              />
            </div>
            <div class="label">Health and wellbeing</div>
          </a>
        </div>
        <div data-aos="zoom-in" class="item">
          <a
            href="../industries/ict-information-and-communications-technology/index.html"
          >
            <div class="icon">
              <img src="" alt="ICT industry icon" />
            </div>
            <div class="label">ICT</div>
          </a>
        </div>
        <div data-aos="zoom-in" class="item">
          <a href="../industries/manufacturing/index.html">
            <div class="icon">
              <img src="" alt="Manufacturing industry icon" />
            </div>
            <div class="label">Manufacturing</div>
          </a>
        </div>
        <div data-aos="zoom-in" class="item">
          <a href="../industries/not-for-profit/index.html">
            <div class="icon">
              <img src="" alt="Not for profit industry icon" />
            </div>
            <div class="label">Not for profit</div>
          </a>
        </div>
        <div data-aos="zoom-in" class="item">
          <a href="../industries/professional-services/index.html">
            <div class="icon">
              <img
                src=""
                alt="Professional services industry icon"
              />
            </div>
            <div class="label">Professional services</div>
          </a>
        </div>
        <div data-aos="zoom-in" class="item">
          <a href="../industries/property-and-asset-management/index.html">
            <div class="icon">
              <img
                src=""
                alt="Property and asset management industry icon"
              />
            </div>
            <div class="label">Property and asset management</div>
          </a>
        </div>
        <div data-aos="zoom-in" class="item">
          <a href="../industries/retail-and-consumer-goods/index.html">
            <div class="icon">
              <img src="" alt="Retail industry icon" />
            </div>
            <div class="label">Retail and consumer goods</div>
          </a>
        </div>
        <div data-aos="zoom-in" class="item">
          <a href="../industries/tourism-and-hospitality/index.html">
            <div class="icon">
              <img
                src=""
                alt="Tourism and hospitality industry icon"
              />
            </div>
            <div class="label">Tourism and hospitality</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WorkPageIndustries',
}
</script>
<style scoped>
.industry-icons {
  padding: 40px 0;
  text-align: center;
  position: relative;
}

@media (min-width: 768px) {
  .industry-icons {
    padding: 80px 0;
  }
}

h2 {
  margin-bottom: 20px;
}

.intro {
  max-width: 820px;
  margin-left: auto;
  margin-right: auto;
}

.icons {
  flex-flow: wrap;
  flex-direction: row;
}

.cta,
.icons {
  display: flex;
  justify-content: center;
}

.cta {
  margin-top: 40px;
  flex-direction: column;
  align-items: center;
}

.item {
  width: 50%;
  padding: 0 20px;
  margin: 10px 0;
}

@media (min-width: 375px) {
  .item {
    width: 50%;
  }
}

@media (min-width: 768px) {
  .item {
    width: 25%;
  }
}

@media (min-width: 1024px) {
  .item {
    width: 20%;
  }
}

.item a {
  text-decoration: none;
  color: #000;
  display: block;
  padding-top: 100px;
  position: relative;
}

.item a::after,
.item a::before {
  display: none;
}

@media (min-width: 1025px) {
  .item a:hover {
    color: #dc002e;
  }

  .item a:hover .icon {
    width: 130px;
    height: 130px;
    top: -8px;
  }
}

.label {
  font-size: 16px;
  font-size: calc(16px + 2 * (100vw - 375px) / 649);
  line-height: 1.3;
  font-weight: 400;
}

@media screen and (min-width: 1024px) {
  .label {
    font-size: 18px;
  }
}

@media screen and (max-width: 375px) {
  .label {
    font-size: 16px;
  }
}

.label span {
  white-space: nowrap;
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
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 60%;
  height: 60%;
  object-fit: contain;
}
</style>