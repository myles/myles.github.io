<script>
import CTA from "./components/cta/CTA.vue";
import RepoList from "./components/repository/RepoList.vue";
import RepoListItem from "./components/repository/RepoListItem.vue";

export default {
  data: () => ({
    siteName: "Myles Braithwaite",
    siteDescription: "Some of my GitHub projects.",
    links: [],

    remoteRepositories: [],
    repos: [
      { owner: "myles", repo: "notebooks" },
      { owner: "myles", repo: "lazy-myles" },
      { owner: "myles", repo: "slothful-myles" },
      { owner: "myles", repo: "mastodon-to-sqlite" },
      { owner: "myles", repo: "microblog-to-sqlite" },
    ],
  }),

  components: {
    CTA,
    RepoList,
    RepoListItem,
  },

  created() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      await this.repos.forEach(({ owner, repo }) =>
        this.fetchRepo(owner, repo)
      );
    },
    async fetchRepo(owner, repo) {
      const url = `https://api.github.com/repos/${owner}/${repo}`;
      const repoData = await (
        await fetch(url, {
          method: "GET",
          headers: {
            // Accept: "application/vnd.github+json",
            // "X-GitHub-Api-Version": "2022-11-28",
          },
        })
      ).json();
      this.remoteRepositories = [repoData, ...this.repositories];
    },
  },

  computed: {
    repositories() {
      return this.remoteRepositories.sort((a, b) => a.name > b.name);
    },
  },
};
</script>

<template>
  <div class="myles-github-io">
    <CTA
      :siteName="siteName"
      :siteDescription="siteDescription"
      :links="links"
      class="myles-github-io__section myles-github-io__section--cta"
    />

    <RepoList class="myles-github-io__section myles-github-io__section--repos">
      <RepoListItem
        v-for="(repository, index) in repositories"
        :key="index"
        :repo="repository"
        class="myles-github-io__repo-list-item"
      />
    </RepoList>
  </div>
</template>

<style scoped>
.myles-github-io {
  @apply mx-4;
}

.myles-github-io__section {
  @apply mt-4;
}
</style>
