<template>
  <div class="flex justify-center items-center h-44">
    <button
      v-if="!hasLoggedOut"
      class="btn-home h-10 flex justify-center items-center"
      @click="logout"
    >
      Logout
    </button>
    <p v-if="$strapi.user">Logged in</p>
    <h2 v-if="hasLoggedOut">You have been logged out</h2>
    <h2 v-if="errorMessage">{{ errorMessage }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasLoggedOut: false,
      errorMessage: '',
    }
  },
  methods: {
    async logout() {
      const hasLoggedOut = await this.$strapi.logout()

      this.hasLoggedOut = hasLoggedOut
      this.$router.push({
        path: `/`,
      })
    },
  },
}
</script>

<style scoped>
.btn-home {
  padding: 1em;
  background: black;
  color: white;
  width: 275px;
}
</style>
