<template>
  <header class="fixed  bottom-0 inset-y-0 z-10  h-screen">
    <div class="flex flex-col align-middle justify-center  h-full">
      <nav
        @mouseenter="showName = true"
        @mouseleave="showName = false"
        class="flex flex-col justify-center  h-auto bg-black bg-opacity-20 hover:bg-opacity-90 py-4 px-1 rounded-r-lg -mt-6"
      >
        <router-link
          class="text-blue-900 hover:text-blue-300"
          v-for="(link, index) in links"
          :key="index"
          :to="{ name: link.nameOfComponent, hash: '#' + link.hash }"
          :title="link.name"
          ><span class="  text-lg "
            ><fa class="inline-block " :icon="['fas', link.icon]"></fa>
            <transition name="slide">
              <h1 v-show="showName" class=" mx-4 inline-block">
                {{ link.name }}
              </h1>
            </transition>
          </span>
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showName: false,
      links: [
        {
          nameOfComponent: 'home',
          hash: 'aboutme',
          name: 'AboutMe',
          icon: 'house-user'
        },
        { nameOfComponent: 'home', hash: 'work', name: 'Work', icon: 'tasks' },
        {
          nameOfComponent: 'home',
          hash: 'skills',
          name: 'Skills',
          icon: 'laptop-house'
        },
        {
          nameOfComponent: 'home',
          hash: 'message',
          name: 'Message',
          icon: 'sms'
        },
        {
          nameOfComponent: 'home',
          hash: 'contact',
          name: 'Contact',
          icon: 'phone-square'
        }
      ]
    }
  }
}
</script>

<style scoped>
.router-link-exact-active.router-link-active {
  @apply text-blue-300;
}
.slide-enter-active {
  @apply transition-all;
  @apply duration-700;
  @apply ease-out;
  /* transition: all 0.3s ease-out; */
}
.slide-enter {
  @apply transform;
  @apply -translate-x-full;
  /* transform: translateX(-100%); */
}
</style>
