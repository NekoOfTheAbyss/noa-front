<template>
  <div class="p-2">
    <div class="bg-black/60 p-2 border-nett-maid rounded-xl border-2 max-w-4xl">
      <ul class="list-outside list-disc ml-10 space-y-4">
        <li v-for="feature in features"
            :key="feature.name" class = "grid grid-cols-5">
          <span class="font-semibold col-span-2">{{feature.name}}</span> <span class = "px-2 text-center">-</span> <span class="text-nett-maid col-span-2">{{feature.price === '0' ? 'Free' : feature.price}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    features: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>