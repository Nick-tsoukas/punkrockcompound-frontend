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
      <button
        class="text-center text-white w-full py-4 px-4 bg-black shadow-md mt-10"
      >
        Edit Profile Image
      </button>

      <!-- Band Details Section -->
      <section class="pl-10">
        <h2 class="main_red_text text-center py-8">Band Details</h2>
        <div class="md:flex">
          <div class="pr-32">
            <div class="pb-8">
              <h3 class="main_red_text text-2xl">Admin Name</h3>
              <div class="flex items-center">
                <p class="text-xl pr-4">{{ adminName }}</p>
                <img class="h-4" src="~/static/edit.svg" alt="" />
              </div>
            </div>
            <div class="pb-8">
              <h3 class="main_red_text text-2xl">Admin Email</h3>
              <div class="flex items-center">
                <p class="text-xl pr-4">
                  {{ band[0].users_permissions_user.email }}
                </p>
                <img class="h-4" src="~/static/edit.svg" alt="" />
              </div>
            </div>
            <div class="pb-8">
              <h3 class="main_red_text text-2xl">Band Name</h3>
              <div class="flex items-center">
                <p class="text-xl pr-4">
                  {{ band[0].bandName }}
                </p>
                <img class="h-4" src="~/static/edit.svg" alt="" />
              </div>
            </div>
            <div class="pb-8">
              <h3 class="main_red_text text-2xl">Genre</h3>
              <div class="flex items-center">
                <p class="text-xl pr-4">
                  {{ band[0].genre }}
                </p>
                <img class="h-4" src="~/static/edit.svg" alt="" />
              </div>
            </div>
          </div>
          <!-- column two of details on medium -->
          <div>
            <div class="pb-8">
              <h3 class="main_red_text text-2xl">Hometown</h3>
              <div class="flex items-center">
                <p class="text-xl pr-4">
                  {{ hometown }}
                </p>
                <img class="h-4" src="~/static/edit.svg" alt="" />
              </div>
            </div>
            <div class="pb-8">
              <h3 class="main_red_text text-2xl">Record Label</h3>
              <div class="flex items-center">
                <p class="text-xl pr-4">
                  {{ band[0].recordLabel }}
                </p>
                <img class="h-4" src="~/static/edit.svg" alt="" />
              </div>
            </div>
            <div class="pb-8">
              <h3 class="main_red_text text-2xl">Band Manager</h3>
              <div class="flex items-center">
                <p class="text-xl pr-4">
                  {{ band[0].recordLabel }}
                </p>
                <img class="h-4" src="~/static/edit.svg" alt="" />
              </div>
            </div>
            <div class="pb-8">
              <h3 class="main_red_text text-2xl">Band Email</h3>
              <div class="flex items-center">
                <p class="text-xl pr-4">
                  {{ band[0].bandEmail }}
                </p>
                <img class="h-4" src="~/static/edit.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="md:hidden lg:flex flex-col">
            <h2>Add Albums</h2>
            <h2>Add Albums</h2>
            <h2>Add Albums</h2>
            <h2>Add Albums</h2>
          </div>
        </div>
      </section>
    </section>

    <!-- <pre>{{ band }}</pre> -->
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
  computed: {
    adminName() {
      return (
        this.band[0].users_permissions_user.firstName +
        ' ' +
        this.band[0].users_permissions_user.lastName
      )
    },
    hometown() {
      return this.band[0].city + ', ' + this.band[0].state
    },
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
