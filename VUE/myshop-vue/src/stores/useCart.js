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
        async updateQuantity(product) {

            const localCart = localStorage.getItem("cart");
            this.Cart = localCart ? JSON.parse(localCart) : [];
            const sameItem = this.Cart.find(item => item.productId === product.ProductId && item.productTypeId == product.ProductTypeId);

            if (sameItem === undefined) {
                return;
            }

            sameItem.Quantity = product.Quantity;
            localStorage.setItem("cart", JSON.stringify(this.Cart));

        },
        // async RemoveProduct(product, index) {
        //     const state = useAuthenticationState().state;

        //     if (state === true) {
        //         this.Cart.splice(index, 1);
        //         await axios.delete(BASE_URL + 'api/Cart/RemoveCartItem/' + product.ProductId + '/' + product.ProductTypeId)
        //     } else {
        //         this.Cart.splice(index, 1);
        //         localStorage.setItem("cart", JSON.stringify(this.Cart));
        //     }
        // },
    }
})

export default useCart