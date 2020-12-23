<template>
  <section
    id="message"
    class="bg-black bg-opacity-70  text-blue-600  section rounded-t-lg"
  >
    <div class="container mx-auto px-12 py-10">
      <form class=" w-full">
        <ul class="w-full">
          <li><label for="email"> Email</label></li>
          <li>
            <input
              required
              type="email"
              name=""
              class="w-full md:w-1/3 text-black py-1 px-3  rounded-md bg-gray-300 focus:bg-white"
              id="email"
            />
          </li>
          <li><label for="message">Message</label></li>
          <li>
            <textarea
              required
              name="message"
              id=""
              class="w-full md:w-2/3 text-black h-28 px-3 py-1 bg-gray-300 rounded-md focus:bg-white"
            ></textarea>
          </li>
          <li>
            <button
              class="bg-blue-600 w-1/2 md:w-2/12 py-2 rounded-md hover:bg-blue-800 text-white "
              type="submit"
            >
              Submit
            </button>
          </li>
        </ul>
      </form>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
li {
  @apply mb-3;
}
</style>
