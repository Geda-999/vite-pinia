<template>
  <div id="app">
    <h1>Pinia - 购物车示例</h1>
    <hr>
    <h2>商品列表</h2>
    <ProductList/>
    <hr>
    <ShoppingCart/>
  </div>
</template>

<script lang="ts" setup>
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'

</script>


<!--
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
-->