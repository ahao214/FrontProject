<template>
    <h1>购物车页面</h1>


</template>

<script setup>
import useCart from "@/stores/useCart";
import useProductList from "@/stores/useProductList";
import { onMounted,ref } from "vue";
import { useRouter } from "vue-router";

const ProductList = useProductList();
const router = useRouter();
const Cart = useCart();
const CartProducts = ref([]);

onMounted(async()=>{
    Cart.CartProduct =[];
    // 1 获得购物车数据
    for(let item of Cart.Cart){
        // 2 根据购物车的ProductId去获取商品
        var product = await ProductList.getProductById(item.ProductId);
        if(product === undefined){
            continue;
        }
        // 3 根据商品Id和TypeId去查询套餐
        var variantByProduct = await ProductList.getProductVariant(item.ProductId,item.ProductTypeId);
        if(variantByProduct === undefined){
            continue;
        }
        // 4 定义一个对象按需存储结构
        var cartObj ={
            ProductId:product.id,
            Title:product.title,
            ImageUrl:product.imageUrl,
            ProductTypeId:variantByProduct.productTypeId,
            ProductType:variantByProduct.productType,
            Price:variantByProduct.price,
            Quantity:item.Quantity
        };
        // 5 拼接好数据后存入数组
        Cart.CartProduct.push(cartObj);

    }
    CartProducts.value = Cart.CartProduct;
})

function detail(id){
    router.push({
        path:'/detail/${id}'
    })
}

</script>


<style scoped>

</style>
