<template>
    <div class="grid grid-cols-4 gap-5">
        <div v-for="product in products" :key="product.id" class="bg-white shadow-sm rounded-md p-4">
            <NuxtLink :to="`/products/${product.id}`">
                <img :src="product.image" alt="" class="w-full h-64 object-cover rounded-md">
                <h3 class="text-lg font-bold mt-4">{{ product.title }}</h3>
                <p class="text-gray-500 mt-2">{{ product.category }}</p>
                <p class="text-gray-500 mt-2">{{ product.price }}</p>
            </NuxtLink>
        </div>
        <p>Products</p>
    </div>
</template>

<script setup>

definePageMeta({
    layout: 'products',
})

const { data: products } = await useFetch('https://fakestoreapi.com/products') 
</script>

<style lang="scss" scoped>

</style>