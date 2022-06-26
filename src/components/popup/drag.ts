import { ObjectDirective, VNode, DirectiveBinding } from 'vue'

interface TValue {
  container: HTMLElement
  dragBar: HTMLElement
}
const drag: ObjectDirective<HTMLElement, TValue> = {
  // { arg = true,value = { container:document.body,dragBar:el } as TValue }
  mounted(el, { arg = true, value }, vnode) {
    const container = value.container ?? document.body
    const dragBar = value.dragBar ?? el

    container.appendChild(el)
    container.style.position = 'relative'
    dragBar.addEventListener('mousedown', (e: MouseEvent) => {
      const { offsetLeft, offsetTop } = el
      el.style.position = 'absolute'
      el.style.left = offsetLeft + 'px'
      el.style.top = offsetTop + 'px'
      const { pageX, pageY } = e
      // e.preventDefault()
      const move = (ev: MouseEvent) => {
        el.style.left = `${ offsetLeft + ev.pageX - pageX }px`
        el.style.top = `${ offsetTop + ev.pageY - pageY }px`
      }
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', move)
      }, { once: true })
      document.addEventListener('mousemove', move)
    })
  }
}
export default drag

