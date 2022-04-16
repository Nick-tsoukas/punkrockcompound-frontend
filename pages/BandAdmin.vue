<template>
  <div>
    <section v-if="band">
      <div
        class="h-96 object-fill para relative"
        :style="{
          'background-image': `url(${band[0].bandProfileImg.url})`,
        }"
      >
        <div
          class="absolute bottom-0 left-0 g-gradient-to-r from-black to-transparent h-auto w-full bg-gradient-to-bl"
        >
          <h2 class="main_red_text text-center">
            {{ band[0].bandName }}
          </h2>
        </div>
      </div>
      <div class="lg:flex justify-center px-10">
        <button
          class="text-center text-white w-full py-4 px-4 bg-black shadow-md mt-10 lg:w-60"
        >
          Edit Profile Image
        </button>
      </div>
      <!-- Band Details Section -->
      <section class="px-10 xl:px-72">
        <h2 class="main_red_text text-center py-8">Band Details</h2>
        <div class="md:flex">
          <div class="pr-32">
            <div class="pb-8">
              <h3 class="main_red_text text-2xl">Band Name</h3>
              <div class="flex items-center">
                <p class="text-xl pr-4">{{ band[0].bandName }}</p>
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
              <h3 class="main_red_text text-2xl">Admin Name</h3>
              <div class="flex items-center">
                <p class="text-xl pr-4">
                  {{ band[0].users_permissions_user.username }}
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
          <div class="lg:flex flex-col items-center w-full">
            <div class="flex">
              <p
                style="width: 100px"
                class="chedder main_red_text text-2xl mr-12 mb-4"
              >
                Add Album
              </p>
              <img class="h-8" src="~/static/add.svg" alt="" />
            </div>
            <div class="flex">
              <p
                style="width: 100px"
                class="chedder main_red_text text-2xl mr-12 mb-4"
              >
                Add Singles
              </p>
              <img class="h-8" src="~/static/add.svg" alt="" />
            </div>
            <div class="flex">
              <p
                style="width: 100px"
                class="chedder main_red_text text-2xl mr-12 mb-4"
              >
                Add Videos
              </p>
              <img class="h-8" src="~/static/add.svg" alt="" />
            </div>
            <div class="flex">
              <p
                style="width: 100px"
                class="chedder main_red_text text-2xl mr-12 mb-4"
              >
                Add Events
              </p>
              <img class="h-8" src="~/static/add.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section class="p-10">
        <h2 class="main_text_red pb-10 px-20">Band Bio</h2>
        <p class="text-lg">
          {{ band[0].bio }}
        </p>
        <div class="lg:flex justify-center px-10">
          <button
            class="text-center text-white w-full py-4 px-4 bg-black shadow-md mt-10 lg:w-60"
          >
            Edit Profile Image
          </button>
        </div>
      </section>
    </section>
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

.padding-extra-large {
  padding-left: 20%;
  padding-right: 20%;
}
</style>
