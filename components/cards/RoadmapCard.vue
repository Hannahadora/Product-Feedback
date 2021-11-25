<template>
  <div class="card roadmap mt-5">
    <div class="flex items-center justify-between">
      <h2>Roadmap</h2>
      <NuxtLink to="/Roadmap/" class="btn">view</NuxtLink>
    </div>
    <ul>
      <li class="list-item">
        <div class="flex items-center gap-4">
          <eclipse :planned="true" />
          <span class="roadmap-name">Planned</span>
        </div>
        <span class="roadmap-amount">2</span>
      </li>
      <li class="list-item">
        <div class="flex items-center gap-4">
          <eclipse :inProgress="true" />
          <span class="roadmap-name">In progress</span>
        </div>
        <span class="roadmap-amount">3</span>
      </li>
      <li class="list-item">
        <div class="flex items-center gap-4">
          <eclipse :live="true" />
          <span class="roadmap-name">Live</span>
        </div>
        <span class="roadmap-amount">2</span>
      </li>
    </ul>
  </div>
</template>

<script>
import eclipse from "../eclipse.vue";

export default {
  components: { eclipse },
  name: "RoadmapCard",
};
</script>

<style>
.list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>