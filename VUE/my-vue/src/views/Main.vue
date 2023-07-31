<template>
  <div class="common-layout">
    <el-container>
      <common-aside/>
      <el-container>
        <common-header />
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { defineComponent } from "vue-demi";
import CommonHeader from "../components/CommonHeader.vue";
import CommonAside from "../components/CommonAside.vue";

export default defineComponent({
  components: {
    CommonHeader,
    CommonAside
  },
});
</script>

<style scoped>
.r-container {
    flex-wrap: wrap;
}
</style>
