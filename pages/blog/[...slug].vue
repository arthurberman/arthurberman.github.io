<script lang="ts" setup>
const route = useRoute()
console.log(route.path)
const { data: page } = await useAsyncData(route.path, () => {
    return queryCollection('blog').path(route.path).first()
})
</script>

<template>
    <ContentRenderer v-if="page" :value="page" />
    <p v-else>No good</p>
</template>