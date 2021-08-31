import axios from 'axios';
import feedbacks from '~/static/data.json'
// import router from 'vue-router'

export const state = () => ({
    namespaced: true,
    feedbacks:feedbacks,
    productRequests:feedbacks.productRequests,
    // stateId: route.params.id
  });
  
  export const mutations = {
   addFeedback(state, newFeedback) {
     state.productRequests.unshift(newFeedback)
    },
  //  addComment(state, newFeedback) {
  //    state.productRequests.push(newFeedback)
  //   }
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