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
        path:"/article/:articleId",
        component:()=>import("@/views/Detail/DetailPage.vue")
    },{
        path:"/write",
        component:()=>import("@/views/Writer/WriterPage.vue")
    },{
        path:"/",
        redirect:"/home"
    },{
        path:"/:pathMatch(.*)",
        component:()=>import("@/views/NotFound.vue")
    }]
})

// 配置路由登录导航守卫钩子
router.beforeEach((to,from)=>{
    const token = localStorage.getItem("jwtToken");
    if(!token && to.path !== "/login"){
        return "/login";
    }
});

export default router