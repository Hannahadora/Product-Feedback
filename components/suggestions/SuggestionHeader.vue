<template>
  <div class="suggestion-header">
      <div class="flex items-center">
        <img class="mr-4" src="~/assets/suggestions/icon-suggestions.svg" alt="">
        <h2  class="font-bold">6 Suggestions</h2>
        <p class="text-sm ml-6 font-bold">Sort By: Most Upvotes</p>
      </div>

      <button class="sug-btn text-sm">Add Feedbacks</button>
  </div>
</template>

<script>
export default {
    name: 'SuggestionHeader'

}
</script>

<style>
.suggestion-header {
    height: 72px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #373f68;
    border-radius: 10px;
    padding: 24.5px;
    color: #fff;
}

.sug-btn {
    background-color: #ad1fea;
    border-radius: 10px;
    padding: auto;
    width: 158px;
    height: 43px;
}
</style>