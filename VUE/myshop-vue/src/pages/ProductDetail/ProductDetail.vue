<template>
<div class="media" v-show="product != null ">
    <div class="media-img-wrapper">
        <img class="media-img" :src="product.imageUrl" :alt="product.title"/>
    </div>
    <div class="media-body">
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>

        <template v-if="product.variants != null && product.variants.length > 1">
            <el-radio-group v-model="currentTypeId" class="ml-4">
                <el-radio v-for="productType in productTypes" :key="productType.id" :label="productType.id">
                    {{  productType.name }}
                </el-radio>
            </el-radio-group> 
        </template>
        <template v-if="GetSelectedProductVariant()!=null">
            <template v-if="GetSelectedProductVariant().originalPrice > GetSelectedProductVariant().price">
                <h6 class="text-muted original-price">
                    原价:￥{{ GetSelectedProductVariant().originalPrice }}
                </h6>
            </template>
            <h4 class="price">
                到手价:￥{{ GetSelectedProductVariant().Price }}
            </h4>
        </template>
    </div>

</div>


</template>

<script setup>

import useProductList from "@/stores/useProductList";
import { onMounted,ref } from "vue";
import {useRoute} from "vue-router";

const currentTypeId = ref("e84893a3-cad7-4ef3-8f7d-58e090c7f128");  // 默认当前类型的套餐

const ProductList = useProductList();
const route = useRoute();
const product = ref({});
const productTypes = ref([]);

onMounted(async () =>{
    if(ProductList.Products.length === 0){
        await ProductList.getAllProduct();
    }

    await ProductList.getProductTypeByProductId(route.params.id);

    product.value = ProductList.GetProductId(route.params.id);

    productTypes.value = ProductList.ProductTypes;
    
    if(product.value.variants.length > 0){
        var prices = product.value.variants.map(variant=>variant.price);
        var minPrice = Math.min(...prices);

        currentTypeId.value = product.value.variants.find(x=>x.price === minPrice).productTypeId;
    }
});

function GetSelectedProductVariant(){
    if(product.value.variants!=undefined){
        var variant = product.value.variants.find(x=>x.productTypeId == currentTypeId.value);
        return variant;
    }
}

</script>


<style scoped>

.media{
    display: flex;
}

.media-img{
    max-height: 500px;
    max-width: 500px;
    border-radius: 6px;
    margin:0 10px 10px 10px;
}

.media-img-wrapper{
    max-width: 500px;
    max-height: 500px;
    text-align: center;
    flex: 1;
}

.media-body{
    flex:1;
}

.original-price{
    text-decoration: line-through;
}

.price{
    color:green;
}

</style>