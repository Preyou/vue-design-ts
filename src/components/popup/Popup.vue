<template>
  <n-card
    :segmented="{
      content: true,
      footer: 'soft'
    }"
  >
    <template #header>
      <n-space
        justify="space-between"
        align="center"
      >
        <h3>标题</h3>
        <n-button
          v-for="oper in opers"
          :key="oper.name"
          :bordered="false"
          @click="oper.handler"
        >
          <n-icon
            size="26"
            :component="oper.icon"
          />
        </n-button>
      </n-space>
    </template>
    卡片内容
    <template #footer>
      #footer
    </template>
    <template #action>
      #action
    </template>
  </n-card>
</template>

<script lang="ts">
import { Close } from '@icon-park/vue-next'
import drag from './drag'

type Oper = {
  name: string,
  title: string,
  icon: typeof Close,
  handler(): void
}

export default defineComponent({
  props: {
    headless: {
      type: Boolean,
      default: false
    },
    titleText: {
      type: String,
      default: ''
    },
    titleAlign: {
      type: String,
      default: 'left'
    },
    titleStyle: {
      type: Object,
      default: _ => _
    },
    operations: {
      type: Array<'close' | Oper>,
      default: () => ['close']
    }
  },
  directives: {
    drag
  },
  data() {
    return {
      defaultOpers: [
        {
          name: 'close',
          title: '关闭',
          icon: Close,
          handler: console.log
        }
      ]
    }
  },
  computed: {
    opers() {
      return this.operations.map(oper => (typeof oper === 'string' ? this.defaultOpers.find(({ name }) => name === oper) : oper)).filter(_ => _) as Oper[]
    }
  }
})
</script>
<style scoped>

</style>
