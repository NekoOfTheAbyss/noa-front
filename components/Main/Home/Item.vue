<template>
        <div class="py-4 max-w-full flex flex-row items-stretch">
          <div
            class=" p-8 block ml-0 w-full transform tracking-wide transition duration-500 ease-in-out hover:-translate-y-1 hover:shadow-md"
          >
            <div class="flex flex-col md:flex-row justify-start items-center w-full p-4">
              <div class="px-4 shrink-0">
                <img
                  :src="image"
                  alt="Avatar"
                  class="rounded-full w-48 mx-auto"
                />
              </div>
              <div class="card-container">
                <div class="text-center md:text-left mx-auto">
                  <a
                    :href="link"
                    class="font-bold tracking-wider text-white text-lg uppercase py-4 mx-auto"
                    >{{title}}</a
                  >
                </div>
                <p class="text-white py-4 leading-6">
                  {{description}}
                </p>
                <p
                  class="uppercase tracking-wide text-sm text-nett-maid font-semibold py-2 mx-auto text-center md:text-left"
                >
                  {{contribution}}
                </p>
              </div>
            </div>
          </div>
        </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return `The Endless Void`
      },
    },
    description: {
      type: String,
      default() {
        return `The Endless Void`
      },
    },
    contribution: {
      type: String,
      default() {
        return `The Endless Void`
      },
    },
    image: {
      type: String,
      default() {
        return `/icon.png`
      },
    },
    link: {
      type: String,
      default() {
        return `/discord/server`
      },
    },
  },
}
</script>

