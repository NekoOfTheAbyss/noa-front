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
          title="Dynamic Website"
          description="Dynamic websites with posts and other stuff. Something like a blog or so I guess."
          image="/evildaro/ENLARGED_PROJECTILE_4.png"
          price="Starting from 4,500 INR (61 USD)"
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
      title: 'Dynamic Website',
    }
  },
  data() {
    return {
      featureList: [
        { name: 'Mobile Responsive', price: '0' },
        { name: 'Fast Loading', price: '0' },
        { name: 'Smooth Transitions and Animations', price: '0' },
        { name: 'Editable Content (Markdown)', price: '+350 INR (5 USD)' },
        { name: 'Web App (With SEO)', price: '+700 INR (10 USD)' },
        { name: 'Login System', price: 'Negotiable' },
      ],
    }
  },
}
</script>

