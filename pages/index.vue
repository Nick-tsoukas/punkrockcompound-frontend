<template>
  <div>
    <IntroHome />
    <!-- featured bands -->
    <section class="bg-gray-50 h-auto pb-20">
      <h2 class="text-center py-12 px-10">Featured Bands</h2>
      <div
        class="flex flex-col md:flex md:flex-row gap-y-12 justify-around items-center"
      >
        <NuxtLink :to="'bandprofile/1'">
          <ContentCard title="Fire" />
        </NuxtLink>
        <NuxtLink :to="'bandprofile/2'">
          <ContentCard title="Earth" />
        </NuxtLink>
        <NuxtLink :to="'bandprofile/3'">
          <ContentCard title="Lantern" />
        </NuxtLink>
      </div>
    </section>
    <h1 class="main_red_text my-12 px-10">Bands</h1>
    <section class="h-auto relative py-24 mb-20">
      <!-- swiper box black -->
      <!-- <div
        class="bg-black w-46 h-full absolute left-0 z-50 bg-opacity-70 flex justify-center items-center w-36 top-0"
      >
        <p class="text-2xl font-bold main_red_text rotate-180">></p>
      </div> -->
      <SliderContainer id="main-container" class="py-10">
        <ContentCard
          v-for="(band, index) in bands"
          :key="index"
          :bandId="band.id"
          :title="band.bandName"
        />
      </SliderContainer>
      <!-- swiper box black -->
      <!-- <div
        class="bg-black bg-opacity-70 w-46 h-full absolute right-0 z-50 flex justify-center items-center top-0 w-36"
      >
        <p class="text-2xl font-bold main_red_text">></p>
      </div> -->
    </section>
    <h1 class="main_red_text my-12 px-10">Music Videos</h1>
    <section class="h-auto relative py-24 mb-20">
      <!-- swiper box black -->
      <!-- <div
        class="bg-black w-46 h-full absolute left-0 z-50 bg-opacity-70 flex justify-center items-center w-36 top-0"
      >
        <p class="text-2xl font-bold main_red_text rotate-180">></p>
      </div> -->
      <VideoSlider id="video-container" class="py-10">
        <ContentCard
          v-for="(band, index) in bands"
          :key="index"
          class="scrollVideo"
          :bandId="band.id"
          :title="band.bandName"
        />
      </VideoSlider>
      <!-- swiper box black -->
      <!-- <div
        class="bg-black bg-opacity-70 w-46 h-full absolute right-0 z-50 flex justify-center items-center top-0 w-36"
      >
        <p class="text-2xl font-bold main_red_text">></p>
      </div> -->
    </section>

    <!-- The event section  -->
    <h1 class="main_red_text my-12 px-10">Featured Event</h1>
    <section class="h-auto relative py-24 mb-20 px-10">
      <h2>This is where we will display the events</h2>
    </section>
    <pre>{{ animationCounter }}</pre>
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi }) {
    try {
      const bands = await $strapi.find('bands')
      return {
        bands,
      }
    } catch (error) {
      console.log(error)
    }
  },

  mounted() {
    let animationComplete = false
    let animationCounter = 0
    let counter = 0
    const observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting === true && animationComplete === false) {
          const animationTimer = setInterval(() => {
            counter = counter + 2

            entries[0].target.scrollLeft = counter
            if (counter > 100) {
              counter = 0
              if (animationCounter === 1) {
                animationComplete = true
                return clearInterval(animationTimer)
              }
              this.animationCounter = animationCounter++
              return clearInterval(animationTimer)
            }
          }, 2)
        }
      },

      { threshold: [1] }
    )
    if (
      document.querySelector('#main-container') &&
      document.querySelector('#video-container')
    ) {
      observer.observe(document.querySelector('#main-container'))
      observer.observe(document.querySelector('#video-container'))
    }
  },
}
</script>

<style land="css" scoped>
* {
  box-sizing: border-box;
}

.box {
  min-width: 300px;
  height: 300px;
  margin: 3em;
  background: red;
}

.active {
  cursor: grabbing !important;
}

.scrollVideo {
  cursor: grab;
}
</style>
