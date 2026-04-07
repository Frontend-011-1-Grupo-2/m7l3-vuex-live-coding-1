import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      contador: 0,
      formulario: {
        nombre: '',
        email: '',
        edad: null,
        hobby: '',
        colorFavorito: '#ffffff',
        bandaFavorita: ''
      }
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
    },
    // Formulario
    ACTUALIZAR_CAMPO(state, { campo, valor }) {
      // no se usa notación de punto con variables. Porque buscará el nombre de la variable como propiedad del objeto. P.ej: state.formulario.campo -> objeto formulario no tiene la propiedad 'campo'
      state.formulario[campo] = valor
    },
    LIMPIAR_FORMULARIO(state) {
      state.formulario = {
        nombre: '',
        email: '',
        edad: null,
        hobby: '',
        colorFavorito: '#ffffff',
        bandaFavorita: ''
      }
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
    },
    actualizarCampo({ commit }, payload) {
      commit('ACTUALIZAR_CAMPO', payload)
    }
  },
  getters: {
    duplicado(state) {
      return state.contador * 2
    }
  },
})

export default store