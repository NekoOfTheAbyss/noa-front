<template>
  <div class="p-8">
    <div class="text-lg">
      <div class="
          flex
          md:flex-row md:space-x-12
          flex-col
          items-stretch
          md:justify-between
          justify-start
        ">
        <div class="py-2 w-full">
          <div class="
              p-2
              text-gray-700
              dark:text-white
              font-semibold
              border-gray-400 border-b-2
            ">
            Privacy Policy
          </div>
          <p class="p-2">
            We store absolutely no data collected from you. Yes, none.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Privacy Policy',
      description:
        'Privacy Policy of all instances of La Lala',
    }
  },
}
</script>
