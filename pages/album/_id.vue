<template>
  <div class="flex w-4/5 mx-auto">
    <!-- top player container  -->
    <div v-if="album">
      <img :src="album[0].albumCover.formats.small.url" alt="" />
      <div class="h-28 w-full bg-black flex items-center justify-center">
        <h2 class="text-white">{{ album[0].title }}</h2>
      </div>
    </div>
    <div class="flex flex-col flex-grow px-20">
      <div class="flex-grow h-full">
        <h2>Now Playing</h2>
        <p>Song Name</p>
        <p>By BandTitle</p>
      </div>
      <div class="bg-black h-auto w-full mb-4">
        <audio
          id="music"
          height="0"
          width="0"
          src="http://dl.stream.qqmusic.qq.com/C400003RCA7t0y6du5.m4a?vkey=6853C20C7E3DAA08D9D79173735CFB95EDF5E926D72FE3BA53CECCC48947127857C41890640C1AE69AAB050AA9B8874767A48AF5BF9066A0&guid=7984684460&uin=0&fromtag=66"
        ></audio>

        <div class="progress">
          <span class="start"></span>
          <div class="progress-bar">
            <div class="now"></div>
          </div>
          <span class="end"></span>
        </div>
        <!-- player bar -->
        <!-- <div class="h-[60px] flex px-4 items-center">
          <img src="~/static/play.svg" alt="" />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      albumId: '',
      album: null,
      band: '',
    }
  },
  computed: {
    albumFinal: function () {
      return this.album[0]
    },
  },
  async mounted() {
    this.band = await this.$strapi.findOne('bands', this.$route.query.band)
    this.albumId = await this.$route.params.id

    this.album = await this.band.album.filter((album, index) => {
      return album.id === parseInt(this.$route.params.id)
    })
    const audio = document.getElementById('music')
    const start = document.querySelector('.start')
    const end = document.querySelector('.end')
    const progressBar = document.querySelector('.progress-bar')
    const now = document.querySelector('.now')
    console.log(audio, start, end, progressBar, now)

    function conversion(value) {
      let minute = Math.floor(value / 60)
      minute = minute.toString().length === 1 ? '0' + minute : minute
      let second = Math.round(value % 60)
      second = second.toString().length === 1 ? '0' + second : second
      return `${minute}:${second}`
    }

    audio.onloadedmetadata = function () {
      end.innerHTML = conversion(audio.duration)
      start.innerHTML = conversion(audio.currentTime)
    }

    progressBar.addEventListener('click', function (event) {
      const coordStart = this.getBoundingClientRect().left
      const coordEnd = event.pageX
      const p = (coordEnd - coordStart) / this.offsetWidth
      now.style.width = p.toFixed(3) * 100 + '%'

      audio.currentTime = p * audio.duration
      audio.play()
    })

    setInterval(() => {
      start.innerHTML = conversion(audio.currentTime)
      now.style.width =
        (audio.currentTime / audio.duration.toFixed(3)) * 100 + '%'
    }, 1000)
  },
}
</script>

<style scoped>
.progress {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 380px;
  margin: 100px auto;
}

.progress-bar {
  position: relative;
  width: 70%;
  height: 5px;
  background-color: #eee;
  vertical-align: 2px;
  border-radius: 3px;
  cursor: pointer;
}

.now {
  position: absolute;
  left: 0;
  display: inline-block;
  height: 5px;
  width: 70%;
  background: #31c27c;
}

.now:after {
  content: '';
  position: absolute;
  left: 100%;
  width: 3px;
  height: 7px;
  background-color: lightblue;
}
</style>
