<template>
  <div class="mb-10 w-auto">
    <div class="mx-auto w-auto">
      <div class="relative">
        <video
          class="mx-auto"
          controls
          v-if="video"
          height="600"
          width="1800"
          preload="metadata"
        >
          <source :src="video.videoFile.url + '#t=5'" type="video/mp4" />
          >
        </video>
      </div>
      <div
        style="max-width: 1800px"
        class="bg-black text-white mx-auto py-16 px-16"
      >
        <h2 style="max-width: 1800px" class="mx-auto inline">
          {{ video.title }}
        </h2>
        <p style="max-width: 1800px" class="mx-auto text-2xl inline">
          By {{ band }}
        </p>
      </div>
    </div>
    <section class="px-4 lg:mx-auto lg:w-4/5 mt-10">
      <h2 style="max-width: 2000px" class="chedder mb-4 px-4">
        All VIDEOS <span class="ptmono text-xl pl-4">by {{ band }}</span>
      </h2>
      <section class="w-full grid grid-cols-1 gap-20 lg:grid-cols-3">
        <div
          v-for="(videoItem, index) in videos"
          :key="index + videoItem.name"
          class="w-full relative z-30"
        >
          <video
            class="mx-auto z-10"
            preload="metadata"
            @click="setVideo(videoItem, $event)"
          >
            <source :src="videoItem.videoFile.url + '#t=5'" type="video/mp4" />
            >
          </video>
          <div
            class="bg-black text-white mx-auto py-4 px-8 flex items-center"
            @click="setVideo(videoItem, $event)"
          >
            <h2 class="mx-auto text-2xl pr-4">
              {{ videoItem.title }}
            </h2>
            <p class="mx-auto text-2xl">By {{ band }}</p>
            <div class="flex flex-grow justify-end items-center">
              <img class="shadow-md" src="~/static/play.svg" alt="" />
            </div>
          </div>
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
  methods: {
    setVideo: function (video, e) {
      e.preventDefault()
      this.video = video
    },
  },
}
</script>
