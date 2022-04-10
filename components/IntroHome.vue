<template>
  <div class="grid_half content_padding main-container">
    <div>
      <NuxtLink :to="{ name: 'liveStream', params: { liveId: liveId } }">
        <div class="shadow-lg live-placeholder-container">
          <img class="image-height" src="~/static/live_background.png" alt="" />
          <div class="live-image-bottom-bar"></div>
        </div>
      </NuxtLink>
    </div>
    <div class="pl-10 flex flex-col">
      <h1 class="title pb-4">{{ title }}</h1>
      <p class="message">{{ message }}</p>
      <div class="flex flex-grow items-end pb-8 justify-around">
        <button class="shadow-lg btn-home">Signup</button>
        <button class="shadow-lg btn-home">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      message: '',
      hasLiveStream: false,
      hasFeatVideo: false,
      liveId: null,
      videoId: null,
    }
  },
  async mounted() {
    const { data } = await this.$strapi.find('intro-home-page')
    const { title, message, hasLiveStream, hasFeatVideo, liveId, videoId } =
      data.attributes
    this.title = title
    this.message = message
    this.liveId = liveId
    this.videoId = videoId
    this.hasLiveStream = hasLiveStream
    this.hasFeatVideo = hasFeatVideo
  },
}
</script>

<style scoped>
.btn-home {
  padding: 1em;
  background: black;
  color: white;
  width: 40%;
}
.live-placeholder-container {
  position: relative;
  width: auto;
}
.live-image-bottom-bar {
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 662px;
  background: black;
  min-height: 20%;
}

.image-height {
  min-height: 400px;
}
.main-container {
  margin-bottom: 2em;
}
@media (max-width: 740px) {
  .main-container {
    display: flex;
    flex-direction: column;
  }
  .title {
    text-align: center;
    margin-top: 2em;
  }

  .message {
    margin-bottom: 2em;
  }
}

@media (max-width: 1055px) {
  .title {
    font-size: 28px;
  }
}

@media (min-width: 1430px) {
  .live-image-bottom-bar {
    min-width: 100%;
  }

  .image-height {
    width: 100%;
  }
}
@media (min-width: 1740px) {
  .main-container {
    padding-left: 20vw;
    padding-right: 20vw;
  }
  .live-image-bottom-bar {
    min-width: 100%;
  }

  .image-height {
    width: 100%;
  }
}
@media (min-width: 1340px) {
  .message {
    font-size: 22px;
  }
}
</style>
