// 定义懒加载插件

import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install(app){
        // 懒加载指令
        app.directive('img-lazy',{
            mounted(el, binding){
                // el: 指令绑定元素 img
                // binding: binding.value 指令等于后面绑定的表达式的值 url
                // console.log(el, binding.value)
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        if (isIntersecting) {
                            //进入视口
                            el.src = binding.value
                            stop()
                        }
                    //   console.log(isIntersecting)
        
                    },
                  )
            }
        })

    }
}
