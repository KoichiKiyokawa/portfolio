<template>
  <div class="container">
    <h1 class="title" data-aos="fade-up">About Me</h1>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  created() {
    AOS.init()
  }
}
</script>

<style scoped>
.title {
  margin-top: 50vh;
}
</style>
