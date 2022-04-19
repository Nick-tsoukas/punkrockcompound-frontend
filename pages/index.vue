<template>
  <div>
    <IntroHome />
    <!-- featured bands -->
    <section class="bg-gray-50 h-auto pb-20">
      <h2 class="text-center py-12 px-10">Featured Bands</h2>
      <div
        class="flex flex-col md:flex md:flex-row gap-y-12 justify-around items-center"
      >
        <AlbumCard title="Cool Collection" />
        <AlbumCard title="Cool Collection" />
        <AlbumCard title="Cool Collection" />
      </div>
    </section>
    <!-- all bands -->
    <section class="h-auto">
      <h1 class="main_red_text my-12 px-10">All Bands</h1>
      <SliderContainer v-if="bands" id="main-container" class="py-10 h-[400px]">
        <AlbumCard
          v-for="(band, index) in bands"
          :key="index"
          :title="band.bandName"
        />
      </SliderContainer>
      <!-- album slider  -->
    </section>
    <section class="h-auto">
      <h1 class="main_red_text my-12 px-10">Albums</h1>
      <SliderContainer id="main-container-two" class="py-10 h-[400px]">
        <AlbumCard title="Cool Collection" />
        <AlbumCard title="Cool Collection" />
        <AlbumCard title="Cool Collection" />
        <AlbumCard title="Cool Collection" />
      </SliderContainer>
    </section>
    <!-- Video slider section  -->
    <section class="h-auto">
      <h1 class="main_red_text my-12 px-10">Videos</h1>
      <SliderContainer id="main-container-two" class="py-10 h-[400px]">
        <AlbumCard title="Cool Collection" />
        <AlbumCard title="Cool Collection" />
        <AlbumCard title="Cool Collection" />
        <AlbumCard title="Cool Collection" />
        <AlbumCard title="Cool Collection" />
      </SliderContainer>
    </section>
    <section>
      <h2></h2>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bands: [],
    }
  },
  async mounted() {
    try {
      const bands = await this.$strapi.find('bands')
      this.bands = bands
    } catch (error) {
      console.log(error)
    }
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
    observer.observe(document.querySelector('#main-container-two'))
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
