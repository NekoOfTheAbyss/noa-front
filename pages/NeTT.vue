<script>
export default {
  head: {
    title: 'NeTT',
  },
}
</script>
<template>
  <div class="p-2">
    <div class="container pt-3 text-white">
      <div class="w-full mx-auto overflow-hidden p-8">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img
              class="
                h-48
                w-full
                object-cover
                md:w-48
                transform
                tracking-wide
                transition
                duration-500
                ease-in-out
                hover:-translate-y-1
              "
              src="/img.webp"
              alt="Weiner"
            />
          </div>
          <div class="p-8 mx-auto">
            <div
              class="
                uppercase
                tracking-wide
                text-sm text-nett-maid
                font-semibold
              "
            >
              Definition
            </div>
            <p
              class="
                block
                mt-1
                text-lg
                leading-tight
                font-medium
                text-white
                hover:underline
              "
            >
              NeTT
            </p>
            <p class="mt-2 text-gray-300">
              An everyday weeb that loves manga, light novels and
              programming.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-stretch">
        <MainHomeItem
          title="Queen Of Chaos"
          description="The sole ruler of the abyss with 100+ commands! A PvP-based Discord bot with fun commands and anime/meme abilities!"
          link="/software/queenofchaos"
          image="/avatar/kuro.webp"
          contribution="Sole Developer, Owner"
        />
        <MainHomeItem
          title="Lala"
          description="A collection of random, mostly useless functions (yes, written by me) compiled into a single module."
          link="/software/la-lala"
          image="/lala.png"
          contribution="Sole Developer, Owner"
        />
        <MainHomeItem
          title="President Anime Memes"
          description="An anime website that releases anime popularity charts. A fun community with 50k+ members in Discord."
          link="https://presidentanimememes.com"
          image="/avatar/pam.webp"
          contribution="Website Developer"
        />
      </div>
    </div>
  </div>
</template>