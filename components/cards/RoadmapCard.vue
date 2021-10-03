<template>
  <div class="card roadmap mt-5">
    <div class="flex items-center justify-between">
        <h2>Roadmap</h2>
        <NuxtLink to="/Roadmap" class="btn">view</NuxtLink>
    </div>
    <ul>
        <li class="list-item">
        <span class="roadmap-name">Planned</span>
        <span class="roadmap-amount"></span>
        </li>
        <li class="list-item">
        <span class="roadmap-name">In progress</span>
        <span class="roadmap-amount"></span>
        </li>
        <li class="list-item">
        <span class="roadmap-name">Live</span>
        <span class="roadmap-amount"></span>
        </li>
    </ul>
</div>
</template>

<script>

export default {
    name: 'RoadmapCard'

}
</script>

<style>

</style>