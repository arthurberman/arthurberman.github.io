<script setup>
const props = defineProps(['content', 'author'])

console.log(props.content)
</script>
<template>
    <div class="quote-div">
        <p class="quote">{{ content }}</p>
        <p class="author">&dash;{{ author }}</p>
    </div>
</template>