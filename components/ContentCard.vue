<template>
  <div
    class="back relative rounded-md shadow-md transition-all duration-200 hover:scale-105"
    style="background-image: url('user_profile.png')"
  >
    <div
      class="flex justify-between items-center bg-black absolute bottom-0 w-full px-4 py-8"
    >
      <h2 class="text-2xl text-white">{{ title }}</h2>
      <NuxtLink class="outline-button" :to="'bandprofile/' + bandId">
        <p class="text-white">View Profile</p>
        {{ bandId }}
      </NuxtLink>
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
    bandId: {
      type: Number,
      default: 1,
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

.outline-button {
  padding: 0.5em 1em;
  border: 1px solid white;
  border-radius: 5px;
}
@media (min-width: 1000px) {
  .back {
    min-width: 400px;
  }
} ;
</style>
