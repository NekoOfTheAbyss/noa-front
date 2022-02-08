<template>
  <main>
    <header>
      <div class="text-white">
        <!--  <h1>Kuro-sama</h1>-->
        <p class="
            text-xl text-center
            italic
            font-semibold
            px-8
            pb-2
            pt-8
            tracking-wide
            leading-9
          ">
          Gaze at the abyss and the abyss gazes back at you...
        </p>
        <p class="
            text-md text-center
            font-semibold
            px-8
            py-2
            tracking-wide
            leading-9
            animate-pulse
          ">
          This is a home page. There are three routes from here. Which shall
          you choose?
        </p>
      </div>
    </header>

    <div class="p-8 pt-3 text-white rounded-b-md">
      <div class="flex flex-col items-center space-y-4 md:items-start">
        <MainHomeCard
          title="NeTT"
          description="Braindead developer and creator of the Neko of the Abyss."
          link="/NeTT"
          image="/img.webp"
        />
        <MainHomeCard
          title="Software"
          description="Software related stuff I made!"
          link="/software/"
          image="/popface.webp"
        />
        <MainHomeCard
          title="Kuro's Abyss"
          description="Official Discord community for Neko Of The Abyss"
          link="/discord/server"
          image="/icon.png"
        />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  auth: false,
  head() {
    return {
      title: 'The Abyss',
    }
  },
}
</script>

