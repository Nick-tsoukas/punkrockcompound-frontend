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
          <section class="px-4 mt-10 sm:m-10">
            <h2 class="text-2xl main_red_text mb-6">Add Band Members</h2>
            <!-- <FormulateInput
              type="group"
              name="members"
              :repeatable="true"
              label="Band Members"
              add-label="+ Add members"
            >
              <div>
                <FormulateInput
                  name="name"
                  label="Add band member first and last name"
                  required="true"
                />
              </div>
            </FormulateInput> -->
          </section>
          <div>
            <FormulateInput
              type="submit"
              label="Next"
              wrapper-class="w-full mt-10 px-4 sm:mx-10"
            />
          </div>
        </FormulateForm>
      </div>
    </section>
    <pre>{{ band }}</pre>
    <pre>{{ $strapi.user }}</pre>
    <h2>Form values</h2>
    <pre>{{ errorMessage }}</pre>
    <p>band here</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValues: {},
      errorMessage: '',
      band: null,
    }
  },
  methods: {
    async submitForm() {
      try {
        const band = await this.$strapi.create('bands', {
          data: {
            ...this.formValues,
          },
        })
        this.band = band
      } catch (error) {
        this.errorMessage = 'Sorry ... please try again'
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
