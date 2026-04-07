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
  <h1>El contador está en: {{ contador }}</h1>
  <h2>El doble es: {{ duplicado }}</h2>

  <div>
    <button @click="handleDecrementar">Decrementar</button>
    <button @click="handleIncrementar">Incrementar</button>
    <button @click="handleReset">Reset</button>
  </div>
</template>

<style scoped></style>
