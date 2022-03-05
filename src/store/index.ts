import { defineStore } from "pinia";

//1、定义容器
//参数1：容器 ID ， 必须唯一，将来 pinia 会把所以的容器挂载到根容器
//参数2：选项对象
//返回值：一个函数，调用得到容器实例
export const useMainStore = defineStore("main", {
  /**
   * 类似于组件 data ，用来存储全局状态的
   * 1、必须是函数：这样是为了在服务端渲染的时候避免交叉请求导致的数据状态污染
   * 2、必须是箭头函数：这是为了更好的 TS 类型推导
   */

  state: () => {
    return {
      count: 100,
      foo: "test",
      arr: [1, 2, 3],
    };
  },

  /**
   * 类似于组件的 computed ，用来封装计算属性，有缓存的功能
   */
  getters: {},

  /**
   * 类似于组件的 methods ，封装业务逻辑，修改 state
   */
  actions: {
    //注意：不能使用箭头函数定义 action ，因为箭头函数绑定外部 this
    changeState(num: number) {
      this.count += num;
      this.foo = "hello";
      this.arr.push(4);

      //   this.$patch({})
      //   this.$patch(state => {})
    },
  },
});
//2、使用容器中的 state
//3、修改 state
//4、容器中的 action 的使用
