import Vue from 'vue'
import ToastVue from './toast.vue'

const ToastConstructor = Vue.extend(ToastVue)
let timer = null

const getId = () => document.getElementById('jc-toast-id')

const handleOptions = options => {
  let obj = {}
  typeof options === 'string' ? (obj.message = options) : (obj = options)
  return obj
}

const Toast = {
  show(options = {}) {
    // 每次只显示一个toast
    getId() && getId().remove()

    let instance = new ToastConstructor({
      el: document.createElement('div')
    })
    clearTimeout(timer)

    // 当type 为loading时，必需要调用关闭方法
    let duration = options.type === 'loading' ? -1 : options.duration || 1500
    instance.message = typeof options === 'string' ? options : options.message
    instance.prefixCls = options.prefixCls || 'jc'
    instance.position = options.position || 'middle'
    instance.className = options.className || ''
    instance.iconClass = options.iconClass || ''
    instance.type = options.type || ''
    instance.mask = options.mask || false

    document.body.appendChild(instance.$el)
    Vue.nextTick(() => {
      instance.visible = true
      ~duration &&
        (timer = setTimeout(() => {
          this.close(instance)
        }, duration))
    })
  },
  success(options = {}) {
    this.show({ ...handleOptions(options), type: 'success' })
  },
  fail(options = {}) {
    this.show({ ...handleOptions(options), type: 'fail' })
  },
  info(options = {}) {
    this.show({ ...handleOptions(options), type: 'info' })
  },
  loading(options = {}) {
    this.show({ ...handleOptions(options), type: 'loading' })
  },
  close(instance) {
    if (instance) {
      instance.visible = false
      instance.$el.addEventListener('transitionend', e => {
        e.target.parentNode && e.target.parentNode.removeChild(event.target)
      })
      instance = null
    } else {
      clearTimeout(timer)
      getId() && getId().remove()
    }
  }
}

export default Toast
