<template>
  <div
    class="back relative rounded-md shadow-md transition-all duration-200 hover:scale-105"
    style="background-image: url('user_profile.png')"
  >
    <div
      class="flex justify-center items-center bg-black absolute bottom-0 w-full"
    >
      <h2 class="text-2xl text-white">{{ title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Cool Album',
    },
    albumId: {
      type: String || Number,
      default: '1',
    },
    albumImg: {
      type: String,
      default: 'Cool Album',
    },
  },
}
</script>

<style scoped>
.back {
  background-position: center;
  background-size: cover;
  object-fit: fill;
  min-width: 300px;
  height: 400px;
}

@media (min-width: 1000px) {
  .back {
    min-width: 400px;
  }
} ;
</style>
