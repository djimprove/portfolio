<template>
  <div class="">
    <AboutMe />
    <Work />
    <Skills />
    <Message />
    <Contact />
  </div>
</template>

<script>
import AboutMe from './AboutMe'
import Work from './Work.vue'
import Skills from './Skills'
import Contact from './Contact'
import Message from './Message.vue'

export default {
  components: { Skills, AboutMe, Work, Contact, Message }
}
</script>

<style></style>
