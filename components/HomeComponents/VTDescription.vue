<template>
  <div class="customer-experience-bar">
    <div class="inner">
      <h2>We create VTrounce by <span>MAKING DIGITAL SIMPLE.</span></h2>
      <div class="fs-intro-small">
        Simple for you and your customers. We’re easy and transparent to deal
        with, streamline the process, and deliver clear results. Our difference
        is that we’re one team, delivering end-to-end solutions in-house. We
        think, we build, and we grow. Simple.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VTDescription',
}
</script>

<style scoped>
.customer-experience-bar {
  background-color: #333;
  color: #fff;
  padding: 60px 20px;
  text-align: center;
  position: relative;
}

@media (min-width: 768px) {
  .customer-experience-bar {
    padding: 80px 40px;
  }
}

.customer-experience-bar::after {
  content: '';
  display: block;
  height: 0;
  width: 0;
  border-top: 20px solid #333;
  border-right: 20px solid transparent;
  border-left: 20px solid transparent;
  position: absolute;
  bottom: -20px;
  left: 50%;
  margin-left: -20px;
}

.customer-experience-bar h2 {
  margin-bottom: 30px;
  font-weight: 400;
}

.inner {
  margin-left: auto;
  margin-right: auto;
  max-width: 1020px;
}

.customer-experience-bar h2 span {
  background-color: #dc002e;
  color: #fff;
  display: inline;
}
</style>