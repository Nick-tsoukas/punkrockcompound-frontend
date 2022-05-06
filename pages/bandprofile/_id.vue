<template>
  <div v-if="band">
    <div
      style="z-index: -99999999"
      class="object-fill para relative h-[calc(100vh-192px)]"
      :style="{
        'background-image': `url(${band.bandProfileImg.url})`,
      }"
    >
      <div
        :class="load ? 'bottom-20' : 'bottom-0'"
        class="w-full absolute left-0 h-40 mx-auto transition-all duration-500"
      >
        <div
          :class="!hide ? '' : 'bg-opacity-80'"
          class="mx-auto w-11/12 sm:w-3/4 xl:w-1/2 h-40 bg-black transition-all flex flex-col items-center justify-center duration-500"
        >
          <h1 class="text-white text-center">
            {{ band.bandName }}
          </h1>
          <div
            :class="!hide ? '' : 'opacity-0 ß'"
            class="flex transition-all duration-1000"
          >
            <img src="~/static/red.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <section class="mx-auto w-full z-50">
      <div
        :class="load ? '-mt-24' : 'mt-0'"
        class="w-11/12 sm:w-3/4 xl:w-1/2 bg-black px-16 py-10 mx-auto transition-all duration-500 z-50"
      >
        <h2 class="text-white text-4xl mb-14">BIO</h2>
        <div class="pb-24">
          <p v-for="(para, index) in bio" :key="index" class="text-white mb-4">
            {{ para }}
          </p>
        </div>
      </div>
    </section>
    <section class="w-11/12 sm:w-3/4 xl:w-1/2 mx-auto mt-6 px-14">
      <h1 class="mb-6">Band Details</h1>
      <div class="flex flex-col sm:flex-row items-center mb-4">
        <!-- col one of details  -->
        <div class="w-full mb-6 sm:w-3/4 my-auto flex">
          <div class="w-full">
            <h2 class="text-3xl chedder main_red_text">Genre</h2>
            <p>{{ band.genre }}</p>
          </div>
        </div>
        <!-- col two of details  -->
        <div class="w-full mb-6 sm:w-3/4 flex">
          <div class="w-full">
            <h2 class="text-3xl chedder main_red_text">HomeTown</h2>
            <p>{{ band.city }}, {{ band.state }}</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row items-center mb-4">
        <!-- col one of details  -->
        <div class="w-full sm:w-3/4 flex">
          <div class="w-full mb-6">
            <h2 class="text-3xl chedder main_red_text">Manager</h2>
            <p>{{ band.bandManager }}</p>
          </div>
        </div>
        <!-- col two of details  -->
        <div class="w-full sm:w-3/4 flex">
          <div class="w-full mb-6">
            <h2 class="text-3xl chedder main_red_text">Record Label</h2>
            <p>{{ band.recordLabel }}</p>
          </div>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row items-center mb-4">
        <!-- col one of details  -->
        <!-- col two of details  -->
        <div class="w-full sm:w-3/4 flex">
          <div class="w-full mb-6">
            <h2 class="text-3xl chedder main_red_text">Members</h2>
            <span
              v-for="(member, index) in band.members"
              :key="index + member.id"
              class="mr-4"
              >{{ member.name }}</span
            >
          </div>
        </div>
        <div class="w-full sm:w-3/4 flex">
          <div class="w-full mb-6">
            <h2 class="text-3xl chedder main_red_text">Band Email</h2>
            <p>{{ band.bandEmail }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="sm:w-3/4 mx-auto">
      <h2>
        Albums
        <span class="ptmono pl-4 text-xl">by {{ band.bandName }}</span>
      </h2>
      <SliderContainer v-if="band.album" id="main-container" class="py-10">
        <ContentCard
          v-for="(album, index) in band.album"
          :key="index"
          :bandId="band.id"
          :title="album.title"
          :albumImg="album.albumCover.url"
          :albumId="album.id"
        />
      </SliderContainer>
      <h2>
        Music Videos
        <span class="ptmono pl-4 text-xl">by {{ band.bandName }}</span>
      </h2>
      <VideoSlider id="video-container" class="py-10">
        <VideoCard
          v-for="(video, index) in videos"
          :key="index"
          class="scrollVideo"
          :video="video"
          :bandName="video.band.bandName"
        />
      </VideoSlider>
    </section>
    <pre>{{ band }}</pre>
  </div>
</template>

<script>
export default {
  // async asyncData({ $strapi, params }) {
  //   console.log('parmas from async data', params.id)
  //   try {
  //     const band = await $strapi.findOne('bands', params.id)
  //     return {
  //       band,
  //       hide: false,
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // },
  data() {
    return {
      band: '',
      load: false,
      hide: false,
      videos: [],
    }
  },
  computed: {
    bio() {
      return this.band.bio.split('\n')
    },
    hometown() {
      return this.band.city + ', ' + this.band.state
    },
  },
  // beforeMount() {
  //   window.addEventListener('scroll', this.handleScroll)
  // },
  async mounted() {
    try {
      const id = await this.$route.params.id
      this.band = await this.$strapi.findOne('bands', id)
      this.videos = await this.$strapi.find('videos', { band: id })
    } catch (error) {
      return error
    }
  },

  // beforeDestroy() {
  //   window.removeEventListener('scroll', this.handleScroll)
  // },

  methods: {
    handleScroll() {
      // Your scroll handling here
      if (window.scrollY > 170) {
        this.hide = true
        this.load = true
      }

      if (window.scrollY > 10) {
        this.load = true
      }
      if (window.scrollY < 4) {
        this.load = false
      }
    },
    togClass() {
      this.load = false
    },
  },
}
</script>

<style scoped>
.para {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hideIt {
  opacity: 0.9;
  background: red;
  transition: all 3s linear;
}
</style>
