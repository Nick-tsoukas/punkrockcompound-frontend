<template>
  <div class="w-full lg:w-4/5 lg:mt-20 mx-auto">
    <!-- top player container  -->
    <div class="flex flex-col lg:flex-row 2xl:w-2/3 mx-auto">
      <div>
        <img
          class="shaddow-md w-full lg:w-auto"
          :src="albumAlbum[0].albumCover.formats.small.url"
          alt=""
        />
        <div class="h-28 w-full bg-black flex items-center justify-center">
          <h2 class="text-white">{{ albumAlbum[0].title }}</h2>
        </div>
      </div>
      <div class="flex flex-col flex-grow">
        <div v-if="!song" class="flex-grow h-full px-10 py-10 lg:px-24">
          <h2 class="main_red_text py-4 lg:py-10">Now Playing</h2>
          <div class="lg:px-0">
            <h3 class="text-2xl">{{ songSong.songTitle }}</h3>
            <p class="font-semibold text-xl mb-4">By {{ bandBand.bandName }}</p>
          </div>
        </div>
        <div v-else class="flex-grow h-full px-10 py-10 lg:px-24">
          <h2 class="main_red_text py-4 lg:py-10">Now Playing</h2>
          <div class="lg:px-0">
            <h3 class="text-2xl">{{ song.songTitle }}</h3>
            <p class="font-semibold text-xl mb-4">By {{ bandBand.bandName }}</p>
          </div>
        </div>
        <div
          class="bg-black min-h-[112px] w-full flex items-center justify-center"
        >
          <audio id="music" height="0" width="0">
            <source
              id="audioSource"
              :src="song ? song.songFile.url : songSong.songFile.url"
            />
          </audio>

          <img
            v-if="!isPlaying"
            class="mr-2 lg:mr-8"
            src="~/static/play.svg"
            alt="Play button"
            @click="play"
          />
          <img
            v-else
            class="mr-8 h-[30px]"
            src="~/static/stop.svg"
            alt="stop button"
            @click="stop"
          />
          <div class="progress w-4/5">
            <p class="start text-white text-center"></p>
            <div class="progress-bar">
              <div class="now"></div>
            </div>
            <p class="end text-white"></p>
          </div>
        </div>
      </div>
    </div>
    <section class="lg:mt-20">
      <table class="mx-auto w-full lg:w-4/6">
        <tr class="border-b-2 border-black py-8 h-[70px]">
          <th class="w-1/3 text-left chedder text-2xl pl-8">Track</th>
          <th class="w-1/3 text-center chedder text-2xl">Title</th>
          <th class="w-1/3 text-right chedder text-2xl pr-8">Favorite</th>
        </tr>
        <tr
          v-for="(songData, index) in songsSongs"
          :key="index + 100"
          class="h-[70px] border-b-2 border-black"
        >
          <td class="w-1/3 text-left pl-8">
            <img
              v-if="thisSongPlaying === songData.id && isPlaying"
              class="h-[25px] inline pr-2 lg:pr-8"
              src="~/static/stop.svg"
              alt=""
              @click="setSong(songData, true)"
            /><img
              v-else
              class="inline pr-2 lg:pr-8"
              src="~/static/play.svg"
              alt=""
              @click="setSong(songData)"
            /><span class="ptmono">{{ index + 1 }} play</span>
          </td>
          <td class="w-1/3 text-center ptmono">{{ songData.songTitle }}</td>
          <td class="w-1/3 text-right pr-8 ptmono">Favorite</td>
        </tr>
      </table>
    </section>

    <h2>Albums</h2>
    <SliderContainer id="main-container" class="py-10">
      <ContentCard
        v-for="(albumData, index) in albumSets"
        :key="index"
        :bandId="bandBand.id"
        :title="albumData.title"
        :albumImg="albumData.albumCover.url"
        :albumId="albumData.id"
        :album="albumData.album"
      />
    </SliderContainer>
    <pre>{{ albumSets }}</pre>
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi, route }) {
    const bandBand = await $strapi.findOne('bands', route.query.band)
    const albumIdId = await route.params.id
    const albumSets = bandBand.album
    const albumAlbum = await bandBand.album.filter((album, index) => {
      return album.id === parseInt(route.params.id)
    })
    const songsSongs = await albumAlbum[0].songs
    const songSong = await albumAlbum[0].songs[0]
    return {
      bandBand,
      albumIdId,
      albumAlbum,
      songsSongs,
      songSong,
      albumSets,
    }
  },
  data() {
    return {
      albumId: '',
      album: null,
      band: '',
      isPlaying: false,
      songs: null,
      song: null,
      thisSongPlaying: '',
      showPause: null,
    }
  },
  computed: {
    albumFinal: function () {
      return this.album[0]
    },
  },
  async mounted() {
    const audio = await document.getElementById('music')
    const progressBar = document.querySelector('.progress-bar')
    console.log(progressBar, 'progress')
    const now = document.querySelector('.now')

    // console.log('this is the audio duration ', conversion(audio.duration))
    const start = document.querySelector('.start')
    const end = document.querySelector('.end')

    function conversion(value) {
      let minute = Math.floor(value / 60)
      minute = minute.toString().length === 1 ? '0' + minute : minute
      let second = Math.round(value % 60)
      second = second.toString().length === 1 ? '0' + second : second
      return `${minute}:${second}`
    }

    setTimeout(() => {
      progressBar.addEventListener('click', function (event) {
        const coordStart = this.getBoundingClientRect().left
        const coordEnd = event.pageX
        const p = (coordEnd - coordStart) / this.offsetWidth
        now.style.width = p.toFixed(3) * 100 + '%'
        audio.currentTime = p * audio.duration
        audio.play()
      })
    }, 100)

    setInterval(() => {
      start.innerHTML = conversion(audio.currentTime)
      end.innerHTML = conversion(audio.duration)
      now.style.width =
        (audio.currentTime / audio.duration.toFixed(3)) * 100 + '%'
    }, 1000)
  },
  methods: {
    play: function () {
      const audio = document.getElementById('music')
      console.log(audio.duration)
      audio.play()
      this.isPlaying = true
    },
    stop: function () {
      const audio = document.getElementById('music')
      audio.pause()
      this.isPlaying = false
    },
    setSong: function (songData, stop) {
      this.song = songData
      const audio = document.getElementById('music')

      if (stop) {
        this.isPlaying = false
        audio.pause()
        this.ShowPause = !this.ShowPause
      } else {
        audio.load()
        audio.play()
        this.isPlaying = true
      }
      this.thisSongPlaying = songData.id

      console.log(this.song, songData, 'song data')
    },
  },
}
</script>

<style scoped>
.progress {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.progress-bar {
  position: relative;
  width: 70%;
  height: 10px;
  background-color: #eee;
  vertical-align: 2px;
  border-radius: 3px;
  cursor: pointer;
}

.now {
  position: absolute;
  left: 0;
  display: inline-block;
  height: 10px;
  width: 70%;
  background: red;
}

.now:after {
  content: '';
  position: absolute;
  left: 100%;
  width: 2px;
  height: 10px;
  background-color: red;
}

@media (max-width: 500px) {
  .progress-bar {
    width: 60%;
  }

  .now {
    width: 60%;
  }
}
</style>
