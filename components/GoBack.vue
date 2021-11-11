<template>
  <div class="back-btn">
    <span
        @click="goBack" 
        class="btn font-bold flex items-center"
        :class="{ white: textColor === 'text-white' }">
        <img class="mr-4" src="~/assets/shared/icon-arrow-left.svg" alt="">
        Go back</span>
  </div>
</template>

<script>
export default {
    name: 'GoBack',
    props: [
      'textColor'
    ],

    methods: {
        goBack() {
           window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
        }
    }
}
</script>

<style>
  .back-btn {
    font-size: 13px;
  }
</style>