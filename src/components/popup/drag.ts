import { ObjectDirective, nextTick } from 'vue'

interface TValue {
  container: HTMLElement
  dragBar: HTMLElement
}

function getDom(dom: HTMLElement | keyof HTMLElementEventMap | string, el: HTMLElement = document.body): HTMLElement {
  return typeof dom === 'string' ? el.querySelector(dom) as HTMLElement : dom
}
const drag: ObjectDirective<HTMLElement, TValue> = {
  mounted(el, { arg = true, value }) {
    nextTick(() => {
      const container = getDom(value.container ?? document.body)
      const dragBar = getDom(value.dragBar ?? el, el)

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
          el.style.left = `${offsetLeft + ev.pageX - pageX}px`
          el.style.top = `${offsetTop + ev.pageY - pageY}px`
        }
        document.addEventListener('mouseup', () => {
          container.removeEventListener('mousemove', move)
        }, { once: true })
        container.addEventListener('mousemove', move)
      })
    })

  }
}
export default drag

