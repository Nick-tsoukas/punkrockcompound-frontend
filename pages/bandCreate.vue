<template>
  <div>
    <h1 class="main_red_text text-center">Add Your Band Info</h1>
    <section class="w-full sm:w-3/4 sm:m-auto 2xl:w-3/6">
      <p>Step 2/2</p>
      <div class="w-full mt-6 mb-6">
        <FormulateForm v-model="formValues" @submit="submitForm">
          <div class="flex-col sm:flex sm:flex-row">
            <div class="w-full px-4 sm:w-1/2">
              <FormulateInput
                name="bandName"
                label="What is the band name"
                validation="required"
                wrapper-class="m-auto sm:w-4/5 "
                element-class="w-full"
                errors-class="sm:w-4/5 m-auto"
              />
              <FormulateInput
                name="genre"
                label="What is the genre"
                validation="required"
                wrapper-class="sm:w-4/5 m-auto"
                element-class="w-full"
                errors-class="sm:w-4/5 m-auto"
              />
              <FormulateInput
                name="bandManager"
                label="Band manager name?"
                wrapper-class="sm:w-4/5 m-auto"
                element-class="w-full"
                errors-class="sm:w-4/5 m-auto"
              />
              <FormulateInput
                name="bandEmail"
                label="Band email?"
                wrapper-class="sm:w-4/5 m-auto"
                element-class="w-full"
                errors-class="sm:w-4/5 m-auto"
              />
            </div>
            <div class="w-full px-4 sm:w-1/2">
              <FormulateInput
                name="city"
                label="City that the band is from?"
                validation="required"
                wrapper-class="sm:w-4/5 m-auto"
                element-class="w-full"
                errors-class="sm:w-4/5 m-auto"
              />
              <FormulateInput
                name="state"
                label="Home state?"
                validation="required"
                wrapper-class="sm:w-4/5 m-auto"
                element-class="w-full"
                errors-class="sm:w-4/5 m-auto"
              />

              <FormulateInput
                name="recordLabel"
                label="Record label?"
                wrapper-class="sm:w-4/5 m-auto"
                element-class="w-full"
                errors-class="sm:w-4/5 m-auto"
              />
            </div>
          </div>
          <section class="px-4 mt-10 sm:m-20">
            <h2 class="text-2xl main_red_text mb-6">Add Band Members</h2>
            <FormulateInput
              type="group"
              name="members"
              :repeatable="true"
              label="Band Members"
              add-label="+ Add members"
              wrapper-class="w-full"
              element-class="w-full"
            >
              <div>
                <FormulateInput
                  name="name"
                  label="Add band member first and last name"
                  required="true"
                  wrapper-class="w-full"
                  element-class="w-full"
                />
              </div>
            </FormulateInput>
            <h2 class="text-center main_red_text text-2xl mb-10 mt-4">
              Add Profile Image
            </h2>
            <div class="flex w-full justify-center">
              <FormulateInput
                type="image"
                name="bandProfileImg"
                label="Select an image to upload"
                help="Select a png, jpg or gif to upload."
                validation="mime:image/jpeg,image/png,image/gif"
                input-class="w-full sm:w-96 "
                wrapper-class="w-full sm:w-96 "
                element-class="w-full sm:w-96 "
                @change="profileImage = $event.target.files[0]"
              />
            </div>
            <!-- <div v-if="image">
              <img :src="image[0].url" alt="fdsfadsf" />
            </div> -->
            <h2 class="text-center main_red_text text-2xl mb-10 mt-4">
              Add Band Bio
            </h2>
            <div class="flex w-full justify-center">
              <FormulateInput
                name="bio"
                type="textarea"
                label="Enter your band bio here"
                input-class="w-full sm:w-96 h-72"
                wrapper-class="w-full sm:w-96 h-72"
                element-class="w-full sm:w-96 h-72"
              />
            </div>
          </section>
          <div>
            <FormulateInput
              type="submit"
              label="Next"
              wrapper-class="w-full mt-10 px-4 sm:mx-10"
              grouping-class="bg-black"
              element-class="w-full"
            />
          </div>
        </FormulateForm>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValues: {},
      errorMessage: '',
      band: null,
      created: false,
      profileImage: '',
      image: '',
    }
  },
  methods: {
    async submitForm() {
      // uploading bandProfileImg
      try {
        const formData = new FormData()
        await formData.append('files', this.profileImage)
        const [image] = await this.$strapi.create('upload', formData)
        this.image = image
        this.formValues.bandProfileImg = image
      } catch (error) {
        console.log(error)
      }

      // making post band to strapi
      try {
        const band = await this.$strapi.create('bands', {
          ...this.formValues,
          users_permissions_user: this.$strapi.user.id,
        })
        this.band = band
        console.log(band, 'this is the band created ')
      } catch (error) {
        this.errorMessage = 'Sorry ... please try again'
        console.log('there was a problem')
      }

      // after creation take user to band admin
      if (this.band) {
        this.$router.push({
          path: '/bandadmin',
        })
      }
    },
  },
}
</script>

<style scoped>
.center-custom {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}
</style>
