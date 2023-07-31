<template>
  <el-aside>
    <el-menu class="el-menu-vertical-demo">
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  setup() {
    const list = [
      {
        path: "/user",
        name: "user",
        label: "用户管理",
        icon: "user",
        url: "UserManage/UserManage",
      },
      {
        label: "其他",
        icon: "location",
        children: [
          {
            path: "/page1",
            name: "page1",
            label: "页面1",
            icon: "settings",
            url: "Other/PageOne",
          },
          {
            path: "/page2",
            name: "page2",
            label: "页面2",
            icon: "settings",
            url: "Other/PageTwo",
          },
        ],
      },
    ];

    const noChildren=()=>{
        return list.filter((item)=>!item.children);
    }

    const hasChildren=()=>{
        return list.filter((item)=>item.children);
    }
  },
};
</script>

<style scoped></style>
