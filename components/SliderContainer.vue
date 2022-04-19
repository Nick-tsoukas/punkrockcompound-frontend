<template>
  <div
    class="transition-all duration-1000 flex gap-20 flex-nowrap overflow-y-scroll grab scroll"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
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
