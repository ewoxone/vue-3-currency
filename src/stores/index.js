import { createStore } from 'vuex'
import axios from 'axios'

// Create a new store instance.
export default createStore({
    state () {
      return {
        todos: []
      }
    },
    mutations: {
      updateTodos (state, todos) {
        state.todos = todos;
      },
    },
    actions: {
      fetchTodos({ commit }) {
        const baseURL = "https://jsonplaceholder.typicode.com/todos";

        axios
        .get(baseURL)
        .then(response => {
          commit("updateTodos", response.data);
        })
        .catch(e => {
          console.log(e);
        });
      }
    }
})