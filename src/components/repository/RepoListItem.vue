<script>
import TopicList from "./TopicList.vue";
import TopicListItem from "./TopicListItem.vue";

export default {
  props: {
    repo: Object,
  },
  components: {
    TopicList,
    TopicListItem,
  },
};
</script>

<template>
  <div class="repo-list-item">
    <div class="px-4 py-5 sm:px-6">
      <h3
        class="text-lg font-medium leading-6 text-gray-900"
        v-text="repo.name"
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
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <TopicList>
                <TopicListItem
                  v-for="(topic, index) in repo.topics"
                  :key="index"
                  :topic="topic"
                />
              </TopicList>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
.repo-list-item {
  @apply overflow-hidden bg-white shadow sm:rounded-lg;
}
</style>
