<template>
  <div
    class="back rounded-md shadow-md transition-all duration-200 relative hover:scale-105 flex-col"
  >
    <NuxtLink :to="'/videos/' + video.id" class="z-50">
      <video class="z-10" preload="metadata">
        <source :src="video.videoFile.url + '#t=5'" type="video/mp4" />
        >
      </video>
      <div class="h-20 bg-black w-full flex items-center px-4">
        <p class="text-white chedder text-3xl pr-4">{{ video.title }}</p>
        <NuxtLink :to="'/videos/' + video.id"
          ><p class="text-white text-xl text-white">
            by <span>{{ bandName }}</span>
          </p></NuxtLink
        >
      </div>
      <NuxtLink
        class="absolute top-[50%] left-[50%]"
        :to="'/videos/' + video.id"
      >
        <img src="~/static/play.svg" alt=""
      /></NuxtLink>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      default() {
        return {}
      },
    },
    bandName: {
      type: String,
      default() {
        return 'fdsfadsf'
      },
    },
  },
}
</script>

<style scoped>
.outline-button {
  padding: 0.5em 1em;
  border: 1px solid white;
  border-radius: 5px;
}
.back {
  background-position: center;
  background-size: cover;
  object-fit: fill;
  height: auto;
  width: 200px;
  min-width: 400px;
}
@media (min-width: 1000px) {
  .back {
    min-width: 450px;
  }
} ;
</style>
