import axios from "axios";
import { defineStore } from "pinia";

const BASE_URL = "http://localhost:5000";

const useProductList = defineStore("productList", {
    state: () => ({
        Products: [],
        ProductType: []
    }),
    getters: {

    },
    actions: {
        async getAllProduct() {
            await axios.get(BASE_URL + "api/Product/GetProductList").then(res => {
                this.Products = res.data.data;
                console.log(this.Products)
            })
        }
    }
})

export default useProductList;