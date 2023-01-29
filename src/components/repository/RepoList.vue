<script></script>

<template>
  <div class="repo-list">
    <slot />
  </div>
</template>

<style scoped>
.repo-list {
  @apply grid gap-4;
  @apply sm:grid-cols-1;
  @apply md:grid-cols-2;
  @apply lg:grid-cols-3;
}
</style>
