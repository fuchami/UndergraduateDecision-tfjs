<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div>
      <v-flex>
      <video ref="video" id="video" width="256" height="256" autoplay></video>
      </v-flex>
    </div>

  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      msg: '学部診断アプリ',
      video: {},
      medias: {},
      canvas: {},
      captures: []
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
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
