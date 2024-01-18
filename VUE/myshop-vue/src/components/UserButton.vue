<template>

 <el-dropdown>
    <el-button type="primary" size="large" clas="media-user">
        <el-icon>
            <UserFilled/>
        </el-icon>
        <el-icon class="el-icon--right" size="large">
            <ArrowDown/>
        </el-icon>
    </el-button>
    
    <template #dropdown>
            <el-dropdown-menu>
                <template v-if="isAuth.state === false">
                    <el-dropdown-item @click="ToLogin">登录</el-dropdown-item>
                    <el-dropdown-item @click="ToRegister">注册</el-dropdown-item>
                </template>

                <template v-if="isAuth.state === true">
                    <el-dropdown-item @click="ToProfile">用户中心</el-dropdown-item>
                    <el-dropdown-item @click="ToOrder">订单</el-dropdown-item>

                    <template v-if="userObj.userRole === 'Admin'">
                        <el-dropdown-item>管理面板</el-dropdown-item>
                    </template>

                    <el-dropdown-item @click="Logout">退出账号</el-dropdown-item>
                </template>

            </el-dropdown-menu>
        </template>
 </el-dropdown>

</template>

<script setup>
import { ArrowDown,UserFilled} from "@element-plus/icons-vue";
import useAuthenticationState from "@/hook/auth/useAuthenticationState";
import { useRouter } from "vue-router";
import useUser from '@/stores/useUser'
import useCart from '@/stores/useCart'
import { onMounted,ref,reactive } from "vue";


const isAuth = ref(useAuthenticationState())
const router = useRouter();
const User = useUser();
const Cart = useCart();
const userObj = reactive(User.user);

onMounted(()=>{
    setInterval(()=>{
        isAuth.value.stat = ref(useAuthenticationState()).value.state
    },700);
})

function ToLogin(){
    router.push({
        path:"/login"
    });
}

function ToRegister(){
    router.push({
        path:"/register"
    });
}

async function Logout(){
    await User.logout();
    Cart.Cart=[];
    Cart.CartProduct=[];
    router.push({
        path:"/login"
    });
}


</script>


<style scoped>
.media-user {
    margin: 15px;
}
</style>