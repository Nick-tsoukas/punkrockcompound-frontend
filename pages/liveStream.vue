<template>
  <section>
    <h1 class="main_page_padding_left_right">Live Stream</h1>
    <div class="flex justify-center mb-10">
      <iframe
        width="1280"
        height="720"
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
