<template>
  <div class="mx-auto lg:w-1/2 md:w-2/3 w-11/12 my-16">
    <div class="w-full flex justify-between">
      <div>
        <img src="" alt="" />
        <GoBack />
      </div>
      <NuxtLink v-if="feedback" :to="`/Feedback/${feedback.id}/Edit`">
        <button class="sec-btn">Edit Feedback</button>
      </NuxtLink>
    </div>

    <div class="sugg-box">
      <button class="md:block hidden upvotes btn">
        <img
          class="mx-auto mb-1"
          src="~/assets/shared/icon-arrow-up.svg"
          alt=""
        />
        {{ feedback && feedback.upvotes }}
      </button>
      <div
        class="w-full flex md:flex-row flex-col-reverse items-center justify-between"
      >
        <div class="">
          <h3 class="sugg-title">{{ feedback && feedback.title }}</h3>
          <p class="sugg-desc mt-2">{{ feedback && feedback.description }}</p>
          <div class="mt-2 flex">
            <p class="sugg-tab">{{ feedback && feedback.category }}</p>
          </div>
        </div>
        <p
          class="md:flex hidden items-center"
          v-if="feedback && feedback.comments"
        >
          <img src="~/assets/shared/icon-comments.svg" alt="" class="mr-2" />
          {{ feedback && feedback.comments && feedback.comments.length }}
        </p>
        <div class="w-full md:hidden mt-6 flex items-center justify-between">
          <p class="flex items-center" v-if="feedback && feedback.comments">
            <img src="~/assets/shared/icon-comments.svg" alt="" class="mr-2" />
            {{ feedback && feedback.comments && feedback.comments.length }}
          </p>
          <button class="upvotes btn">
            <img
              class="mx-auto mb-1"
              src="~/assets/shared/icon-arrow-up.svg"
              alt=""
            />
            {{ feedback && feedback.upvotes }}
          </button>
        </div>
      </div>
    </div>

    <div class="comment-box" v-if="feedback && feedback.comments">
      <h2 class="sugg-title">
        {{ feedback && feedback.comments && feedback.comments.length }} Comments
      </h2>
      <div
        class="comments w-full border-b border-gray-100"
        v-for="(comment, idx) in feedback.comments"
        :key="idx"
      >
        <comments :comment="comment" :user="user" />
      </div>
    </div>

    <div class="comment-box mt-6">
      <h2 class="sugg-title">Add Comment</h2>
      <span v-show="emptyTextBox" class="text-red-200 italic"
        >Invalid comment!!!</span
      >
      <textarea
        name="comment"
        id="commentContent"
        placeholder="Type your comment here"
        class="textbox mb-5 mt-2 bg-gray-100 rounded"
        :class="{ emptyTextBox: emptyTextBox }"
        v-model="newComment"
      ></textarea>
      <div class="w-full flex items-start justify-between">
        <span class="text-xs">0/250</span>
        <button @click="postComment" class="pry-btn text-sm text-white">
          Post Comment
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import GoBack from "~/components/GoBack.vue";
import Comments from "~/components/Comments.vue";
import { v4 as uuidv4 } from "uuid";

export default {
  components: { GoBack, Comments },
  data() {
    return {
      id: this.$route.params.id,
      newComment: "",
      emptyTextBox: false
    };
  },

  computed: {
    ...mapGetters("feedbacks", ["allFeedbacks", "allProductRequests"]),

    feedback() {
      const feedback = this.allProductRequests?.find(
        el => el.id.toString() === this.id.toString()
      );
      return feedback;
    },
    user() {
      return {
        username: this.allFeedbacks?.currentUser?.username,
        name: this.allFeedbacks?.currentUser?.name,
        image: this.allFeedbacks?.currentUser?.image
      };
    }
  },

  methods: {
    ...mapMutations("feedbacks", ["addCommentToFeedback"]),

    postComment() {
      if (this.newComment.length == 0) {
        this.emptyTextBox = true;
        this.timer = setTimeout(() => {
          this.emptyTextBox = false;
        }, 3000);
      } else {
        const comment = {
          user: this.user,
          content: this.newComment,
          id: uuidv4()
        };
        this.addCommentToFeedback({
          feedbackId: this.id,
          newComment: comment
        });
      }
      this.newComment = "";
    }
  },

  mounted() {}
};
</script>

<style>
.comments:last-child {
  border-bottom: none;
}

.images {
  width: 60px;
  border: 1px solid red;
  border-radius: 50%;
}
</style>
