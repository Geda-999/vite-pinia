import { useProductsStore } from "./products";
import { defineStore } from "pinia";
import { IProduct } from "../api/shop";

//合拼
//{ id,title,price, quantity}
type CartProduct = {
  quantity: number;
} & Omit<IProduct, "inventory">;

export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      cartProducts: [] as CartProduct[], //购物车商品列表
    };
  },

  //商品总价
  getters: {
    totalPrice(state) {
      return state.cartProducts.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
  },

  actions: {
    addProducToCart(product: IProduct) {
      console.log("addProducToCart", product);
      // 看商品有没有库存
      if (product.inventory < 1) {
        return;
      }
      // 检查购物车中是否已有改商品
      const cartItem = this.cartProducts.find((item) => item.id === product.id);
      if (cartItem) {
        // 如果有则让商品的数量+1
        cartItem.quantity++;
      } else {
        // 如果没有则添加到购物车列表中
        this.cartProducts.push({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1, //第一次加到购物车的商品的数据就是1
        });
      }
      //更新商品的库存
      //不建议这么做，不要相信函数的参数
      // product.inventory--;
      // One Dark
      const productsStore = useProductsStore();
      productsStore.decrementProduct(product);
    },
  },
});
