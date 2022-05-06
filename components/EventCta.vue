<template>
  <div class="w-full h-auto flex flex-col lg:flex-row lg:h-[500px]">
    <div
      class="w-full lg:w-2/3 bg-black text-white flex flex-col justify-center py-16 lg:px-10"
    >
      <div class="w-full text-center lg:w-1/2 mx-auto">
        <p class="mx-auto text-3xl mb-8">
          Join us at all events, tours, shows, and more
        </p>
        <NuxtLink
          to="events"
          class="btnn text-center mx-auto w-4/5 lg:w-[300px] text-xl text-black"
        >
          View All Events
        </NuxtLink>
      </div>
    </div>
    <div class="w-full h-full lg:w-1/3 crowd"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.crowd {
  background-image: url('~/static/crowd.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.btnn {
  background: #c4c4c4;
  padding: 1em 2em;
  text-align: center;
}
</style>
