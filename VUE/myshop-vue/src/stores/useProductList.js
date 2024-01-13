import axios from "axios";
import { defineStore } from "pinia";

const BASE_URL = "http://localhost:5194/";

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
                console.log(this.Products);
            })
        },
        async getProductsByCategory(url) {
            await axios.get(BASE_URL + "api/Product/GetProductByCategory/" + url).then(res => {
                console.log(res.data.data);
                this.Products = res.data.data;
            });
        }
    }
});

export default useProductList;