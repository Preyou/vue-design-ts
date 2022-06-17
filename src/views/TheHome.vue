<template>
  <div>
    <div class="home">
      <ThePopup :operations="['close']" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ThePopup from '@/components/popup/Popup.vue'

</script>
<style scoped>
.home {
  width: 80vw;
  height: 80vh;
  background-color: aquamarine;
  margin: 0 auto;
}
</style>
