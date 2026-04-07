<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore() // creamos instancia del store global

// Para variables del state y getters SIEMPRE usar computed
const contador = computed(() => store.state.contador)
const duplicado = computed(() => store.getters.duplicado)

const handleDecrementar = () => {
  // store.commit('DECREMENTAR') // para llamar a una Mutation se utiliza el método commit
  store.dispatch('decrementar') // para llamar a una Action se utliza el método dispatch
}

const handleIncrementar = () => {
  store.commit('INCREMENTAR')
}

const handleReset = () => {
  store.dispatch('resetContador')
}
</script>

<template>
  <h1 class="display-3">El contador está en: {{ contador }}</h1>
  <h2 class="display-4">El doble es: {{ duplicado }}</h2>

  <div class="btn-group">
    <button class="btn btn-warning" @click="handleDecrementar">Decrementar</button>
    <button class="btn btn-success" @click="handleIncrementar">Incrementar</button>
    <button class="btn btn-secondary" @click="handleReset">Reset</button>
  </div>
</template>

<style scoped></style>