<template>
  <div>
    <span
        @click="goBack" 
        class="btn font-bold flex items-center">
        <img class="mr-4" src="~/assets/shared/icon-arrow-left.svg" alt="">
        Go back</span>
  </div>
</template>

<script>
export default {
    name: 'GoBack',

    methods: {
        goBack() {
           window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
        }
    }
}
</script>

<style>

</style>