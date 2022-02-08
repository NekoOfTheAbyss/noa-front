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
          You might think you have reached the bottom of the abyss. The abyss likes to play tricks.
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
          There are no more diverging paths. This is a two-way road.
        </p>
      </div>
    </header>

    <div class="p-8 pt-3 text-white rounded-b-md">
      <div class="flex flex-col items-center space-y-4">
                <MainHomeCommissionNoLink
          title="Simple Website"
          description="Simple website with 4-5 pages. Something like a portfolio or just a plain ol static website with those 'home', 'about', 'contact' pages." 
          link="/software/commissions/discord-economy"
          image="/evildaro/ENLARGED_PROJECTILE_3.png"
          price = "Starting from 1,400 INR (20 USD)"
        />
        <MainHomeCommissionFeature :features="featureList" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  auth: false,
  head() {
    return {
      title: 'Simple Website',
    }
  },
  data() {
    return {
      featureList: [
        {name:'Mobile Responsive', price: '0'},
        {name:'Fast Loading', price: '0'},
        {name:'Smooth Transitions and Animations', price: '0'},
        {name:'Additional Page', price: '+350 INR (5 USD)'},
        {name:'Search Engine Optimization', price: '+350 INR (5 USD)'},
      ],
    }
  },
}
</script>

