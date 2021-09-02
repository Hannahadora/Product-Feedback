<template>
  <div>
   <span @click="$emit('toggleReply', id)" class="btn">Reply</span>
  </div>
</template>

<script>
export default {
    props:[
        id
    ],
    data() {
        return {
        
        }
    }
};
</script>

<style>
</style>