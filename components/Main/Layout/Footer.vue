<template>
  <footer class="bg-transparent shadow-md text-center md:text-left">
    <MainLayoutPreFooter />
    <div class="sm:flex items-center justify-between max-w-6xl mx-auto py-4 px-4 md:px-8 text-sm">
      <div class="flex-1 flex space-y-4 flex-col items-start">
        <div class="flex-shrink-0 flex items-center">
          <div @click="thisClicked">
            <img class="h-24 w-auto block"
                 :src="$icon(512)"
                 alt="Placeholder" />
          </div>
        </div>
        <div>
          Copyright
          <a href="https://github.com/retraigo"
             target="_blank"
             class="font-bold">
            NeTT
          </a>
        </div>
      </div>
      <div class="flex-initial mt-3 sm:mt-0 flex space-y-4 flex-col items-start">
        <a href="https://nekooftheabyss.xyz"
           target="_blank"
           class="font-bold flex flex-row items-center">
          <span>Socials</span>
        </a>
        <a href="https://nekooftheabyss.xyz"
           target="_blank"
           class="font-semibold flex flex-row items-center">
          <SVGGlobe /> <span class="px-2">Neko of the Abyss</span>
        </a>
        <a href="https://facebook.com/NekoOfTheAbyss"
           target="_blank"
           class="font-semibold flex flex-row items-center">
          <SVGFacebook /> <span class="px-2">Neko of the Abyss</span>
        </a>
        <a href="https://discord.gg/A69vvdK"
           target="_blank"
           class="font-semibold flex flex-row items-center">
          <SVGMessage /> <span class="px-2">Kuro's Abyss</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      clicked: false,
    }
  },
  methods: {
    thisClicked(e) {
      console.log(e)
      this.clicked = true
      console.log("CLICK")
      this.$emit('easterEggClicked', true)
    }
  }
}
</script>
