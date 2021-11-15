<template>
  <div class="  w-full mx-auto text-lead">
    <BaseNav />
    <router-view
      class="object-cover bg-no-repeat bg-fixed "
      :style="`background-image:url(${require('@/assets/img/bg.svg')})`"
    ></router-view>
    <ScrollTop />
  </div>
</template>

<script>
import BaseNav from '../components/BaseNav.vue'
import ScrollTop from '../components/ScrollTop.vue'

export default {
  components: { BaseNav, ScrollTop }
}
</script>

<style>
html {
  --thumbBG: #90a4ae;
}
::-webkit-scrollbar {
  width: 5px;
}
body {
  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}
::-webkit-scrollbar-track {
  background: var(--scrollbarBG);
}
::-webkit-scrollbar-thumb {
  background-color: var(--thumbBG);
  border-radius: 6px;
  border: 3px solid var(--scrollbarBG);
}
.page-margin {
  @apply container;
  @apply mx-auto;
  @apply py-6;
}
.primary-gradient {
  @apply bg-gradient-to-tr;
  @apply from-secondary;
  @apply to-primary;
}
</style>
