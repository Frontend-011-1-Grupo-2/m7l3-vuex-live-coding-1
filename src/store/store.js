import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      contador: 0
    }
  },
  mutations: {
    INCREMENTAR(state) {
      state.contador++
    },
    DECREMENTAR(state) {
      state.contador--
    },
    RESET_CONTADOR(state) {
      state.contador = 0
    }
  },
  actions: {
    decrementar({ commit, state }) {
      // Validar que contador no baje de 0
      if (state.contador <= 0) {
        console.warn('El contador no puede ser menor a 0')
        return
      } else {
        commit('DECREMENTAR')
      }
    },
    resetContador({ commit, state }) {
      if (state.contador === 0) {
        console.log('El contador ya está en 0')
        return
      } else {
        commit('RESET_CONTADOR')
      }
    }
  },
  getters: {
    duplicado(state) {
      return state.contador * 2
    }
  },
})

export default store