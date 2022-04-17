<template>
  <div v-if="band">
    <div
      class="object-fill para relative h-[calc(100vh-192px)]"
      :style="{
        'background-image': `url(${band.bandProfileImg.url})`,
      }"
    >
      <div
        class="w-full absolute bottom-0 left-0 h-40 m-auto transition-all duration-500"
      >
        <div
          :class="!hide ? '' : 'bg-opacity-80'"
          class="mx-auto w-11/12 sm:w-3/4 xl:w-1/2 h-40 bg-black transition-all flex flex-col items-center justify-center duration-500"
        >
          <h1 class="text-white text-center">
            {{ band.bandName }}
          </h1>
          <div
            :class="!hide ? '' : 'opacity-0 hidden'"
            class="flex transition-all duration-1000"
          >
            <img src="~/static/red.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <section class="mx-auto w-full">
      <div
        class="w-11/12 sm:w-3/4 xl:w-1/2 bg-black px-16 py-10 mx-auto transition-all duration-500"
      >
        <h2 class="text-white">BIO</h2>
        <div>
          <p v-for="(para, index) in bio" :key="index" class="text-white mb-4">
            {{ para }}
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="w-full sm:3/6 bg-red-400 h-46"></div>
    </section>
  </div>
</template>

<script>
export default {
  // async asyncData({ $strapi, params }) {
  //   console.log('parmas from async data', params.id)
  //   const band = await $strapi.findOne('bands', params.id)
  //   return {
  //     band,
  //     hide: false,
  //   }
  // },
  data() {
    return {
      band: '',
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
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  // async mounted() {
  //   console.log('mounted', this.$route.params.id)
  //   const id = await this.$route.params.id
  //   this.band = await this.$strapi.findOne('bands', id)
  // },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      // Your scroll handling here
      if (window.scrollY > 170) {
        this.hide = true
      }
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
