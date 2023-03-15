import axios from 'axios';
import feedbacks from '../static/json/data.json'
// import router from 'vue-router'

export const state = () => ({
  namespaced: true,
  feedbacks: feedbacks,
  feedback: null
});

export const mutations = {
  addFeedback(state, newFeedback) {
    state.feedbacks?.productRequests.unshift({ ...newFeedback, upvotes: 1, comments: [] })
  },
  updateFeedback(state, payload) {
    state.feedback = { ...payload }
  },
  addCommentToFeedback(state, newComment) {
    state.feedback?.comments?.push({ ...newComment, replies: [] });
  },
  addReplyToFeedbackComment(state, { commentId, newReply }) {
    const comment = state.feedback?.comments?.find(el => el?.id?.toString() === commentId?.toString())
    comment?.replies?.push(newReply);
  },
  selectFeedback(state, feedbackId) {
    state.feedback = state.feedbacks?.productRequests?.find(el => el?.id?.toString() === feedbackId?.toString())
  },
  deleteAFeedback(state, feedbackId) {
    let index;
    state.feedbacks?.productRequests?.forEach((el, i) => {
      if(el?.id?.toString() === feedbackId?.toString())
      index = i
    })
    state.feedbacks?.productRequests?.splice(index, 1)
  }
};

export const actions = {
};

export const getters = {
  allFeedbacks: (state) => state.feedbacks,
  allProductRequests: (state) => state.feedbacks?.productRequests,
  selectedFeedback: (state) => state.feedback
};