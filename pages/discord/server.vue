<template>
<div>
  <p class = "text-white font-semibold text-center text-4xl animate-pulse">Redirecting you to Discord...</p>
</div>
</template>

<script>
export default {
    head() {
    return {
      title: "Redirecting..."
    }
  },
  mounted () {
         setTimeout(function(){
        window.location.href = 'https://discord.gg/G5jpusmDqw' 
         }, 3000)

  }
}
</script>