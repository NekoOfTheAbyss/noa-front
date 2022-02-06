<script>
export default {
  head() {
    return {
      title: this.title,
    };
  },
};
</script>

<template>
  <div
    class="
      flex flex-col
      min-h-screen
      font-montserrat
      tracking-wide
      bg-white
      dark:bg-zinc-900
      text-zinc-600
      dark:text-zinc-300
    "
  >
    <MainLayoutHeader
      :title="$nuxt.$route.path.split('/').reverse()[0] || 'home'"
    />
    <main class="flex-1 w-full max-w-7xl p-4 mx-auto md:px-8 py-16 mt-10">
      <Nuxt />
    </main>
    <MainLayoutFooter />
  </div>
</template>