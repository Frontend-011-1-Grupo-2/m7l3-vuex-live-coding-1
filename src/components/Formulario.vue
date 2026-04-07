<script setup>
import { computed, ref } from 'vue';
import FormDatosPersonales from './FormDatosPersonales.vue';
import FormPreferencias from './FormPreferencias.vue';
import { useStore } from 'vuex';

const store = useStore()

const pasoActual = ref(1)

const selectedComponent = computed(() => pasoActual.value === 1 ? FormDatosPersonales : FormPreferencias)

const handleAnterior = () => pasoActual.value > 1 ? pasoActual.value-- : pasoActual.value = 1
const handleSiguiente = () => pasoActual.value < 2 ? pasoActual.value++ : pasoActual.value = 2

const handleSubmit = () => {
  console.log('Formuario enviado')
  console.table(store.state.formulario)
  // Restaurar paso del formulario
  pasoActual.value = 1

  // Limpiar datos del formulario
  store.commit('LIMPIAR_FORMULARIO')
}
</script>

<template>
  <div class="border p-4 rounded shadow">
    <form class="border rounded p-3" @submit.prevent="handleSubmit">
      <h1 class="h4 text-muted">Formulario de varios pasos</h1>
      <!-- Paso 1: datos personales, paso 2: preferencias -->
      <component :is="selectedComponent"></component>

      <div class="d-flex justify-content-between">
        <button type="button" class="btn btn-primary btn-sm" @click="handleAnterior"
          :disabled="pasoActual === 1">Anterior</button>
        <button type="submit" class="btn btn-success btn-sm" v-if="pasoActual === 2">Enviar formulario</button>

        <button type="button" class="btn btn-primary btn-sm" @click="handleSiguiente"
          :disabled="pasoActual === 2">Siguiente</button>
      </div>

    </form>
  </div>
</template>

<style scoped></style>