<template>
  <div class="p-8">
    <div class="text-lg">
      <div class="
          flex
          md:flex-row md:space-x-12
          flex-col
          items-stretch
          md:justify-between
          justify-start
        ">
        <div class="py-2 w-full">
          <div class="
              p-2
              text-gray-700
              dark:text-white
              font-semibold
              border-gray-400 border-b-2
            ">
            Lala:
          </div>
          <p class="p-2">
            A collection of random useful (probably) javascript classes and
            functions.
          </p>
          <div class="mx-auto w-full max-w-md p-4">
            <a
              href="https://github.com/retraigo/lala"
              class="
                block
                text-center
                mx-auto
                w-full
                max-w-full
                font-bold
                text-white
                px-4
                py-3
                transition
                duration-300
                ease-in-out
                bg-zinc-800 bg-opacity-80
                hover:bg-zinc-700
                text-white
              "
            >Check out Lala on GitHub</a>
          </div>
          <div class="mx-auto w-full max-w-md p-4">
            <NuxtLink
              to="/software/lala/invite"
              class="
                block
                text-center
                mx-auto
                w-full
                max-w-full
                font-bold
                text-white
                px-4
                py-3
                transition
                duration-300
                ease-in-out
                bg-zinc-800 bg-opacity-80
                hover:bg-zinc-700
                text-white
              "
            >Check out the Discord bot, La Lala</NuxtLink>
          </div>
          <div class="mx-auto w-full max-w-md p-4">
            <a
              href="https://lala.nekooftheabyss.xyz/"
              class="
                block
                text-center
                mx-auto
                w-full
                max-w-full
                font-bold
                text-white
                px-4
                py-3
                transition
                duration-300
                ease-in-out
                bg-zinc-800 bg-opacity-80
                hover:bg-zinc-700
                text-white
              "
            >Check out the web app, La Lala</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Lala',
      description:
        'A collection of random useful (probably) javascript classes and functions.',
    }
  },
}
</script>
