<script>
import CTA from "./components/CTA.vue";
import RepoList from "./components/RepoList.vue";
import RepoListItem from "./components/RepoListItem.vue";

export default {
  data: () => ({
    repositories: [],
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
      this.repositories = [repoData, ...this.repositories];
    },
  },
};
</script>

<template>
  <div class="mx-4">
    <CTA
      siteName="GitHub Projects"
      siteDescription="Some of Myles Braithwaite's GitHub projects."
      class="mt-4"
    />

    <RepoList class="mt-4">
      <RepoListItem
        v-for="(repository, index) in repositories"
        :key="index"
        :repo="repository"
        class="myles-github-io__repo-list-item"
      />
    </RepoList>
  </div>
</template>

<style scoped></style>
