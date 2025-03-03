<script setup lang="ts">
const props = defineProps(['title', 'author'])
let open = ref(false)

function toggle() {
    open.value = !open.value
}
</script>
<template>
    <slot v-if="open"></slot>
    <div class="blog-post" @click="toggle">
        {{ title }}
    </div>
</template>