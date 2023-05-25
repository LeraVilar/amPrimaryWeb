<template>
  <blocks-card :data="data" />
</template>
<script setup>
  const props = defineProps({
    data: Array
  });
</script>
