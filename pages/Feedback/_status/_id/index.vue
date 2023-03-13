<template>
  <div class="mx-auto w-2/3 my-16">
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
      <button class="upvotes btn">
        <img
          class="mx-auto mb-1"
          src="~/assets/shared/icon-arrow-up.svg"
          alt=""
        />
        {{ feedback && feedback.upvotes }}
      </button>
      <div class="w-full flex items-center justify-between">
        <div class="">
          <h3 class="sugg-title">{{ feedback && feedback.title }}</h3>
          <p class="sugg-desc mt-2">{{ feedback && feedback.description }}</p>
          <div class="mt-2 flex">
            <p class="sugg-tab">{{ feedback && feedback.category }}</p>
          </div>
        </div>
        <p class="flex items-center" v-if="feedback && feedback.comments">
          <img src="~/assets/shared/icon-comments.svg" alt="" class="mr-2" />
          {{ feedback && feedback.comments && feedback.comments.length }}
        </p>
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
        <div class="w-full flex items-start gap-10 py-5">
          <img
            class="images"
            :src="comment && comment.user && comment.user.image"
            alt=""
          />
          <div class="w-full">
            <div class="flex items-center justify-between">
              <div class="">
                <h5 class="sugg-title">
                  {{ comment && comment.user && comment.user.name }}
                </h5>
                <h5>{{ comment && comment.user && comment.user.username }}</h5>
              </div>

              <reply-comment @toggleReply="replyTextBox = !replyTextBox" />
            </div>
            <h4 class="mt-3">{{ comment && comment.content }}</h4>

            <reply-text-area v-if="replyTextBox" :comment="comment" :user="user"/>

            <div
              class="mt-6"
              v-for="reply in comment && comment.replies"
              :key="reply.id"
            >
              <div class="w-full flex items-start gap-10 py-5">
                <img class="images" :src="reply.user.image" alt="" />
                <div class="w-full">
                  <div class="flex items-center justify-between">
                    <div class="">
                      <h5 class="sugg-title">{{ reply.user.name }}</h5>
                      <h5>{{ reply.user.username }}</h5>
                    </div>
                    <span @click="toggleReReply" class="btn">Reply</span>
                  </div>
                  <h4 class="mt-3">{{ reply.content }}</h4>
                  <!-- 
                  <textarea
                    v-if="reReplyBox"
                    :placeholder="`Replying to @ ${reply.user.username}`"
                    class="textbox mb-5 mt-4 bg-gray-100 rounded"
                    :class="{ emptyTextBox: emptyTextBox }"
                    v-model="replyContent"
                    @mouseenter="sendReply"
                  ></textarea> -->
                </div>
              </div>
            </div>
          </div>
        </div>
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
import ReplyComment from "~/components/ReplyComment.vue";
import ReplyTextArea from "~/components/ReplyTextArea.vue";

export default {
  components: { GoBack, ReplyComment, ReplyTextArea },
  data() {
    return {
      id: this.$route.params.id,
      newComment: "",
      emptyTextBox: false,
      replyBox: false,
      replyTextBox: false,
      replyContent: "",
      replyingTo: "",
      newReply: {}
    };
  },

  computed: {
    ...mapGetters("feedbacks", ["allFeedbacks", "allProductRequests"]),

    feedback() {
      const feedback = this.allProductRequests?.find(
        el => el.id === Number(this.id)
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

  mounted() {},

  methods: {
    ...mapMutations("feedbacks", [
      "addCommentToFeedback",
      "addReplyToFeedbackComment"
    ]),

    postComment() {
      if (this.newComment.length == 0) {
        this.emptyTextBox = true;
        this.timer = setTimeout(() => {
          this.emptyTextBox = false;
        }, 3000);
      } else {
        const comment = {
          user: this.user,
          content: this.newComment
        };
        this.addCommentToFeedback({
          feedbackId: this.id,
          newComment: comment
        });
      }
      this.newComment = "";
    },

    toggleReply() {
      this.replyBox = !this.replyBox;
    },

    toggleReReply(reply) {
      this.reReplyBox = !this.reReplyBox;
    },

    sendReply() {
      if (this.replyContent) {
        const reply = {
          content: this.replyContent,
          replyingTo: this.replyingTo,
          user: this.user
        };
        this.addReplyToFeedbackComment({
          feedbackId: this.id,
          commentId: this.commentId,
          newReply: reply
        });
      }
    }
  },

  created() {}
};
</script>

<style scoped>
.comments:last-child {
  border-bottom: none;
}

.images {
  width: 60px;
  border: 1px solid red;
  border-radius: 50%;
}
</style>
