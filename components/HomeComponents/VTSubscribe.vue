<template>
  <div class="subscribe-bar">
    <form action="#">
      <div class="response"></div>
      <div class="content">
        <div class="image">
          <img src="_nuxt/img/subscribe-bar-phone.12dda3e.png" alt />
        </div>
        <div class="form">
          <div class="input">
            <h3>Stay devoted.</h3>
            <p>
              Subscribe to our newsletter for our latest insights, news, and
              views.
            </p>
            <div class="md-field md-theme-default">
              <label>Enter your email address</label>
              <input id="md-input-li3umicrf" class="md-input" />
              <span class="md-error">Please enter your email address</span>
            </div>
          </div>
          <div class="submit">
            <button type="submit" class="button-primary large">
              Subscribe<span class="spinner"></span>
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'VTSubscribe',
}
</script>

<style scoped>
.subscribe-bar {
  background-color: #ededed;
}

.subscribe-bar .response {
  display: none;
  padding: 40px 20px;
  text-align: center;
}

.subscribe-bar.hidden,
.subscribe-bar.submitted .content {
  display: none;
}

.subscribe-bar.submitted .response {
  display: block;
}
</style>