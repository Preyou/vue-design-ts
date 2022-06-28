<template>
  <div>
    <div class="home">
      <ThePopup v-bind="bind" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ThePopup, { PopuoProps } from '@/components/popup/Popup.vue'
const bind: PopuoProps = {
  operations: ['close'],
  container: '.home'
}
</script>
<style scoped>
.home {
  width: 80vw;
  height: 80vh;
  background-color: aquamarine;
  margin: 0 auto;
  overflow: hidden;
}
</style>
