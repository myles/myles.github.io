<script>
import CTABtn from "./CTABtn.vue";

export default {
  props: {
    siteName: String,
    siteDescription: {
      type: String,
      required: false,
      default: () => undefined,
    },
    links: {
      type: Object,
      required: false,
      default: () => [],
    },
  },
  components: {
    CTABtn,
  },
};
</script>

<template>
  <div class="bg-gray-50">
    <div class="cta__inner">
      <h1 class="cta__copy">
        <span class="cta__site-name" v-text="siteName" />
        <span
          v-if="siteDescription"
          class="cta__site-description"
          v-text="siteDescription"
        />
      </h1>
      <div class="cta__links">
        <CTABtn
          v-for="(link, index) in links"
          :key="index"
          :name="link.name"
          :url="link.url"
          :variant="link.variant"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.cta {
  @apply bg-gray-50;
}

.cta__inner {
  @apply mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8;
}

.cta__copy {
  @apply text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl;
}

.cta__site-name,
.cta__site-description {
  @apply block;
}

.cta__site-description {
  @apply text-indigo-600;
}

.cta__links {
  @apply mt-8 flex lg:mt-0 lg:flex-shrink-0;
}
</style>
