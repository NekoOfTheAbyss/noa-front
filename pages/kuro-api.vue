<template>
<div>
  <p>Redirecting...</p>
</div>
</template>

<script>
export default {
  mounted () {
         setTimeout(function(){
        window.location.href = 'https://api.nekooftheabyss.xyz' 
         }, 3000)

  }
}

</script>