<template>
    <h1>Home Pages</h1>
    <div class="container">
        <template v-for="product in ProductList.Products" :key="product.id">
            <div class="product">
                <a @click="detail(product.id)">
                    <img class="media-img" :src="product.imageUrl"/>
                </a>
                <div class="media-body">
                    <a @click="detail(product.id)">
                        <h3>{{  product.title }}</h3>
                    </a>
                    <p>{{ product.description }}</p>
                    <template v-if="product.variants != null && product.variants.length > 0">
                        <h5 class="price">
                            {{ getMinPrice(product) }}
                        </h5>
                    </template>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup>
import ProductList from "@/components/ProductList.vue"



</script>

<style scoped>

</style>    