<template>
    <div>
        <p>Products Details for {{ id }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, vero adipisci eos doloremque voluptatum
            consectetur facilis, repudiandae dolore necessitatibus deserunt eaque mollitia itaque aut expedita illum
            commodi porro deleniti animi.</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params

definePageMeta({
    layout: 'products',
})
</script>

<style lang="scss" scoped>

</style>