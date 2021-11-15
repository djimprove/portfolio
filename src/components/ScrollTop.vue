<template>
  <div v-show="isBottom">
    <button
      @click="scrollTop"
      class="fixed bottom-2 opacity-40  right-2 text-white bg-blue-600 px-3  py-1 rounded-lg focus:outline-none hover:animate-bounce hover:opacity-100 "
    >
      <fa :icon="['fas', 'chevron-up']"></fa>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBottom: false
      //   pushing hash on routes scroll
    }
  },
  methods: {
    async scrollListener() {
      this.isBottom = await (window.scrollY > 200)
    },
    scrollTop() {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy() {
    window.removeEventListener('scroll')
  }
}
</script>

<style></style>
