<script setup lang="ts">
const { data: events } = await useFetch("/api/events");
</script>

<template>
  <div>
    {{ events }}
  </div>
</template>
