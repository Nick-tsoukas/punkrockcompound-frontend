<template>
  <div
    v-if="albumImg && bandId"
    class="back relative rounded-md shadow-md transition-all duration-200 hover:scale-105"
    :style="`background-image: url(${albumImg})`"
  >
    <div
      class="flex justify-between items-center bg-black absolute bottom-0 w-full px-4 py-8"
    >
      <h2 class="text-2xl text-white">{{ title }}</h2>
      <NuxtLink
        class="outline-button"
        :params="{ name: 'jack' }"
        :to="{ path: '/album/' + albumId, query: { band: bandId } }"
      >
        <p class="text-white">View Profile</p>
      </NuxtLink>
    </div>
  </div>
  <div
    v-else
    class="relative rounded-md shadow-md transition-all duration-200 hover:scale-105"
    :class="isFeat ? 'featuredBackground' : 'back'"
    :style="`background-image: url(${bandProfile})`"
  >
    <div
      class="flex justify-between items-center bg-black absolute bottom-0 w-full px-4 py-8"
    >
      <h2 class="text-2xl text-white">{{ title }}</h2>
      <NuxtLink
        class="outline-button"
        :to="bandId ? `bandprofile/${bandId}` : `album/${albumId}`"
      >
        <p class="text-white">View Profile</p>
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
    albumId: {
      type: Number || String,
      default: null,
    },
    bandProfile: {
      type: String,
      default() {
        return '~/static/user_profile.png'
      },
    },
    bandId: {
      type: Number,
      default: 1,
    },
    albumImg: {
      type: String,
      default: '',
    },
    album: {
      type: Object || Array,
      default() {
        return {}
      },
    },
    isFeat: {
      type: Boolean,
      default() {
        return false
      },
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

.featuredBackground {
  background-position: center;
  background-size: cover;
  object-fit: fill;
  height: 700px;
}

.outline-button {
  padding: 0.5em 1em;
  border: 1px solid white;
  border-radius: 5px;
}
@media (min-width: 1000px) {
  .back {
    min-width: 500px;
  }
} ;
</style>
