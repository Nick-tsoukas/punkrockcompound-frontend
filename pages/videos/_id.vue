<template>
  <div class="mb-10 w-auto">
    <div class="mx-auto w-auto">
      <div class="relative">
        <video
          class="mx-auto"
          controls
          v-if="video"
          height="100%"
          width="2000"
          preload="metadata"
        >
          <source :src="video.videoFile.url + '#t=5'" type="video/mp4" />
          >
        </video>
        <img
          class="absolute left-1/2 top-1/2 shadow-md h-20 w-20 mt-[-20px]"
          src="~/static/play.svg"
          alt=""
        />
      </div>
      <h2 style="max-width: 2000px" class="mx-auto mt-10 px-4">
        {{ band }}
      </h2>
      <p style="max-width: 2000px" class="mx-auto text-2xl px-4">
        {{ video.title }}
      </p>
    </div>
    <section class="px-4 lg:mx-auto lg:w-4/5 mt-10">
      <h2 style="max-width: 2000px" class="chedder mb-4 px-4">
        All VIDEOS <span class="ptmono text-xl pl-4">by {{ band }}</span>
      </h2>
      <section class="w-full grid grid-cols-1 gap-20 lg:grid-cols-3">
        <div
          v-for="(videoItem, index) in videos"
          :key="index + videoItem.name"
          class="w-full relative"
        >
          <video class="mx-auto" controls preload="metadata">
            <source :src="videoItem.videoFile.url + '#t=5'" type="video/mp4" />
            >
          </video>
          <img
            class="absolute left-1/2 top-1/2 shadow-md mt-[-20px]"
            src="~/static/play.svg"
            alt=""
          />
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: '',
      band: '',
      videos: [],
    }
  },
  async mounted() {
    try {
      const id = await this.$route.params.id
      this.video = await this.$strapi.findOne('videos', id)
      this.videos = await this.$strapi.find('videos', {
        band: this.video.band.id,
      })

      if (this.video.band.bandName) {
        console.log('this is band name : ', this.video.band.bandName)
        this.band = this.video.band.bandName
      }
    } catch (error) {
      return error
    }
  },
}
</script>
