<template>
  <div>
    <IntroHome />
    <!-- featured bands -->
    <section class="bg-gray-50 h-auto pb-20">
      <h2 class="text-center py-12 px-10">Featured Bands</h2>
      <div
        class="flex flex-col md:flex md:flex-row gap-y-12 justify-around items-center"
      >
        <ContentCard title="Cool Collection" />
        <ContentCard title="Cool Collection" />
        <ContentCard title="Cool Collection" />
      </div>
    </section>
    <h1 class="main_red_text my-12 px-10">All Bands</h1>
    <section class="h-auto relative py-24 mb-20">
      <div
        class="bg-black w-46 h-full absolute left-0 z-50 bg-opacity-70 flex justify-center items-center w-36 top-0"
      >
        <p class="text-2xl font-bold main_red_text rotate-180">></p>
      </div>
      <SliderContainer id="main-container" class="py-10">
        <NuxtLink
          v-for="(band, index) in bands"
          :key="index"
          :to="'bandprofile/' + band.id"
        >
          <ContentCard :title="band.bandName" />
        </NuxtLink>
      </SliderContainer>
      <div
        class="bg-black bg-opacity-70 w-46 h-full absolute right-0 z-50 flex justify-center items-center top-0 w-36"
      >
        <p class="text-2xl font-bold main_red_text">></p>
      </div>
    </section>
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
    const slider = document.querySelector('.scroll')
    let isDown = false
    let startX
    let scrollLeft

    slider.addEventListener('mousedown', (e) => {
      isDown = true
      slider.classList.add('active')
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    })
    slider.addEventListener('mouseleave', () => {
      isDown = false
      slider.classList.remove('active')
    })
    slider.addEventListener('mouseup', () => {
      isDown = false
      slider.classList.remove('active')
    })
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = x - startX
      slider.scrollLeft = scrollLeft - walk
    })
    const observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting === true)
          entries[0].target.classList.add('slide')
      },
      { threshold: [1] }
    )

    observer.observe(document.querySelector('#main-container'))
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

.slide {
  margin-left: -150px;
}

.swipe-container {
  overflow-y: scroll;
  display: flex;
  flex-wrap: nowrap;
}

.grab {
  cursor: grab;
}
</style>
