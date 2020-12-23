<template>
  <section
    id="contact"
    class="bg-black bg-opacity-70  text-white py-16 section "
  >
    <div class="container mx-auto h-full px-12">
      <div class="flex flex-col align-middle justify-center  ">
        <div class="flex flex-col md:flex-row justify-between   ">
          <div>
            <h1 class="text-2xl  mb-4">Address and Phone</h1>
            <div class="">
              <h1 class="text-lg">Dnyaneshwar Jawane</h1>
              <p class="text-base">
                Laxmi Niwas,Mirajgoan ,Tal-Karjat,Ahmadnagr-414401
                <br />Maharastra,India
              </p>
              <a class="hover:text-blue-600" href="tel:8806892373">
                <span class=" text-lg ">
                  <fa class=" mr-4 " :icon="['fas', 'phone-square']"></fa>
                  8806892373
                </span>
              </a>
              <br />
              <a
                class="hover:text-blue-600"
                href="mailto:jawanednyaneshwar1@gmail.com"
              >
                <span class="text-lg  ">
                  <fa class="  mr-4" :icon="['fas', 'envelope']"></fa>
                  jawanednyaneshwar1@gmail.com
                </span>
              </a>
            </div>
          </div>
          <div class="mt-4   md:mt-0">
            <div class="text-3xl mb-4">
              Thanks
              <fa
                class="animate-pulse text-red-700 text-lg"
                :icon="['fas', 'heart']"
              ></fa>
            </div>
            <div class=" space-y-2">
              <p>
                Thanks to all my friends. Who always suports me and being me as
                motivated.
              </p>
              <h1 class="text-3xl mt-4">Special Thanks</h1>
              <p>
                Savrabh Jadhv <br />
                Zahanara Lela
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 class="mt-10 text-xs float-right">
        Copyright© 2020 portfolio. All rights reserved.
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'contact'
}
</script>

<style></style>
