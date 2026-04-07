<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

// Valores para LEER desde el state (Vuex)
const nombre = computed(() => store.state.formulario.nombre)
const email = computed(() => store.state.formulario.email)
const edad = computed(() => store.state.formulario.edad)

// Funcion para ESCRIBIR sobre el state (Vuex), llamamos a una acción con método 'dispatch'
const actualizarCampo = (campo, valor) => store.dispatch('actualizarCampo', { campo, valor })
</script>

<template>
  <div>
    <h2>Datos personales</h2>
    <div class="mb-3">
      <label for="nombre" class="form-label">Nombre</label>
      <input type="text" name="nombre" id="nombre" class="form-control" :value="nombre"
        @input="actualizarCampo('nombre', $event.target.value)">
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" name="email" id="email" class="form-control" :value="email"
        @input="actualizarCampo('email', $event.target.value)">
    </div>
    <div class="mb-3">
      <label for="edad" class="form-label">Edad</label>
      <input type="number" name="edad" id="edad" class="form-control" :value="edad"
        @input="actualizarCampo('edad', $event.target.value)">
    </div>

  </div>
</template>

<style scoped></style>