<template>

 <div></div>

</template>

<script setup>

import useProductList from "@/stores/useProductList"
import { onMounted } from "vue"

const ProductList = useProductList();
onMounted(async()=>{
    await ProductList.getAllProduct();
})

function detail(id){

}

const  getMinPrice=function GetPriceText(product){
    var variants = product.variants;
    if(variants.length == 0){
        return "";
    }else if (variants.length == 1){
        return "￥"+ variants[0].price;
    }
    var prices = variants.map(variant=>variant.price);
    var minPrice = Math.min(...prices);
    return "最低￥"+minPrice+"起";
}

</script>

<style scoped>
.container{
    width:100%;
}

.media-img{
    margin:20px;
    max-height: 200px;
    max-width: 200px;
    border-radius: 6px;
    margin-bottom: 10px;
    transition: transform .2s;
    flex:1;
}

a:hover{
    color:purple;
    text-decoration: underline;
}

.media-img:hover{
    transform: scale(1.1);
}

.product{
    width:200px;
    text-align: center;
    display: flex;
}

.media-body{
    text-align: left;
    flex:1;
    margin-left: 20px;
}

.price{
    color:green;
}

</style>