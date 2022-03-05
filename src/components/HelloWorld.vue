<template>
  <div>
    <p>{{ mainStore.count }}</p>
    <p>{{ mainStore.foo }}</p>
    <p>{{ mainStore.arr }}</p>
    <p>{{ mainStore.count10 }}</p>
    <p>{{ mainStore.count10 }}</p>
    <p>{{ mainStore.count10 }}</p>

    <hr />

    <p>{{ count }}</p>
    <p>{{ foo }}</p>

    <hr />

    <button @click="hcs">修改数据</button>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useMainStore } from "../store";

const mainStore = useMainStore();

//这种就没有响应式功能【不推荐】
//这是有问题的，因为这样拿到的数据不是响应式的，是一次性的
//因为 Pinia 其实就是把 state 数据都做 reactive 处理了
// const { count, foo } = mainStore;

//这种要引入{storeToRefs}有响应式代理功能
//解决办法就是使用
//就是说把解构出来的数据做 ref 响应式代理
const { count, foo } = storeToRefs(mainStore);

console.log(mainStore.count);

const hcs = () => {
  //更改【一个数据】就用这个
  //方式一：最简单的方式就是这样
  //mainStore.count++;
  //mainStore.foo="hello"

  //一次性更改【多个数据】就用这个
  //方法二：如果需要修改多个数据，建议使用 $patch 批量更新
  //   mainStore.$patch({
  //     count: mainStore.count + 1,
  //     foo: "hello",
  //     arr: [...mainStore.arr, 4],
  //   });

  //如果有【数组】就用这个就好啦
  //方法三：更好的批量更新的方式：$patch 一个函数
  //   mainStore.$patch((state) => {
  //     state.count++;
  //     state.foo = "hello";
  //     state.arr.push(4);
  //   });

  //方法四：逻辑比较多的时候可以封装到 actions 做处理
  mainStore.changeState(10)
};
</script>

<style lang="scss" scoped></style>
