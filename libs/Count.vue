<script setup>
import {ref,reactive,computed} from 'vue'
const state=reactive({
    num:0
})
</script>
<template>
<div>
    <button @click="state.num++" class="box bg-indigo-600 text-white hover:bg-green-200 hover:text-black">+</button>
    <span class="mx-1">{{ state.num }}</span>
    <button @click="state.num--" class="box bg-indigo-600 text-white hover:bg-green-200 hover:text-black">-</button>
</div>
</template>
<style scoped>

</style>