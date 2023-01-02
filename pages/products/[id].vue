<template>
    <div>
        <h2>{{ product.title }}</h2>
        <img :src="product.image" alt="" class="w-full h-64 object-cover rounded-md">
        <p class="text-gray-500 mt-2">{{ product.category }}</p>
        <p class="text-gray-500 mt-2">{{ product.price }}</p>
        <p class="text-gray-500 mt-2">{{ product.description }}</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params

const url = 'https://fakestoreapi.com/products/' + id

const { data: product } = await useFetch(url, { key: id })

definePageMeta({
    layout: 'products',
})
</script>

<style lang="scss" scoped>

</style>