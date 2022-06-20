import { ObjectDirective, VNode,nextTick  } from 'vue'

const drag:ObjectDirective<HTMLElement,VNode> = {
  mounted(el, binding, vnode) {
    setTimeout(() => {
      debugger
      console.log(el, binding, vnode)

    }, 100)
    nextTick(()=>console.log(binding))
    console.log(binding)

    el.addEventListener('mousedown', (e:MouseEvent) => {
      el.style.cursor = 'move'
      el.style.position = 'relative'
      e.preventDefault()
      const { left, top } = el.getBoundingClientRect(),
        x = e.clientX - left,
        y = e.clientY - top,
        move = (ev:MouseEvent) => {
          el.style.left = `${ ev.clientX - x }px`
          el.style.top = `${ ev.clientY - y }px`
        }
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove',move)
      },{ once:true })
      console.log(move)
      document.addEventListener('mousemove', move)
    })
  }
}
export default drag

