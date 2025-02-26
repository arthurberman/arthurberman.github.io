<script setup lang="ts">
const appConfig = useAppConfig();
useHead({
  title: 'Arthur\'s Page'
})
</script>
<style>
@import '~/assets/css/main.css';
</style>
<template>
  <div id="page">
    <NavHeader />
    <div class="middle">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>
