<template>
  <div>
    <h1>This is the error page</h1>

    <h2>
      {{ error.statusCode }}
      {{ error.message.response.data }}
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
