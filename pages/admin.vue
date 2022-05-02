<template>
  <div class="pb-20">
    <section class="px-10">
      <h1 class="main_red_text">Admin Panel</h1>
    </section>
    <!-- live stream id and edit button -->
    <section class="px-28 mt-10 m-auto sm:w-4/5">
      <p class="text-4xl main_red_text chedder pb-6">Live Stream Id</p>
      <div v-if="!isEditStream" class="flex items-center">
        <p class="text-2xl">{{ streamData.streamLink }}</p>
        <img class="pl-9" src="~/static/edit.svg" alt="" @click="editStream" />
      </div>
      <!-- Live stream id form -->
      <div v-else>
        <FormulateForm
          FormulateForm
          v-model="streamFormValues"
          @submit="submitStreamForm"
        >
          <FormulateInput
            name="title"
            label="Title"
            validation="required"
            wrapper-class="m-auto sm:w-4/5 "
            element-class="w-full"
            errors-class="sm:w-4/5 m-auto"
          />
          <FormulateInput
            name="streamLink"
            label="youtube stream id"
            validation="required"
            wrapper-class="m-auto sm:w-4/5 "
            element-class="w-full"
            errors-class="sm:w-4/5 m-auto"
          />
          <div class="m-auto sm:w-4/5 flex items-center">
            <div
              class="bg-black text-white shadow-lg px-8 py-4 flex-grow text-center font-medium mr-10"
              @click="editStream"
            >
              Cancel
            </div>
            <button
              type="submit"
              class="bg-black text-white shadow-lg px-8 py-4 flex-grow text-center font-medium"
              @click="submitStreamForm"
            >
              Update
            </button>
          </div>
        </FormulateForm>
      </div>
    </section>
    <!-- Event add button  -->
    <section v-if="!isEventForm" class="px-28 mt-12 m-auto sm:w-4/5">
      <div class="flex items-center">
        <p class="pr-10 main_red_text text-4xl chedder">Add Event</p>
        <img src="~/static/add.svg" alt="add symbol" @click="showEventForm" />
      </div>
    </section>
    <!-- This is the event form -->
    <section v-else class="px-28 mt-10 m-auto sm:w-4/5">
      <p class="main_red_text text-4xl chedder">Create Your Event</p>
      <div>
        <FormulateForm
          class="py-12"
          v-model="eventFormValues"
          @submit="submitEventForm"
        >
          <FormulateInput
            name="title"
            label="title"
            validation="required"
            wrapper-class="m-auto sm:w-4/5 "
            element-class="w-full"
            errors-class="sm:w-4/5 m-auto"
          />
          <div class="double-wide m-auto">
            <FormulateInput
              name="venueName"
              label="Venue Name"
              wrapper-class="m-0  "
              element-class="w-full"
              errors-class="sm:w-4/5 m-auto"
            />
            <FormulateInput
              type="date"
              name="date"
              label="date"
              wrapper-class="m-0  "
              element-class="w-full"
              errors-class="sm:w-4/5 m-auto"
            />
          </div>
        </FormulateForm>
        <div class="m-auto sm:w-4/5 flex items-center">
          <div
            class="bg-black text-white shadow-lg px-8 py-4 flex-grow text-center font-medium mr-10"
            @click="showEventForm"
          >
            Cancel
          </div>
          <button
            type="submit"
            class="bg-black text-white shadow-lg px-8 py-4 flex-grow text-center font-medium"
            @click="submitEventForm"
          >
            Update
          </button>
        </div>
      </div>
    </section>
    <pre>{{ dayOfEvent }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      streamData: {},
      isEditStream: false,
      isEventForm: false,
      streamFormValues: {},
      eventFormValues: {},
    }
  },
  async fetch() {
    this.streamData = await this.$strapi.find('live-stream')
  },
  computed: {
    dayOfEvent: function () {
      if (this.eventFormValues.date) {
        const dateData = this.eventFormValues.date.toString()
        const day = new Date(dateData).getDay()
        const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
        if (day + 1 === 7) {
          return 'Sun'
        } else {
          return week[day + 1]
        }
      }
      return 'Pending Date'
    },
  },

  methods: {
    editStream: function () {
      this.isEditStream = !this.isEditStream
    },
    showEventForm: function () {
      this.isEventForm = !this.isEventForm
    },
    submitEventForm: function () {
      return 'hello'
    },
    submitStreamForm: async function (e) {
      e.preventDefault()
      // submit update to strapi live-stream streamLink
      const updatedStream = await this.$strapi.update(
        'live-stream',
        this.streamFormValues
      )
      this.streamData = updatedStream
      this.editStream()
    },
  },
}
</script>

<style lang="css" scoped>
.double-wide {
  display: flex;
  max-width: 1440px;
}
.double-wide .formulate-input {
  flex-grow: 1;
}
.double-wide .formulate-input:first-child {
  margin-right: 0.5em;
}
.double-wide .formulate-input:last-child {
  margin-left: 0.5em;
}
</style>
