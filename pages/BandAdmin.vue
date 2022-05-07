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
          v-if="!isLoading"
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
        <section v-else class="flex justify-center items-center h-full w-full">
          <div class="spinner">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
          </div>
        </section>
      </section>
      <div class="lg:flex justify-center gap-10 px-10">
        <button
          class="text-center text-white w-full py-4 px-4 bg-black shadow-md mt-10 lg:w-60"
          @click="toggleEditImg(true)"
        >
          {{ editImg ? `Back` : `Edit Profile Image` }}
        </button>
        <button
          v-if="editImg"
          :class="
            !isComplete ? 'bg-black opacity-50 disabled:' : 'bg-green-500'
          "
          class="text-center text-white w-full py-4 px-4 shadow-md mt-10 lg:w-60 transition-all ease-linear duration-700"
          @click="submitProfileImg"
        >
          Submit Photo
        </button>
      </div>

      <!-- Band Details Section -->
      <h2 class="main_red_text text-center py-8 mb-10">Band Details</h2>
      <section class="px-10 xl:px-72 extraLarge largeTop">
        <div class="lg:flex mx-auto">
          <div class="w-full mx-auto">
            <div class="pb-8">
              <h3 class="main_red_text text-2xl w-[85vw] mx-auto lg:w-auto">
                Band Name
              </h3>
              <div
                v-if="!editDetails"
                class="flex items-center w-[85vw] mx-auto lg:w-auto"
              >
                <p class="text-xl pr-4">
                  {{ band[0].bandName }}
                </p>
                <img
                  class="h-4"
                  src="~/static/edit.svg"
                  alt=""
                  @click="toggleEditDetails"
                />
              </div>
              <div v-else>
                <FormulateInput
                  v-model="bandNameForm"
                  type="text"
                  name="bandName"
                  element-class=" w-[85vw] lg:w-full  lg:pr-4"
                  wrapper-class="flex justify-center  lg:pr-4"
                  :placeholder="band[0].bandName"
                  @input="canUpdate"
                />
              </div>
            </div>
            <div class="pb-8 w-full">
              <h3 class="main_red_text text-2xl w-[85vw] mx-auto lg:w-auto">
                Admin Email
              </h3>
              <div
                v-if="!editDetails"
                class="flex items-center w-[85vw] mx-auto lg:w-auto"
              >
                <p class="text-xl pr-4">
                  {{ band[0].users_permissions_user.email }}
                </p>
                <img
                  class="h-4"
                  src="~/static/edit.svg"
                  alt=""
                  @click="toggleEditDetails"
                />
              </div>
              <div v-else>
                <FormulateInput
                  v-model="bandEmailForm"
                  type="email"
                  name="bandEmail"
                  element-class=" w-[85vw] lg:w-full  lg:pr-4"
                  wrapper-class="flex justify-center  lg:pr-4"
                  :placeholder="band[0].users_permissions_user.email"
                  @input="canUpdate"
                />
              </div>
            </div>
            <div class="pb-8">
              <h3 class="main_red_text text-2xl w-[85vw] mx-auto lg:w-auto">
                Genre
              </h3>
              <div
                v-if="!editDetails"
                class="flex items-center w-[85vw] mx-auto lg:w-auto"
              >
                <p class="text-xl pr-4">
                  {{ band[0].genre }}
                </p>
                <img
                  class="h-4"
                  src="~/static/edit.svg"
                  alt=""
                  @click="toggleEditDetails"
                />
              </div>
              <div v-else>
                <FormulateInput
                  v-model="genre"
                  type="text"
                  name="genre"
                  element-class=" w-[85vw] lg:w-full  lg:pr-4"
                  wrapper-class="flex justify-center  lg:pr-4"
                  :placeholder="band[0].genre"
                  @input="canUpdate"
                />
              </div>
            </div>
          </div>
          <!-- column two of details on medium -->
          <div class="w-full">
            <div class="pb-8">
              <h3
                v-if="!editDetails"
                class="main_red_text text-2xl w-[85vw] mx-auto lg:w-auto"
              >
                Hometown
              </h3>
              <div
                v-if="!editDetails"
                class="flex items-center w-[85vw] mx-auto lg:w-auto"
              >
                <p class="text-xl pr-4">
                  {{ hometown }}
                </p>
                <img
                  class="h-4"
                  src="~/static/edit.svg"
                  alt=""
                  @click="toggleEditDetails"
                />
              </div>
              <div v-else>
                <h3
                  class="main_red_text text-2xl w-[85vw] mt-4 md:mt-0 mx-auto lg:w-auto"
                >
                  City
                </h3>
                <FormulateInput
                  v-model="hometownForm"
                  type="text"
                  name="city"
                  element-class=" w-[85vw] lg:w-full "
                  wrapper-class="flex justify-center  "
                  :placeholder="band[0].city"
                  @input="canUpdate"
                />
                <h3 class="main_red_text text-2xl w-[85vw] mx-auto lg:w-auto">
                  State
                </h3>
                <FormulateInput
                  v-model="hometownForm"
                  type="text"
                  name="state"
                  element-class=" w-[85vw] lg:w-full"
                  wrapper-class="flex justify-center"
                  :placeholder="band[0].state"
                  @input="canUpdate"
                />
              </div>
            </div>
            <div class="pb-8">
              <h3 class="main_red_text text-2xl w-[85vw] mx-auto lg:w-auto">
                Record Label
              </h3>
              <div
                v-if="!editDetails"
                class="flex items-center w-[85vw] mx-auto lg:w-auto"
              >
                <p class="text-xl pr-4">
                  {{ band[0].recordLabel }}
                </p>
                <img
                  class="h-4"
                  src="~/static/edit.svg"
                  alt="edit"
                  @click="toggleEditDetails"
                />
              </div>
              <div v-else>
                <FormulateInput
                  v-model="recordLabelForm"
                  type="text"
                  name="city"
                  element-class=" w-[85vw] lg:w-full"
                  wrapper-class="flex justify-center"
                  :placeholder="band[0].recordLabel"
                  @input="canUpdate"
                />
              </div>
            </div>
            <div class="pb-8">
              <h3 class="main_red_text text-2xl w-[85vw] mx-auto lg:w-auto">
                Band Manager
              </h3>
              <div
                v-if="!editDetails"
                class="flex items-center w-[85vw] mx-auto lg:w-auto"
              >
                <p class="text-xl pr-4">
                  {{ band[0].bandManager }}
                </p>
                <img
                  class="h-4"
                  src="~/static/edit.svg"
                  alt=""
                  @click="toggleEditDetails"
                />
              </div>
              <div class="w-full" v-else>
                <FormulateInput
                  v-model="bandManagerForm"
                  type="text"
                  name="city"
                  element-class=" w-[85vw] lg:w-full"
                  wrapper-class="flex justify-center"
                  :placeholder="band[0].bandManager"
                  @input="canUpdate"
                />
              </div>
            </div>
            <div class="pb-8">
              <h3 class="main_red_text text-2xl w-[85vw] mx-auto lg:w-auto">
                Band Email
              </h3>
              <div
                v-if="!editDetails"
                class="flex items-center w-[85vw] mx-auto lg:w-auto"
              >
                <p class="text-xl pr-4">
                  {{ band[0].bandEmail }}
                </p>
                <img
                  class="h-4"
                  src="~/static/edit.svg"
                  alt=""
                  @click="toggleEditDetails"
                />
              </div>
              <div v-else>
                <FormulateInput
                  v-model="bandEmailForm"
                  type="text"
                  name="bandEmail"
                  element-class=" w-[85vw] lg:w-full"
                  wrapper-class="flex justify-center"
                  :placeholder="band[0].bandEmail"
                  @input="canUpdate"
                />
              </div>
            </div>
          </div>
          <section v-if="editDetails" class="block lg:hidden">
            <div
              :class="updateReady ? 'bg-green-500' : 'bg-black'"
              class="button mb-4 transition-all duration-300 ease-linear"
              @click="submitDetails"
            >
              Update
            </div>

            <div class="button mb-4 bg-black" @click="toggleEditDetails">
              Back
            </div>
          </section>
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
      <section
        v-if="editDetails"
        class="hidden lg:flex lg:justify-center lg:gap-10"
      >
        <div
          :class="updateReady ? 'bg-green-500' : 'bg-black'"
          class="button transition-all duration-300 ease-linear"
        >
          Update
        </div>

        <div class="button bg-black" @click="toggleEditDetails">Back</div>
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
            class="text-center text-white w-full py-4 px-4 mt-6 bg-black shadow-md lg:w-60"
            @click="viewProfile"
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
      image: null,
      isLoading: false,
      editDetails: false,
      genre: '',
      bandNameForm: '',
      bandEmailForm: '',
      bandManagerForm: '',
      hometownForm: {},
      recordLabelForm: '',
      updateReady: false,
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
    toggleEditDetails() {
      this.editDetails = !this.editDetails
      if (this.editDetails === false) {
        this.updateReady = false
      }
    },
    // bandName: this.bandNameForm,
    // bandEmail: this.bandEmailForm,
    // bandManager: this.bandManagerForm,
    // city: this.hometownForm.city,
    // state: this.hometownForm.state,
    // recordLabel: this.recordLabelForm,
    async submitDetails() {
      const updated = await this.$strapi.update(
        'bands',
        this.$strapi.user.band,
        {
          ...(this.bandEmailForm && { bandEmail: this.bandEmailForm }),
          ...(this.bandNameForm && { bandName: this.bandNameForm }),
          ...(this.genre && { genre: this.genre }),
          ...(this.bandManagerForm && { bandManager: this.bandManagerForm }),
          ...(this.recordLabelForm && { recordLabel: this.recordLabelForm }),
          ...(this.hometownForm.city && { city: this.hometownForm.city }),
          ...(this.hometownForm.state && { city: this.hometownForm.state }),
        }
      )

      console.log(updated.bandName, 'band changed ')
      this.band = await this.$strapi.find('bands', {
        users_permissions_user: this.$strapi.user.id,
      })
      this.toggleEditDetails()
    },
    canUpdate() {
      return (this.updateReady = true)
    },
    viewProfile() {
      this.$router.push(`bandprofile/${this.band[0].id}`)
    },
    toggleEditImg(isEdit) {
      if (isEdit) {
        this.isComplete = false
      }
      this.editImg = !this.editImg
    },
    complete() {
      this.isComplete = !this.isComplete

      console.log(this.profileImage)
    },
    async submitProfileImg() {
      console.log(this.$strapi.user.band, 'band id', this.$strapi.user, ' user')
      try {
        // loading
        this.isLoading = true
        const formData = new FormData()
        await formData.append('files', this.profileImage)
        const [image] = await this.$strapi.create('upload', formData)
        this.image = image
        await this.$strapi.update('bands', 3, {
          bandProfileImg: this.image,
        })
        this.band[0].bandProfileImg = await this.image
        this.toggleEditImg(true)
        // not Loading
        this.isLoading = false
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>
.button {
  padding: 1.3em 6em;
  color: white;
  text-align: center;
}
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

.spinner {
  width: 60px;
  height: 60px;
  position: relative;
  margin: auto;
}

.double-bounce1,
.double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: red;
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 0;
  animation: sk-bounce 2s infinite ease-in-out;
}

.double-bounce2 {
  animation-delay: -0.5s;
}

@keyframes sk-bounce {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}

@keyframes sk-bounce {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
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
