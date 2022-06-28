<template>
  <n-card v-drag:[true]="dragConfig" :segmented="{
    content: true,
    footer: 'soft'
  }">
    <template #header>
      <n-space justify="space-between" align="center">
        <h3>标题</h3>
        <n-button v-for="oper in opers" :key="oper.name" :bordered="false" @click="oper.handler">
          <n-icon size="26" :component="oper.icon" />
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

<script lang="ts" setup>
import { Close } from '@icon-park/vue-next'
import vDrag from './drag'

export type Oper = {
  name: string,
  title: string,
  icon: typeof Close,
  handler(): void
}

export type Dom = HTMLElement | keyof HTMLElementTagNameMap | string

export interface PopuoProps {
  operations?: Array<Oper | 'close'>
  readonly container?: Dom
  readonly dragBar?: Dom
  // headless: {
  //   type: Boolean,
  //   default: false
  // },
  // titleText: {
  //   type: String,
  //   default: ''
  // },
  // titleAlign: {
  //   type: String,
  //   default: 'left'
  // },
  // titleStyle: {
  //   type: Object,
  //   default: () => ({})
  // },

}
const props = withDefaults(defineProps<PopuoProps>(), {
  operations: () => ['close'],
  container: () => document.body,
  dragBar: '.n-card-header'
})

const defaultOpers = [
  {
    name: 'close',
    title: '关闭',
    icon: Close,
    handler: console.log
  }
]

const opers = computed(() => {
  return props.operations.map(oper => (typeof oper === 'string' ? defaultOpers.find(({ name }) => name === oper) : oper)).filter(_ => _) as Oper[]
})

const dragConfig = {
  container: props.container,
  dragBar: props.dragBar ?? 'header'
}
</script>
<style scoped>
</style>
