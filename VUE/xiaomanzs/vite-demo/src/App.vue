<template>
  <div v-if="a == 'A'">A</div>
  <div v-else-if="a == 'B'">B</div>
  <div v-else>C</div>
  <button v-on:click="xxx">点击我</button>
  <div>
    <div :key="index" v-for="(item, index) in arr">{{ index }} -{{ item }}</div>
  </div>
  <div>
    {{ man }}
    <hr />
    <button @click="change">修改</button>
    <hr />
    <div>
      <form>
        <input type="text" v-model="form.name" />
        <br />
        <input type="text" v-model="form.age" />
        <br />
        <button @click.prevent="submit">提交</button>
      </form>
      <h1>{{ mans }}</h1>
      <br />
      <div>
        <button @click="changeRef">修改</button>
      </div>
    </div>
    <br />
   
  </div>
</template>

<script setup lang="ts">
import { toRaw, ref, isRef, reactive } from "vue";
//ref reactive
//ref 支持所有的类型 reactive 引用类型 Array Object Map Set

const mans = reactive({ name: "ahao", age: 23, like: "bike" });


// let { name, age, like } = toRefs(mans);

const changeRef = () => {
  // name.value="chen"
  // console.log(name,age,like)
  console.log(mans,toRaw(mans))
};

let form = reactive({
  name: "ahoa",
  age: 23,
});

const submit = () => {
  console.log(form);
};

const man = ref({ name: "小曼" });
const change = () => {
  man.value.name = "大满";
  console.log(man);
  console.log(isRef(man));
};

const a: string = "B";
const xxx = () => {
  console.log("点击了我");
};

const arr: string[] = ["小曼", "打满", "夏至"];
</script>

<style scoped lang="less"></style>
