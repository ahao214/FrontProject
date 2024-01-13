import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: "/",
        redirect: "/product/feature"
    }, {
        path: "/product/feature",
        component: () =>
            import ("@/components/FeaturedProduct.vue")
    }, {
        path: "/product/:url",
        component: () =>
            import ("@/components/ProductList.vue")
    }, {
        path: "/detail/:id",
        component: () =>
            import ("@/pages/ProductDetail/ProductDetail.vue")
    }]

})

export default router;