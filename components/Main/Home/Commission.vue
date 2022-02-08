<template>
  <div class="p-4">
    <div
      class="
        p-4
        rounded-md
        mx-auto
        bg-grayshit-600
        text-white
        h-full
        block
        bg-opacity-20
        transform
        tracking-wide
        transition
        duration-500
        ease-in-out group
        hover:-translate-y-1 hover:scale-110
      "
    >
      <NuxtLink :to="link" class="md:flex p-4">
        <div class="md:flex-shrink-0">
          <img
            :src="image"
            class="w-full md:h-48 md:w-48 object-cover rounded-full"
            alt="Abyss"
          />
        </div>
        <font class="flex-grow p-2 px-8">
          <p class="text-lg font-bold pt-3 text-white">
            {{ title }}
          </p>
          <div class="py-3 text-white">
            {{ description }}
          </div>
          <div class="py-3 text-nett-maid">
            {{ price }}
          </div>
        </font>
      </NuxtLink>
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
    price: {
      type: String,
      default() {
        return `$69,420`
      },
    },
  },
}
</script>