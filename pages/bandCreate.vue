<template>
  <div>
    <h1 class="main_red_text text-center">Add Your Band Info</h1>
    <section class="w-full sm:w-3/4 sm:m-auto 2xl:w-3/6">
      <p>Step 2/2</p>
      <div class="w-full mt-6 mb-6">
        <FormulateForm v-model="formValues">
          <div class="flex-col sm:flex sm:flex-row">
            <div class="w-full px-4 sm:w-1/2">
              <FormulateInput
                name="bandname"
                label="What is the band name"
                validation="required"
                wrapper-class="m-auto sm:w-4/5 "
                element-class="w-full"
              />
              <FormulateInput
                name="genre"
                label="What is the genre"
                validation="required"
                wrapper-class="sm:w-4/5 m-auto"
                element-class="w-full"
              />
              <FormulateInput
                name="bandmanager"
                label="Band manager name?"
                wrapper-class="sm:w-4/5 m-auto"
                element-class="w-full"
              />
            </div>
            <div class="w-full px-4 sm:w-1/2">
              <FormulateInput
                name="city"
                label="City that the band is from?"
                validation="required"
                wrapper-class="sm:w-4/5 m-auto"
                element-class="w-full"
              />
              <FormulateInput
                name="state"
                label="Home state?"
                validation="required"
                wrapper-class="sm:w-4/5 m-auto"
                element-class="w-full"
              />

              <FormulateInput
                name="recordlabel"
                label="Record label?"
                wrapper-class="sm:w-4/5 m-auto"
                element-class="w-full"
              />
            </div>
            <div class="w-full px-4 sm:w-1/2">
              <FormulateInput
                name="memberFirstName"
                label="Member First Name?"
                validation="required"
                wrapper-class="sm:w-4/5 m-auto"
                element-class="w-full"
              />
              <FormulateInput
                name="memberLastName"
                label="Member Lastname?"
                validation="required"
                wrapper-class="sm:w-4/5 m-auto"
                element-class="w-full"
              />

              <FormulateInput
                name="recordlabel"
                label="Record label?"
                wrapper-class="sm:w-4/5 m-auto"
                element-class="w-full"
              />
            </div>
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
    }
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
