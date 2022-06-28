<template>
  <div class="about-hero dark">
    <div class="video-container">
      <video
        loop
        autoplay
        muted
        playsinline
        poster="../../Images/Try/posterbehindvideo.jpg"
        class="video"
      >
        <source
          src="../../Images/Try/devotion_keep-it-simple_1080-sml.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <div class="foreground">
      <h1>About.</h1>
      <div class="text fs-intro-small">
        At VTrounce, we're driven to grow our clients' businesses and deliver
        against their goals. We're a smart and passionate team who make
        intelligent digital simple.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutHero',
}
</script>
<style scoped>
.about-hero {
  height: 400px;
  position: sticky;
  top: 100px;

  /* z-index: -1; */
  text-align: center;
}

@media (min-width: 768px) {
  .about-hero {
    height: 570px;
  }
}

.foreground {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.overlay {
  background-color: #000;
  opacity: 0.6;
}

.foreground,
.overlay {
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.about-hero .foreground {
  text-shadow: 0 0 10px rgb(255 255 255 / 30%);
}

.about-hero.light .foreground {
  text-shadow: 0 0 10px rgb(0 0 0 / 30%);
}

.text {
  max-width: 800px;
  margin: 0 auto;
  opacity: 0;
  transition: opacity 0.3s ease;
  position: relative;
  text-transform: lowercase;
  z-index: 2;
}

.text,
h1,
h2 {
  color: #fff;
}

.about-hero .text {
  color: #000;
  text-transform: none;
  margin-top: 20px;
  opacity: 1;
}

.about-hero h1 {
  color: #000;
}

.about-hero.light .foreground .text,
.about-hero.light .foreground h1 {
  color: #fff;
}

.video-container {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.video-container video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}


</style>