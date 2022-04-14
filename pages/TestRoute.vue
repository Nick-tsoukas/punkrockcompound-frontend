<template>
  <div class="mb-20">
    <h1 class="text-center" @click="getOne">one band</h1>
    <h1 class="text-center" @click="getAllBands">all bands</h1>
    <p>all bands</p>
    <pre>{{ bands }}</pre>
    <p>one band</p>
    <pre>{{ band }}</pre>
    <p>there should be a band here</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      band: '',
      bands: [],
    }
  },
  methods: {
    async getOne() {
      const band = await this.$strapi.find('bands', { bandName: 'Sublime' })
      this.band = band
    },
    async getAllBands() {
      const bands = await this.$strapi.find('bands')
      this.bands = bands
    },
  },
}
</script>
