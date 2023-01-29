<script>
export default {
  props: {
    url: String,
    name: String,
    variant: {
      type: String,
      required: false,
      default: () => "primary",
    },
  },
};
</script>

<template>
  <div :class="['cta-btn', `cta-btn--${variant}`]">
    <a :href="url" class="cta-btn__link" v-text="name" />
  </div>
</template>

<style scoped>
.cta-btn {
  @apply inline-flex;
  @apply rounded-md shadow;
}

.cta-btn__link {
  @apply inline-flex items-center justify-center;
  @apply rounded-md border border-transparent  px-5 py-3 text-base font-medium;
  @apply bg-indigo-600 text-white hover:bg-indigo-700;
}

.cta-btn--secondary .cta-btn__link {
  @apply bg-white text-indigo-600 hover:bg-indigo-50;
}
</style>
