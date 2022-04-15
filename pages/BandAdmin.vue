<template>
  <div>
    <section v-if="band">
      <h2 class="main_red_text text-center pb-10">Band Details</h2>
      <div
        class="h-96 object-fill para relative"
        :style="{
          'background-image': `url(${band[0].bandProfileImg.url})`,
        }"
      >
        <h2 class="main_red_text absolute bottom-10 left-10">
          {{ band[0].bandName }}
        </h2>
      </div>
      <section class="px-10"></section>
    </section>
    <pre>{{ band }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: '',
      band: '',
    }
  },
  async mounted() {
    if (this.$strapi.user) {
      this.band = await this.$strapi.find('bands', {
        users_permissions_user: this.$strapi.user.id,
      })
    }
  },
}
</script>

<style scoped>
.para {
  background-size: cover;
  object-fit: fill;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
