<template>
  <section id="aboutme" class="h-screen md:container md:mx-auto section">
    <div class="container mx-auto h-full px-12">
      <div
        class="text-white h-full  rounded-lg  flex flex-col md:flex-row  md:justify-between justify-center align-middle"
      >
        <div class="flex justify-center items-center md:max-w-sm  md:py-12  ">
          <img
            class="w-52 h-56 md:w-4/5 md:h-3/5  rounded-3xl "
            src="@/assets/img/mypic.jpg"
            alt="profilepic"
          />
        </div>

        <ul
          class=" my-8 space-y-4 flex flex-col justify-center align-middle text-center  md:w-2/3"
        >
          <li>
            <h1 class="text-3xl animate-bounce">
              I'm Dnyaneshwar Jawane
            </h1>
          </li>
          <li class="text-base">
            <h1>
              About myself what should i tell....
              <fa class="animate-pulse" :icon="['fas', 'smile-wink']"></fa>
            </h1>
            <p>
              I'm Software developer in
              <a
                class="italic hover:text-blue-600"
                href="https://finarkein.com/"
                >Finarkein Analytics Pvt LTD Pune.</a
              >
            </p>
          </li>
          <li>
            <p class="text-sm">
              I have been working on
              <span class="italic bold">
                Javascript | VueJS | NuxtJs | NodeJs | Bootsrap | HTML5 |
                TailwindCss | Java 8 | SpringBoot | JPA | etc
              </span>
            </p>
          </li>
          <li
            class="flex flex-row  text-3xl  hover:bg-black bg-blue-700 rounded-lg self-center  space-x-10 px-6 py-1"
          >
            <a
              href="https://www.linkedin.com/in/dnyaneshwar-jawane-b5b7a8169/"
              class="hover:text-blue-600 text-2xl"
              title="Linkdin"
            >
              <fa :icon="['fab', 'linkedin']"></fa>
            </a>
            <a href="#" class="hover:text-blue-600 text-2xl" title="Instagram">
              <fa :icon="['fab', 'instagram']"></fa>
            </a>
            <a href="#" class="hover:text-blue-600 text-2xl" title="Facebook">
              <fa :icon="['fab', 'facebook']"></fa>
            </a>
            <a
              href="https://github.com/djimprove"
              class="hover:text-blue-600 text-2xl"
              title="Github"
            >
              <fa :icon="['fab', 'github']"></fa>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'aboutme'
}
</script>

<style scoped>
.slide-enter-active {
  @apply transition-all;
  @apply duration-700;
  @apply ease-out;
}
.slide-enter {
  @apply transform;
  @apply -translate-x-full;
}
</style>
