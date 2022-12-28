<script>
export default {
  props: {
    repo: Object,
  },
};
</script>

<template>
  <div class="overflow-hidden bg-white shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3
        class="text-lg font-medium leading-6 text-gray-900"
        v-text="repo.full_name"
      />
      <p
        class="mt-1 max-w-2xl text-sm text-gray-500 truncate"
        v-text="repo.description"
      />
      <div class="border-t border-gray-200">
        <dl>
          <div
            v-if="repo.language"
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Language</dt>
            <dd
              class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
              v-text="repo.language"
            />
          </div>
          <div
            v-if="repo.topics && repo.topics.length > 0"
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Topics</dt>
            <dd
              class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
              v-text="repo.topics"
            />
          </div>
          <div
            v-if="repo.license && repo.license.name"
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">License</dt>
            <dd
              class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
              v-text="repo.license.name"
            />
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
