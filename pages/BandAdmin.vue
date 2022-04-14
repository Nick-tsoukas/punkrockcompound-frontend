<template>
  <div>
    <h1>This is the band Admin</h1>
    <p>This is band</p>
    <pre>{{ band }}</pre>
    <p>This is user</p>
    <pre>{{ $strapi.user }}</pre>
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
