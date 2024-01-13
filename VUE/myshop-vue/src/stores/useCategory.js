import axios from "axios";
import { defineStore } from "pinia";

const BASE_URL = "http://localhost:5194/";

const useCategory = defineStore("Category", {
    state: () => ({
        Categories: []
    }),
    getters: {

    },
    actions: {
        async getCategories() {
            await axios.get(BASE_URL + "api/Category/GetCategories").then(res => {
                console.log(res.data.data);
                this.Categories = res.data.data;
            });
        }
    }
});

export default useCategory;