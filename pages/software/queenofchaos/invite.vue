<template>
<div>
  <p class = "text-white font-semibold text-center text-4xl animate-pulse">Redirecting you to Discord...</p>
</div>
</template>

<script>
export default {
  mounted () {
         setTimeout(function(){
        window.location.href = 'https://discord.com/oauth2/authorize?client_id=679741957047582725&permissions=388160&redirect_uri=https%3A%2F%2Fnekooftheabyss.xyz%2F&scope=bot' 
         }, 3000)

  }
}
</script>