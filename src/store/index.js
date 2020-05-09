import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        processing: true,
        nextButton: false
    },
    mutations: {
        startProcessing(state) {
            state.processing = true;
        },
        endProcessing(state) {
            state.processing = false;
        },
        clickedNextButton(state) {
            state.nextButton = true;
        }
    }
});