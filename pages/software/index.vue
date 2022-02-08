<template>
  <main>
    <header>
      <div class="text-white">
        <!--  <h1>Kuro-sama</h1>-->
        <p
          class="
            text-xl text-center
            italic
            font-semibold
            px-8
            pb-2
            pt-8
            tracking-wide
            leading-9
          "
        >
          Gaze for a while and even the abyss gets with you...
        </p>
        <p
          class="
            text-md text-center
            font-semibold
            px-8
            py-2
            tracking-wide
            leading-9
            animate-pulse
          "
        >
          You see diverging paths. There are three routes from here. Which shalt
          thou choose?
        </p>
      </div>
    </header>

    <div class="p-8 pt-3 text-white rounded-b-md">
      <div class="flex flex-col items-center space-y-4 md:items-start">
        <MainHomeCard
          title="Queen Of Chaos"
          description="The sole ruler of the abyss with 100+ commands! A PvP-based Discord bot with fun commands and anime/meme abilities!"
          link="/software/queenofchaos"
          image="/popface.webp"
        />
        <MainHomeCard
          title="Lala"
          description="A collection of random, mostly useless functions compiled into a single module and a Discord bot."
          link="/software/la-lala"
          image="/lala.png"
        />
        <MainHomeCard
          title="Commissions"
          description="Check out my commission prices!"
          link="/software/commissions"
          image="/NeTT/woke.webp"
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
      title: 'Discord',
    }
  },
}
</script>

