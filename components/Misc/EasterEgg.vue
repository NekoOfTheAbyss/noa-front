<template>
  <div class="p-4 h-screen relative bg-white/40" @touchmove="movedarotouch" @mousemove="movedaro">
      <div class = "p-4">
          <img class = "w-12 h-12 absolute" :src = "`/daro/${currentDaro}.png`" :style = "{'top': yco - 40 + 'px', 'left': xco + 'px'}" />
      </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      xco: 100,
      yco: 100,
      currentDaro: 3,
    }
  },
  methods: {
      movedaro(e) {
          this.xco = e.pageX
          this.yco = e.pageY
          if(Math.random() < 0.5) this.currentDaro = this.currentDaro === 3 ? 1 : this.currentDaro + 1
      },
      movedarotouch(e) {
          this.xco = e.touches[0].pageX
          this.yco = e.touches[0].pageY
          if(Math.random() < 0.5) this.currentDaro = this.currentDaro === 3 ? 1 : this.currentDaro + 1
      }
  }
}
</script>