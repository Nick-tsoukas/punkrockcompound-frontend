<template>
  <div>
    <h1 class="text-center main_red_text mb-10">Create Profile</h1>
    <section class="flex w-5/6 justify-around m-auto mb-10">
      <div class="card-width h-auto">
        <img class="image-height block" src="~/static/band_card.png" alt="" />
        <p class="chedder card-title">Band Profile</p>
      </div>
      <div class="card-width h-24">
        <img
          class="image-height block"
          src="~/static/user_profile.png"
          alt=""
        />
        <p class="chedder card-title">User Profile</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.card-width {
  width: 394px;
}

.card-title {
  font-size: 24px;
}

.card-wdth .img {
  height: 235px;
}
</style>
