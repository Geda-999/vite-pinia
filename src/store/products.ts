import { getProducts, IProduct } from "./../api/shop";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => {
    return {
      all: [] as IProduct[], //所有商品列表
    };
  },

  getters: {},

  actions: {
    async loadAllProducts() {
      const ret = await getProducts();
      this.all = ret;
    },
    decrementProduct(product: IProduct) {
      const ret = this.all.find((item) => item.id === product.id);
      if (ret) {
        ret.inventory--;
      }
    },
  },
});
