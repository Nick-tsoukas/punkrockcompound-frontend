<template>
  <div class="pb-20">
    <section class="px-10">
      <h1 class="main_red_text">Admin Panel</h1>
    </section>
    <!-- live stream id and edit button -->
    <section class="px-4 sm:px-28 mt-10 m-auto sm:w-4/5">
      <div class="flex items-center pb-6">
        <p class="text-4xl main_red_text chedder">Live Stream</p>
        <img class="pl-9" src="~/static/edit.svg" alt="" @click="editStream" />
      </div>

      <p class="text-2xl">
        <span class="font-semibold">Stream Title:</span> {{ streamData.title }}
      </p>

      <div v-if="!isEditStream" class="flex items-center">
        <p class="text-2xl">
          <span class="font-semibold">Link: </span> {{ streamData.streamLink }}
        </p>
      </div>

      <!-- Live stream id form -->
      <div v-else>
        <FormulateForm v-model="streamFormValues" @submit="submitStreamForm">
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
      <div v-if="!featuredEvent" class="flex items-center">
        <p class="pr-10 main_red_text text-4xl chedder">Create Your Event</p>

        <img src="~/static/add.svg" alt="add symbol" @click="showEventForm" />
      </div>
    </section>
    <!-- This is the event form -->
    <section v-else class="px-4 sm:px-28 mt-10 m-auto sm:w-4/5">
      <div v-if="!isLoading">
        <FormulateForm
          v-model="eventFormValues"
          class="py-12"
          @submit="submitEventForm"
        >
          <h2 class="text-center main_red_text my-8">
            Event title and venue details
          </h2>
          <FormulateInput
            name="title"
            label="title"
            validation="required"
            :placeholder="featuredEvent.title"
            wrapper-class="m-auto sm:w-4/5 "
            element-class="w-full"
            errors-class="sm:w-4/5 m-auto"
          />

          <div class="double-wide m-auto">
            <FormulateInput
              class="double-form-item"
              name="venueName"
              :placeholder="featuredEvent.venueName"
              label="Venue Name"
              wrapper-class="m-0  "
              element-class="w-full"
              errors-class="sm:w-4/5 m-auto"
            />
            <FormulateInput
              :placeholder="featuredEvent.venueLink"
              class="double-form-item"
              name="venueLink"
              label="venue link"
              wrapper-class="m-0  "
              element-class="w-full"
              errors-class="sm:w-4/5 m-auto"
            />
          </div>
          <div class="double-wide m-auto">
            <FormulateInput
              class="double-form-item"
              :placeholder="featuredEvent.city"
              name="city"
              label="city"
              wrapper-class="m-0  "
              element-class="w-full"
              errors-class="sm:w-4/5 m-auto"
            />
            <FormulateInput
              class="double-form-item"
              :placeholder="featuredEvent.state"
              name="state"
              label="state"
              wrapper-class="m-0  "
              element-class="w-full"
              errors-class="sm:w-4/5 m-auto"
            />
          </div>
          <FormulateInput
            name="streetName"
            label="steet name"
            :placeholder="featuredEvent.streetName"
            wrapper-class="m-auto sm:w-4/5 "
            element-class="w-full"
            errors-class="sm:w-4/5 m-auto"
          />
          <FormulateInput
            name="ticketLink"
            :placeholder="featuredEvent.ticketLink"
            label="link to tickets"
            validation="required"
            wrapper-class="m-auto sm:w-4/5 "
            element-class="w-full"
            errors-class="sm:w-4/5 m-auto"
          />

          <h2 class="text-center main_red_text my-8">Date and Time</h2>
          <div class="double-wide m-auto">
            <FormulateInput
              onfocus="(this.type='datetime-local')"
              type="text"
              name="date"
              :placeholder="date + ' ' + time"
              label="Sample datetime-local input"
              validation="required"
              wrapper-class="m-0  "
              element-class="w-1/2"
              errors-class="sm:w-4/5 m-auto"
            />
          </div>
          <h2 class="main_red_text my-8 text-center">Event Details</h2>
          <div class="double-wide m-auto">
            <FormulateInput
              class="double-form-item"
              name="headlinerOne"
              :placeholder="featuredEvent.headlinerOne"
              label="headlining band one"
              wrapper-class="m-0  "
              element-class="w-full"
              errors-class="sm:w-4/5 m-auto"
            />
            <FormulateInput
              class="double-form-item"
              name="headlinerTwo"
              :placeholder="featuredEvent.headlinerTwo"
              label="headlining band 2"
              wrapper-class="m-0  "
              element-class="w-full"
              errors-class="sm:w-4/5 m-auto"
            />
          </div>

          <FormulateInput
            type="textarea"
            name="eventDescription"
            label="description"
            :placeholder="featuredEvent.eventDescription"
            validation="required"
            wrapper-class="m-auto sm:w-4/5 "
            element-class="w-full"
            errors-class="sm:w-4/5 m-auto"
          />
          <div class="w-full">
            <FormulateInput
              type="image"
              name="eventPoster"
              label="Select an image to upload"
              validation="mime:image/jpeg,image/png,image/gif"
              wrapper-class="m-auto  sm:w-4/5 "
              element-class="w-full "
              errors-class="sm:w-4/5 m-auto"
              @change="eventPoster = $event.target.files[0]"
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
      <div v-if="isLoading">
        <img
          class="mx-auto w-1/2"
          src="~/static/spinner.svg"
          alt="loading icon is now being shown"
        />
      </div>
    </section>
    <section
      v-if="featuredEvent && isEventForm === false"
      class="px-4 sm:px-28 mt-10 m-auto parent sm:w-4/5"
    >
      <div class="flex items-center pb-6">
        <h3 class="text-4xl main_red_text chedder font-semibold">
          Featured Event
        </h3>
        <img
          class="pl-9"
          src="~/static/edit.svg"
          alt=""
          @click="showEventForm"
        />
      </div>

      <img
        class="mb-4 h-96 mx-auto sm:mx-0"
        :src="featuredEvent.eventPoster.url"
        alt="a picture of donkeys"
      />
      <div class="flex items-center mb-4">
        <span class="mr-4 font-semibold">Is Featured</span>
        <label class="switch">
          <input
            v-if="featuredEvent.isEvent"
            id="check"
            type="checkbox"
            checked
            @click="toggleEvent"
          />
          <input v-else id="check" type="checkbox" @click="toggleEvent" />
          <span class="slider round"></span>
        </label>
      </div>
      <p class="text-lg">
        <span class="font-semibold">Event Title:</span>
        {{ featuredEvent.title }}
      </p>
      <p class="text-lg"><span class="font-semibold">Date:</span> {{ date }}</p>
      <p class="text-lg"><span class="font-semibold">Time:</span> {{ time }}</p>
      <p class="text-lg">
        <span class="font-semibold">Venue Name:</span>
        {{ featuredEvent.venueName }}
      </p>
      <p class="text-lg font-semibold">Address</p>
      <p class="text-lg">
        {{ featuredEvent.streetAddress }} {{ featuredEvent.streetName }}
      </p>
      <p class="text-lg">{{ featuredEvent.city }}, {{ featuredEvent.state }}</p>

      <p
        v-if="featuredEvent.headlinerOne && featuredEvent.headlinerTwo"
        class="text-lg"
      >
        <span class="font-bold">Headliners:</span>
        {{ featuredEvent.headlinerOne }},
        {{ featuredEvent.headlinerTwo }}
      </p>
      <p v-if="featuredEvent.ticketLink" class="text-lg">
        Ticket Link: {{ featuredEvent.ticketLink }}
      </p>
      <p class="text-lg">
        <span class="font-bold">Description:</span>
        {{ featuredEvent.eventDescription }}
      </p>
    </section>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data() {
    return {
      eventPoster: '',
      image: '',
      featuredEvent: null,
      streamData: {},
      isEditStream: false,
      isEventForm: false,
      streamFormValues: {},
      eventFormValues: {},
      date: '',
      time: '',
      isLoading: false,
    }
  },
  async fetch() {
    this.streamData = await this.$strapi.find('live-stream')
    try {
      const event = await this.$strapi.find('featured-event')
      this.featuredEvent = event
      const dateData = event.date.toString()
      this.date = moment(String(dateData)).format('MM/DD/YYYY')
      this.time = moment(String(dateData)).format('hh:mm')
    } catch (error) {
      console.log('there is no featured event')
    }
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
    toggleEvent: function () {
      const inputSlider = document.getElementById('check')
      this.$strapi.update('featured-event', {
        isEvent: inputSlider.checked,
      })
      this.featuredEvent.isEvent = inputSlider.checked
    },

    editStream: function () {
      this.isEditStream = !this.isEditStream
    },
    showEventForm: function () {
      this.isEventForm = !this.isEventForm
    },
    submitEventForm: async function () {
      this.isLoading = true
      try {
        const formData = new FormData()
        await formData.append('files', this.eventPoster)
        const [image] = await this.$strapi.create('upload', formData)
        this.image = image
        this.eventFormValues.eventPoster = image
      } catch (error) {
        console.log(error)
      }
      const event = await this.$strapi.update('featured-event', {
        ...this.eventFormValues,
      })
      //   add loader logic at some point in time please
      this.featuredEvent = event
      //   this.isLoading = false
      this.showEventForm()
      this.isLoading = false
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
.formulate-input[data-classification='file'] .formulate-input-upload-area {
  min-height: 500px !important;
}
.double-wide {
  display: flex;
  max-width: 1460px;
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

.double-form-item {
  max-width: 722px;
}

.parent p {
  margin-bottom: 1em;
}

/* toggle switch css */

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
