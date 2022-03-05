<template>
  <div>
    <p>{{ mainStore.count }}</p>
    <p>{{ mainStore.foo }}</p>

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
  mainStore.count++;
};
</script>

<style lang="scss" scoped></style>
