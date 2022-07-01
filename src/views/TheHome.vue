<template>
  <div>
    <div class="home">
      <ThePopUp v-bind="bind" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ThePopUp, { PopUpProps } from '~/components/popup/PopUp.vue'
const bind: PopUpProps = {
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
