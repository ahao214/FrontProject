import { createRouter,createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes:[{
        path:"/login",
        component:()=>import("@/views/Login/LoginPage.vue")
    },{
        path:"/home",
        component:()=>import("@/views/Home/HomePage.vue")
    },{
        path:"/article",
        component:()=>import("@/views/Detail/DetailPage.vue")
    },{
        path:"/",
        redirect:"/home"
    },{
        path:"/:pathMatch(.*)",
        component:()=>import("@/views/NotFound.vue")
    }]
})

