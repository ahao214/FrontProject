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
 </el-dropdown>

</template>

<script setup>
import { ArrowDown,UserFilled} from "@element-plus/icons-vue";
import useAuthenticationState from "@/hook/auth/useAuthenticationState";
import { useRouter } from "vue-router";
import useUser from '@/stores/useUser'
import { onMounted,ref,reactive } from "vue";


const isAuth = ref(useAuthenticationState())
const router = useRouter();
const User = useUser();
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
    router.push({
        path:"/login"
    });
}


</script>


<style scoped>

</style>