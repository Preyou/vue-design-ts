import { Component, AsyncComponentLoader, ComponentPublicInstance, createApp } from 'vue'
import PopUp, { Dom } from '~/components/popup/PopUp.vue'

interface pluginDef {
  readonly name?: string
  readonly compoent?: Component | AsyncComponentLoader
  readonly container?: Dom
}

interface PluginConfig {
  plugins: Array<pluginDef>
}

export default class Plugin {
  public activePlugins: Array<ComponentPublicInstance> = []

  constructor(public pluginConfig = Plugin.definedConfing()) {

  }
  runPlugin<T>(plugin: pluginDef | string, arg?: T, config = this.pluginConfig): ComponentPublicInstance | never {
    const target = typeof plugin === 'string' ? config.plugins.find(({ name }) => name === plugin) : plugin
    if (!target?.compoent)
      throw Error()
    return createApp(target.compoent).mount(target.container ?? document.body)
  }
  static definedConfing({ plugins }: PluginConfig = { plugins: [] }): PluginConfig {
    return {
      plugins
    }
  }
}
