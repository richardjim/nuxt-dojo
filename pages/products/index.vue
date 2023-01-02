<template>
    <div class="grid grid-cols-4 gap-5">
        <div v-for="product in products" :key="product.id" class="bg-white shadow-sm rounded-md p-4">
            <ProductCard :product="product" />
        </div>

    </div>
</template>

<script setup>
import ProductCard from '~~/components/ProductCard.vue';


definePageMeta({
    layout: 'products',
})

const { data: products } = await useFetch('https://fakestoreapi.com/products') 
</script>

<style lang="scss" scoped>

</style>