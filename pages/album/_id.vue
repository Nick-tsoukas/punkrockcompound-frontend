<template>
  <div>
    <h1 v-if="albumId">this is the album id {{ ablumId }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      albumId: '',
    }
  },
  mounted() {
    this.albumId = this.$route.params.id
    console.log(this.albumId)
  },
}
</script>
