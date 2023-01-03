<template>
    <div class="mt-7 max-auto text-center card">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-6xl">Ooops. </p>
        <p class="mt-7 text-4xl">{{ error.message }}</p>
        <button class="btn mt-7" @click="handleClearError">Go back</button>
    </div>
</template>

<script setup>
defineProps(['error'])

const handleClearError = () => clearError({ redirect: '/' })
</script>

<style scoped>

</style>