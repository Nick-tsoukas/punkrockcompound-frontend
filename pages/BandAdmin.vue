<template>
  <div>
    <section v-if="band">
      <div
        v-if="!editImg"
        class="h-96 object-fill para relative xl:h-[500px]"
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
      <section v-if="editImg" class="w-full xl:h-[300px]">
        <FormulateInput
          type="image"
          name="bandProfileImg"
          label="Select an image to upload"
          help="Select a png, jpg or gif to upload."
          help-class="sm:w-96 mx-auto"
          :wrapper-class="[
            'my-wrapper-class',
            'mx-auto',
            'h-[300px]',
            'sm:w-96',
          ]"
          :uploadAreaMask-class="['bg-black']"
          :uploadArea-class="['bg-black', 'h-[300px]']"
          validation="mime:image/jpeg,image/png,image/gif"
          input-class=" mx-auto sm:w-96 "
          element-class=" sm:w-96 "
          @change="profileImage = $event.target.files[0]"
          @file-upload-complete="complete"
          @file-removed="complete"
        />
      </section>
      <div
        class="lg:flex justify-center gap-10 px-10"
        @click="toggleEditImg(true)"
      >
        <button
          class="text-center text-white w-full py-4 px-4 bg-black shadow-md mt-10 lg:w-60"
        >
          {{ editImg ? `Back` : `Edit Profile Image` }}
        </button>
        <button
          v-if="editImg"
          :class="!isComplete ? 'bg-black opacity-50' : 'bg-green-500'"
          class="text-center text-white w-full py-4 px-4 shadow-md mt-10 lg:w-60 transition-all ease-linear duration-700"
        >
          Submit Photo
        </button>
      </div>

      <!-- Band Details Section -->
      <h2 class="main_red_text text-center py-8 mb-10">Band Details</h2>
      <section class="px-10 xl:px-72 extraLarge largeTop">
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
      <section class="p-10 bioPaddinglarge">
        <h2
          class="main_text_red pb-10 px-20 text-center md:text-left lg:px-56 xl:px-72"
        >
          Band Bio
        </h2>
        <div class="text-lg lg:px-56 xl:px-72">
          <p v-for="(bandBio, index) in bio" :key="index" class="pb-4">
            {{ bandBio }}
          </p>
          <button
            class="text-center text-white w-full py-4 px-4 bg-black shadow-md mt-10 lg:w-60"
          >
            Edit Bio
          </button>
          <button
            @click="viewProfile"
            class="text-center text-white w-full py-4 px-4 mt-6 bg-black shadow-md mt-10 lg:w-60"
          >
            View Profile
          </button>
        </div>

        <!-- <div class="lg:flex justify-center px-10"> -->

        <!-- </div> -->
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
      editImg: false,
      profileImage: '',
      isComplete: false,
    }
  },
  computed: {
    bio() {
      return this.band[0].bio.split('\n')
    },
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

  methods: {
    viewProfile() {
      this.$router.push(`bandprofile/${this.band[0].id}`)
    },
    toggleEditImg(isEdit) {
      if (isEdit) {
        this.profileImage = ''
        this.isComplete = false
      }
      this.editImg = !this.editImg
    },
    complete() {
      this.isComplete = !this.isComplete
      console.log(true)
    },
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

.extraLarge {
  padding-left: 5em;
  padding-right: 5em;
}
.formulate-input[data-classification='file'] .formulate-input-upload-area {
  height: 500px !important;
}

@media (min-width: 1700px) {
  .extraLarge {
    padding-left: 25em;
    padding-right: 25em;
  }

  .bioPaddinglarge {
    padding-left: 7em;
    padding-right: 7em;
  }
}

@media (min-width: 2200px) {
  .bioPaddinglarge {
    padding-left: 15em;
    padding-right: 15em;
  }
  .largeTop {
    margin-left: 8em;
  }
}
@media (max-width: 450px) {
  .bioPaddinglarge {
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
  .extraLarge {
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
}

@media only screen and (max-width: 600px) and (min-width: 400px) {
  .top-section-padding {
    padding-left: 10em;
  }
}
</style>
