<template>
    <h1>Home Pages</h1>
    <div class="common-layout">
        <el-container>
            <el-header>
                <el-row :gutter="20">
                    <el-col :span="4"></el-col>
                    <el-col :span="2">
                        <LogoButton/>
                    </el-col>
                    <el-col :span="12">
                        <!--搜索框-->
                        <SearchKey/>
                    </el-col>
                    <el-col :span="2">
                        <!--用户登录-->
                        <UserButton/>
                    </el-col>
                    <el-col :span="2">
                        <!--购物车-->
                        <CartCount/>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <NavList/>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>

</template>

<script setup>

import LogoButton from "@/components/LogoButton.vue"
import NavList from "@/components/NavList.vue"
import SearchKey from "@/components/SearchKey.vue"
import CartCount from "@/components/CartCounter.vue"
import UserButton from "@/components/UserButton.vue"

</script>

<style scoped>

</style>    