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

    <div class="sugg-box">
      <button class="upvotes btn">
        <img
          class="mx-auto mb-1"
          src="~/assets/shared/icon-arrow-up.svg"
          alt=""
        />
        {{ feedback.upvotes }}
      </button>
      <div class="w-full flex items-center justify-between">
        <div class="">
          <h3 class="sugg-title">{{ feedback.title }}</h3>
          <p class="sugg-desc mt-2">{{ feedback.description }}</p>
          <div class="mt-2 flex">
            <p class="sugg-tab">{{ feedback.category }}</p>
          </div>
        </div>
        <p class="flex items-center" v-if="feedback.comments">
          <img src="~/assets/shared/icon-comments.svg" alt="" class="mr-2" />
          {{ feedback.comments.length }}
        </p>
      </div>
    </div>

    <div class="comment-box" v-if="feedback.comments">
      <h2 class="sugg-title">{{ feedback.comments.length }} Comments</h2>
      <div
        class="comments w-full border-b border-gray-100"
        v-for="comment in feedback.comments"
        :key="comment.id"
        :comment="comment"
      >
        <div class="w-full flex items-start gap-10 py-5">
          <img class="images" :src="comment.user.image" alt="" />
          <div class="w-full">
            <div class="flex items-center justify-between">
              <div class="">
                <h5 class="sugg-title">{{ comment.user.name }}</h5>
                <h5>{{ comment.user.username }}</h5>
              </div>
              <span @click="toggleReply(comment.id)" class="btn">Reply</span>
            </div>
            <h4 class="mt-3">{{ comment.content }}</h4>

            <textarea
              v-if="`replyBox${comment.id}`"
              :placeholder="`Replying to @ ${comment.user.username}`"
              class="textbox mb-5 mt-4 bg-gray-100 rounded"
              :class="{ emptyTextBox: emptyTextBox }"
              v-model="replyContent"
              @mouseenter="sendReply"
            ></textarea>

            <div class="mt-6" v-for="reply in comment.replies" :key="reply.id">
              <div class="w-full flex items-start gap-10 py-5">
                <img class="images" :src="reply.user.image" alt="" />
                <div class="w-full">
                  <div class="flex items-center justify-between">
                    <div class="">
                      <h5 class="sugg-title">{{ reply.user.name }}</h5>
                      <h5>{{ reply.user.username }}</h5>
                    </div>
                    <span @click="toggleReReply(reply)" class="btn">Reply</span>
                  </div>
                  <h4 class="mt-3">{{ reply.content }}</h4>

                  <textarea
                    v-if="reReplyBox"
                    :placeholder="`Replying to @ ${reply.user.username}`"
                    class="textbox mb-5 mt-4 bg-gray-100 rounded"
                    :class="{ emptyTextBox: emptyTextBox }"
                    v-model="replyContent"
                    @mouseenter="sendReply"
                  ></textarea>
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
import { mapGetters } from "vuex";
import GoBack from "~/components/GoBack.vue";

export default {
  components: { GoBack },
  data() {
    return {
      id: this.$route.params.id,
      feedback: "",
      newComment: "",
      emptyTextBox: false,
      replyBox: false,
      reReplyBox: false,
      replyContent: "",
      replyingTo: "",
      newReply: {},
    };
  },

  computed: {
    ...mapGetters("feedbacks", ["allFeedbacks", "allProductRequests"]),
  },

  mounted() {},

  methods: {
    getFeedback() {
      this.allProductRequests.forEach((e) => {
        if (e.id == this.$route.params.id) {
          this.feedback = e;
        }
      });
    },

    postComment() {
      if (this.newComment.length == 0) {
        this.emptyTextBox = true;
        this.timer = setTimeout(() => {
          this.emptyTextBox = false
        }, 3000);
      } else {
        var comment = {
          username: this.allFeedbacks.currentUser.username,
          name: this.allFeedbacks.currentUser.name,
          image: this.allFeedbacks.currentUser.image,
          content: this.newComment,
        };
        console.log(comment);
        if(this.feedback.comments) {
          this.feedback.comments.push(comment);
        } else {
          this.feedback.comments = []
          this.feedback.comments.push(comment)
        }
        
      }
    },

    toggleReply(id) {
      const com = this.feedback.comments.find((comment) => comment.id === id);
      if(com) {
        this.replyBox = !this.replyBox
      }
      console.log(id)
    },

    toggleReReply(reply) {
      this.reReplyBox = !this.reReplyBox;
    },

    sendReply() {
      this.newReply = {
        replyContent: this.replyContent,
        replyingTo: this.replyingTo,
      };
      console.log(this.neReply);
    },
  },

  created() {
    this.getFeedback();
  },
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