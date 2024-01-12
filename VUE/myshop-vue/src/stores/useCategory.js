import { axios } from "axios";
import { defineStore } from "pinia";

const BASE_URL = "http://localhost:5000/";

const useCategory = defineStore("Category", {
    state: () => ({
        Categories: []
    }),
    getters: {

    },
    actions: {
        async getCategories() {
            await axios.get(BASE_URL + "api/Category/GetCategories").then(res => {
                this.Categories = res.data.data;
                console.log(this.Categories)
            })
        }
    }
})

export default useCategory;