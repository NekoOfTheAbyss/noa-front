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
          title="Simple Discord Bot"
          description="Simple Discord bot with basic commands not including moderation (I don't make moderation bots, don't ask me why). Can be either text-based or slash commands."
          image="/evildaro/ENLARGED_PROJECTILE_1.png"
          price="Starting from 350 INR (5 USD)"
        />
        <MainHomeCommissionFeature :features="featureList" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Simple Discord Bot',
    }
  },
  data() {
    return {
      featureList: [
        { name: 'Custom Name + Avatar', price: '0' },
        { name: 'Slash Commands / Text Commands', price: '0' },
        { name: 'Commands (First 5)', price: '0' },
        { name: 'Commands (Additional)', price: 'Negotiable' },
        { name: 'Select Boxes and Buttons', price: '+150 INR (2 USD)' },
      ],
    }
  },
}
</script>

