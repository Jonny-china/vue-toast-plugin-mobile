<template>
  <transition :name="`${prefixCls}-toast-pop`">
    <div v-show="visible"
      id="jc-toast-id"
      :class="[`${prefixCls}-toast-wrap`, {[`${prefixCls}-mask`]: mask}]"
      @touchmove.stop=""
      @click.stop="">
      <div :class="[customClass, `${prefixCls}-toast`, {[`${prefixCls}-pad10`]: typeClass === '', [`${prefixCls}-pad20`]: typeClass !== ''}]">
        <i v-if="typeClass !== ''"
          :class="[typeClass, `${prefixCls}-toast-icon`]" />
        <span :class="[`${prefixCls}-toast-text`, {[`${prefixCls}-padt10`]: typeClass !== ''}]">{{ message }}</span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    prefixCls: {
      type: String,
      default: 'jc'
    },
    message: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'middle'
    },
    className: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    iconClass: {
      type: String,
      default: ''
    },
    mask: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: false
    }
  },
  computed: {
    customClass() {
      var classes = []
      switch (this.position) {
        case 'top':
          classes.push('is-placetop')
          break
        case 'bottom':
          classes.push('is-placebottom')
          break
        default:
          classes.push('is-placemiddle')
      }
      classes.push(this.className)
      return classes.join(' ')
    },
    typeClass() {
      const { type, iconClass, prefixCls } = this
      if (iconClass !== '') return iconClass
      else if (type === '') return ''
      return {
        [`${prefixCls}-icon`]: true,
        [`${prefixCls}-icon-success`]: type === 'success',
        [`${prefixCls}-icon-fail`]: type === 'fail',
        [`${prefixCls}-icon-info`]: type === 'info',
        [`${prefixCls}-icon-loading`]: type === 'loading'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './toast.scss';
</style>