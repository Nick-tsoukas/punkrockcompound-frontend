<template>
  <div class="mb-20">
    <h1>This is the test page for data store</h1>
    <p @click="addUser">Add user</p>
    {{ userData }}
  </div>
</template>

<script>
export default {
  computed: {
    userData() {
      return this.$store.state.user
    },
  },
  methods: {
    addUser() {
      this.$store.commit('setUser', 'jack')
    },
  },
}
</script>
