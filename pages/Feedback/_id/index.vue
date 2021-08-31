<template>
  <div class="mx-auto w-2/3 my-16">
    <div class="w-full flex justify-between">
      <div>
        <img src="" alt="" />
        <GoBack />
      </div>
      <NuxtLink to="/Feedback/_id/Edit/">
        <button class="sec-btn">Edit Feedback</button>
      </NuxtLink>
    </div>

    <div 
      class="sugg-box">
      <button class="upvotes btn">
        <img class="mx-auto mb-1" src="~/assets/shared/icon-arrow-up.svg" alt="">
        {{ feedback.upvotes }}</button>
      <div class="w-full flex items-center justify-between">
        <div class="">
          <h3 class="sugg-title">{{ feedback.title }}</h3>
          <p class="sugg-desc mt-2">{{ feedback.description }}</p>
          <div class="mt-2 flex">
            <p class="sugg-tab">{{ feedback.category }}</p>
          </div>
        </div>
        <p class="flex items-center">
          <img src="~/assets/shared/icon-comments.svg" alt="" class="mr-2">
          {{ feedback.comments.length }}</p>
      </div>
    </div>

    <div class="comment-box">
      <h2 class="sugg-title">{{ feedback.comments.length }} Comments</h2>
      <div class="comments" v-for="comment in feedback.comments" :key="comment.id">
        <div class="w-full flex items-center gap-10 py-5">
          <div class="flex items-start gap-10 py-5">
            <img :src="comment.user.image" alt="" />
            <div class="">
              <h5 class="sugg-title">{{ comment.user.name }}</h5>
              <h5>{{ comment.user.username }}</h5>
              <h4 class="mt-3">{{ comment.content }}</h4>
            </div>
          </div>
          <span class="btn">Reply</span>
        </div>
        <hr>
      </div>
    </div>

    <div class="comment-box">
      <h2 class="sugg-title">Add Comment</h2>
      <span v-show="emptyTextBox" class="text-red-200 italic">Invalid comment!!!</span>
      <textarea name="comment" id="commentContent" placeholder="Type your comment here"
        class="textbox mb-5 mt-2 bg-gray-100 rounded"
        :class="{'emptyTextBox': emptyTextBox }"
        v-model="newComment"
      ></textarea>
      <div class="w-full flex items-start justify-between">
        <span class="text-xs">0/250</span>
        <button
          @click="postComment"
         class="pry-btn text-sm text-white">Post Comment</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GoBack from '~/components/GoBack.vue';

export default {
  components: { GoBack },
  data() {
    return {
      id: this.$route.params.id,
      feedback: '',
      newComment: '',
      emptyTextBox: false
    };
  },

  computed: { 
    ...mapGetters( 'feedbacks', [
        'allFeedbacks',
        'allProductRequests'
    ]),

  },

  mounted() {
   
  },

  methods: {
    getFeedback() {
      this.allProductRequests.forEach(e => {
        if(e.id == this.$route.params.id){
          this.feedback = e;
        }
      })
    },

    postComment() {
      if(this.newComment.length == 0) {
        this.emptyTextBox = true
        this.timer = setTimeout(() => {
        this.emptyTextBox = false;
      }, 3000);
      }else{
        var comment = {
          username: this.allFeedbacks.currentUser.username,
          name: this.allFeedbacks.currentUser.name,
          image: this.allFeedbacks.currentUser.image,
          content: this.newComment,
        }
        console.log(comment)
        this.feedback.comments.push(comment)
      }
    }
  },

  created() {
    this.getFeedback()
  },
};
</script>

<style scoped>
  .comments :nth-child(0) {
    border-top: none;
  }
</style>