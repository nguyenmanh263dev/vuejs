<template>
  <v-app>
    <v-main>
      <HelloWorld />
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue'
</script>
