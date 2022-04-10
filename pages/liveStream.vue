<template>
  <section>
    <h1 class="main_page_padding_left_right">Live Stream</h1>
    <div class="w-screen flex justify-center mb-10">
      <iframe
        class="frame"
        :src="`https://www.youtube.com/embed/${id}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.liveId,
    }
  },
  async mounted() {
    if (!this.$route.params.liveId) {
      const { data } = await this.$strapi.find('live-stream-id')
      this.id = data.attributes.streamId
    }
  },
}
</script>

<style scoped>
.frame {
  width: 90vw;
  height: 400px;
}

.ytp-chrome-top .ytp-show-cards-title {
  display: none;
}

@media (min-width: 870px) {
  .frame {
    width: 100vw;
    height: 550px;
    z-index: -999999;
  }
}
@media (min-width: 1350px) {
  .frame {
    width: 100vw;
    height: 500px;
  }
}

@media (min-width: 1650px) {
  .frame {
    width: 100vw;
    height: 800px;
  }
}
</style>
