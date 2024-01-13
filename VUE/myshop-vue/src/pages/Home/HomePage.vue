<template>
    <h1>Home Pages</h1>
    <div class="common-layout">
        <el-container>
            <el-header>

            </el-header>
            <el-main>
                <NavList/>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>

</template>

<script setup>
import NavList from "@/components/NavList.vue"



</script>

<style scoped>

</style>    