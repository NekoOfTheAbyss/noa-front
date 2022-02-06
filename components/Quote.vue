<script>
export default {
  name: 'Header',
  props: {
      quote: {
          type: String,
          default() {return `Tis a disappointment.`}
      }
  },
}
</script>

<template>
  <div class="p-2">
    <div
      class="
        border-l-4 border-kuro-300
        block
        w-full
        italic
        font-semibold
        mx-auto
        bg-black bg-opacity-10
      "
    >
      <p class="p-8 text-xl tracking-wide leading-6">{{ quote }}</p>
    </div>
  </div>
</template>