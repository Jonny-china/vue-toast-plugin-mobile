# vue-toast-plugin-mobile

vue 移动端组件 toast

## Installation

```bash
npm install vue-toast-plugin-mobile
//or
yarn add vue-toast-plugin-mobile
```

## Usage

```js
// main.js
import Vue from 'vue'
import 'vue-toast-plugin-mobile/lib/index.css' // 在入口js引入css

// Home.vue
import Toast from 'vue-toast-plugin-mobile'
export default {
  mounted() {
    Toast.show('这是一个持续1.5S的toast')

    setTimeout(() => {
      Toast.show({
        message: '这是一个持续4S的toast',
        duration: 4000
      })
    }, 3000)

    Toast.close() // 关闭

    setTimeout(() => {
      Toast.success('操作成功')

      // 下面的写法也是同样的效果
      // Toast.show({
      //   message: '操作成功',
      //   type: 'success'
      // })
    }, 7000)

    setTimeout(() => {
      Toast.loading('加载中') // type = loading 时 必须调用 Toast.close() 方法关闭， deration 参数失效
    }, 10000)
  }
}
```

若需在文字上方显示一个 icon 图标，可以将图标的类名作为 `iconClass` 的值传给 `Toast`（图标需自行准备)

```js
// iconClass 会覆盖type类型的内置icon
Toast.show({
  message: '操作成功',
  iconClass: 'icon icon-success'
})
```

## API

| 参数      | 说明                                        | 类型    | 可选值                                  | 默认值   |
| --------- | ------------------------------------------- | ------- | --------------------------------------- | -------- |
| message   | 需要展示的内容                              | string  |                                         |          |
| position  | Toast 的位置                                | string  | `top` , `bottom` , `middle`             | `middle` |
| type      | 内置的 toast 类型                           | string  | `success` , `fail` , `loading` , `info` |          |
| duration  | 持续时间（毫秒），若为 -1 则不会自动关闭 () | number  |                                         | `1500`   |
| mask      | 是否显示遮罩层                              | boolean |                                         | `false`  |
| className | Toast 的类名。可以为其添加样式              | String  |                                         |          |
| iconClass | icon 图标的类名                             | String  |                                         |          |

> 注： duration = -1 或者 type = 'loading' 时，duration 无效，toast 不会消失；隐藏 toast 需要手动调用 close

全局销毁方法：
`Toast.close()`
