<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div>
      <v-flex>
      <video ref="video" id="video" width="512" height="512" autoplay></video>
      <v-btn color="info" @click="capture()">capture</v-btn>

      <canvas ref="canvas" id="canvas" width="512" height="512"></canvas>
      </v-flex>
    </div>

  </div>
</template>

<script src="./face-min.js"></script>
<script src="./tracking-min.js"></script>

<script>
export default {
  name: 'top',
  data () {
    return {
      msg: '学部診断アプリ',
      video: {},
      medias: {},
      canvas: {},
      tracker: {}
    }
  },
  mounted () {
    // このアプリがロードされたときに起動
    this.medias = {audio: false, video: true}
    this.video = this.$refs.video
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.video.srcObject = stream
        this.video.play()
      })
    }
  },
  methods: {
    capture () {
      this.canvas = this.$refs.canvas
      this.context = this.canvas.getContext('2d').drawImage(this.video, 0, 0, 512, 512)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
