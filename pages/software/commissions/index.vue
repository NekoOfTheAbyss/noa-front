<template>
  <div>
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
          You keep gazing into the abyss... Are you perhaps curious of the bottom?
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
          You see diverging paths again. There are four routes from here. Which shalt
          thou choose?
        </p>
        <br />
      </div>
    </header>

    <div class="p-8 pt-3 text-white rounded-b-md">
      <div class="flex flex-col items-center space-y-4 md:items-start">
        <MainHomeCommission
          title="Simple Discord Bot"
          description="Simple Discord bot with basic commands not including moderation (I don't make moderation bots, don't ask me why). Can be either text-based or slash commands."
          link="/software/commissions/simple-discord"
          image="/evildaro/ENLARGED_PROJECTILE_1.png"
          price = "Starting from 350 INR (5 USD)"
        />
        <MainHomeCommission
          title="Discord Economy Bot"
          description="An economy bot for your Discord server. Can be either text-based or slash commands."
          link="/software/commissions/discord-economy"
          image="/evildaro/ENLARGED_PROJECTILE_2.png"
          price = "Starting from 1,400 INR (20 USD)"
        />
        <MainHomeCommission
          title="Simple Website"
          description="Simple website with 4-5 pages. Something like a portfolio or just a plain ol static website with those 'home', 'about', 'contact' pages." 
          link="/software/commissions/simple-website"
          image="/evildaro/ENLARGED_PROJECTILE_3.png"
          price = "Starting from 1,400 INR (20 USD)"
        />
        <MainHomeCommission
          title="Dynamic Website"
          description="Dynamic websites with logins / posts / other stuff. Something like a blog or so I guess."
          link="/software/commissions/dynamic-website"
          image="/evildaro/ENLARGED_PROJECTILE_4.png"
          price = "Starting from 4,500 INR (61 USD)"
        />
        <MainHomeCommission
          title="Other Stuff"
          description="If you need something else, just contact me on discord."
          link="/discord/server"
          image="/evildaro/ENLARGED_PROJECTILE_0.png"
          price = "Can't set a price without knowing what it is."
        />
      </div>
    </div>
            <p
          class="
            text-xl text-center
            font-semibold
            px-8
            pb-2
            pt-8
            tracking-wide
            leading-9
          "
        >
          Contact me on <a href = "https://fb.me/NekoOfTheAbyss" class = "text-nett-maid">Facebook</a> or on <NuxtLink to = "/discord/server" class = "text-nett-maid">Discord</NuxtLink>. You can also mail me via <a class = "text-nett-maid" href = "thenekooftheabyss@gmail.com">thenekooftheabyss@gmail.com</a>
        </p>
  </div>
</template>

<script>
export default {
  auth: false,
  head() {
    return {
      title: 'Commissions',
    }
  },
}
</script>

