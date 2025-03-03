<script setup lang="ts">
const { data: posts } = await useAsyncData('blog', () => queryCollection('blog').order("date", "DESC").all())
</script>

<template>
    <div>
        <h1>Blog</h1>
        <ul>
            <li v-for="post in posts" :key="post.id">
                <NuxtLink :to="post.path">{{ post.title }} : {{ post.date }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>