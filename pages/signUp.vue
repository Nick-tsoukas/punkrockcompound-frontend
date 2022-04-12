<template>
  <div>
    <h1 class="text-center main_red_text mb-10">Create Profile</h1>
    <section
      class="flex flex-col justify-center sm:flex-row w-5/6 sm:justify-around m-auto mb-10"
    >
      <div class="card-width h-auto shadow-lg">
        <img class="img block" src="~/static/band_card.png" alt="" />
        <section class="px-4 pt-4">
          <p class="chedder card-title pb-4">Band Profile</p>
          <ul>
            <li class="ml-4">Add music</li>
            <li class="ml-4">Add videos</li>
            <li class="ml-4">Create Albums</li>
            <li class="ml-4">Add live stream events</li>
          </ul>
          <NuxtLink to="signUpBand" class="btn-card py-4 my-6"
            >Create band profile</NuxtLink
          >
        </section>
      </div>
      <div class="card-width shadow-lg">
        <img class="img block" src="~/static/user_profile.png" alt="" />
        <section class="px-4 pt-4">
          <p class="chedder card-title pb-4">User Profile</p>
          <ul>
            <li class="ml-4">Add music</li>
            <li class="ml-4">Add videos</li>
            <li class="ml-4">Create Albums</li>
            <li class="ml-4">Add live stream events</li>
          </ul>
          <NuxtLink class="btn-card py-4 my-6" to="signUpUser"
            >Create user profile</NuxtLink
          >
        </section>
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

.btn-card {
  width: 100%;
  background: black;
  display: flex;
  align-content: center;
  justify-content: center;
  color: white;
}

ul {
  list-style: inherit;
}

li {
  font-size: 1.2em;
}
.card-title {
  font-size: 24px;
}

.card-wdth .img {
  height: 235px;
}

@media (max-width: 616px) {
  .card-width .img {
    width: 100%;
  }

  .card-width {
    width: 100%;
    margin-bottom: 2em;
  }
}
</style>
