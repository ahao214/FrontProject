import axios from "axios";
import { defineStore } from "pinia";

const BASE_URL = 'http://localhost:5041/'

const usePayment = defineStore("Payment", {
    state: (() => {

    }),
    getters: {

    },
    actions: {
        async CreateCheckoutSession(cartItem) {
            await axios.post(BASE_URL + 'api/Payment/CreateCheckoutSession', cartItem).then(res => {
                window.open(res.data, "_self");
            });
        }
    }
})

export default usePayment;