<script>
export default {
  props: {
    topic: String,
  },
};
</script>

<template>
  <p class="topic-list-item" v-text="topic" />
</template>

<style scoped>
.topic-list-item {
  @apply inline-block;
  @apply px-2 py-0.5;
  @apply rounded-lg;
  @apply bg-purple-100 text-purple-900;
}
</style>
