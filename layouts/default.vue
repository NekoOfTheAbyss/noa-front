<script>
export default {
  head() {
    return {
      title: this.title,
    }
  },
  data() {
    return {
      easterEgg: false,
    }
  },
  methods: {
    easterEggOn(e) {
      this.easterEgg = true
      console.log(this.easterEgg)
    },
    eggExists() {
      return this.easterEgg
    },
  },
}
</script>

<template>
  <div class="min h-screen">
    <div v-if="easterEgg">
      <MiscEasterEgg />
    </div>
    <div v-else
         class="
      flex flex-col
      min-h-screen
      font-montserrat
      tracking-wide
      bg-white
      dark:bg-gradient-to-r
      dark:from-kuro-bg
      dark:to-kuro-lessdark
      text-zinc-600
      dark:text-zinc-300
    ">
      <MainLayoutHeader v-if="!easterEgg"
                        :title="$nuxt.$route.path.split('/').reverse()[0] || 'home'" />
      <main :class="`flex-1 w-full ${easterEgg ? 'max-w-full' : 'max-w-7xl'} p-4 mx-auto md:px-8 py-16 mt-10 test-${easterEgg}`">
        <div class="w-full">
          <Nuxt />
        </div>
      </main>
      <MainLayoutFooter v-if="!easterEgg"
                        @easterEggClicked="easterEggOn" />
    </div>
  </div>
</template>