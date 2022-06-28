<template>
  <div class="say-hello fs-intro-small">
    Say
    <nuxt-link to="/contact-us"
      ><a class="button-white large"> Hello </a></nuxt-link
    >
    and chat about how we can help.
  </div>
</template>

<script>
export default {
  name: 'VTHello',
}
</script>

<style scoped>
.fs-intro-small {
  font-size: 20px;
  font-size: calc(20px + 6 * (100vw - 375px) / 649);
  line-height: 1.5;
}

@media screen and (min-width: 1024px) {
  .fs-intro-small {
    font-size: 26px;
  }
}

@media screen and (max-width: 375px) {
  .fs-intro-small {
    font-size: 20px;
  }
}

.say-hello {
  padding: 40px 20px;
  background-color: #dc002e;
  color: #fff;
  text-align: center;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (min-width: 768px) {
  .say-hello {
    padding: 60px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
}

.button-white {
  margin: 5px 10px;
}
</style>