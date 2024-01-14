import useAuthenticationState from "@/hook/auth/useAuthenticationState";
import axios from "axios";
import { defineStore } from "pinia";

const BASE_URL = 'http://43.143.170.48:5170/'

const useCart = defineStore("Cart", {
    state: () => ({
        Cart: [],
        CartProduct: []
    }),
    getters: {
        GetCartItemCount(state) {
            return state.Cart.reduce((total) => total + 1, 0)
        }
    },
    actions: {
        async AddToCart(cartItem) {
            const localCart = localStorage.getItem("cart");
            this.Cart = localCart ? JSON.parse(localCart) : [];
            const sameItem = this.Cart.find(item => item.productId === cartItem.productId && item.productTypeId === cartItem.productTypeId);
            if (sameItem === undefined) {
                this.Cart.push(cartItem);
            } else {
                sameItem.quantity += cartItem.quantity;
            }
            localStorage.setItem("cart", JSON.stringify(this.Cart));
        },
    }
})

export default useCart