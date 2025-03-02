<script setup>
const props = defineProps(['title', 'content'])
console.log(props.content)
</script>
<template>
    <h2>
        {{ props.title }}
    </h2>
    <slot></slot>
    {{ props.content }}
</template>