<template>
  <div>
    <IntroHome />
    <section class="background-custom h-auto mt-20 py-20">
      <h2 class="text-center py-12 px-10 text-white">Some Title</h2>
      <div
        class="flex flex-col md:flex md:flex-row gap-y-8 justify-around items-center px-10"
      >
        <NuxtLink class="w-full" :to="`/bandprofile/${bands[0].id}`">
          <ContentCard
            class="h-full w-full lg:w-[30vw]"
            title="Fire"
            :isFeat="true"
            :bandProfile="bands[0].bandProfileImg.url"
            :bandId="bands[0].id"
          />
        </NuxtLink>
        <!-- <NuxtLink class="w-full h-[700px]" :to="`/bandprofile/${bands[0].id}`">
          <ContentCard
            class="h-full w-full lg:w-[30vw]"
            :isFeat="true"
            :bandProfile="bands[1].bandProfileImg.url"
            title="Earth"
            :bandId="bands[0].id"
          />
        </NuxtLink> -->
        <!-- <NuxtLink class="w-full h-[700px]" :to="'/bandprofile/3'">
          <ContentCard
            class="h-full w-full lg:w-[30vw]"
            :isFeat="true"
            :bandProfile="bands[2].bandProfileImg.url"
            :bandId="3"
            title="Lantern"
          />
        </NuxtLink> -->
      </div>
    </section>
    <h1 class="main_red_text my-4 px-28">Bands</h1>
    <section class="h-auto relative">
      <SliderContainer id="main-container" class="py-10">
        <ContentCard
          v-for="(band, index) in bands"
          :key="index"
          :bandId="band.id"
          :title="band.bandName"
          :bandProfile="band.bandProfileImg.url"
        />
      </SliderContainer>
    </section>
    <h1 class="main_red_text my-4 px-28">Music Videos</h1>
    <section class="h-auto relative mb-20">
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

    <h1 class="main_red_text my-0 lg:my-12 text-center lg:px-28 lg:text-left">
      Featured Event
    </h1>
    <section class="h-auto relative lg:py-24 mb-20 lg:px-10">
      <FeaturedEvent :event="event" />
    </section>
    <EventCta />
    <NewsLetterCta />
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi }) {
    try {
      const bands = await $strapi.find('bands')
      const event = await $strapi.find('featured-event')
      const videos = await $strapi.find('videos')
      return {
        bands,
        event,
        videos,
      }
    } catch (error) {
      return error
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

.background-custom {
  background-color: #000;
  background-image: linear-gradient(2deg, #000 60%, #767676 94%);
}
</style>
