import axios from 'axios';
import feedbacks from '../static/json/data.json'
// import router from 'vue-router'

export const state = () => ({
  namespaced: true,
  feedbacks: feedbacks,
  productRequests: feedbacks.productRequests,
  // stateId: route.params.id
});

export const mutations = {
  addFeedback(state, newFeedback) {
    state.productRequests.unshift({...newFeedback, upvotes: 1, comments: []})
  },
  updateFeedback(state, {feedbackId, payload}) {
    const feedback = state.productRequests?.find(el => el.id === Number(feedbackId))
    feedback = {...payload}
  },
  addCommentToFeedback(state, {feedbackId, newComment}) {
    const feedback = state.productRequests?.find(el => el.id === Number(feedbackId))
    feedback.comments.push({...newComment, replies: []});
  },
  addReplyToFeedbackComment(state, {feedbackId, commentId, newReply}) {  
    const feedback = state.productRequests?.find(el => el.id === Number(feedbackId))
    const comment = feedback?.comments?.find(el => el.id === Number(commentId))
    comment?.replies?.push(newReply);
  }
};

export const actions = {

};

export const getters = {
  allFeedbacks: (state) => state.feedbacks,
  allProductRequests: (state) => state.feedbacks.productRequests,
  // allComments: (state) => state.productRequests.forEach(el => {
  //   [el].comments
  // })
  // feedback: (state) => state.productRequests.find((el) => el.id == state.stateId)
};