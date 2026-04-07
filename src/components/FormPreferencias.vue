<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

const hobby = computed({
  get: () => store.state.formulario.hobby, // para LEER el valor
  set: (valor) => store.dispatch('actualizarCampo', { campo: 'hobby', valor }) // para ESCRIBIR un valor nuevo
})
const colorFavorito = computed({
  get: () => store.state.formulario.colorFavorito,
  set: (valor) => store.dispatch('actualizarCampo', { campo: 'colorFavorito', valor })
})
const bandaFavorita = computed({
  get: () => store.state.formulario.bandaFavorita,
  set: (valor) => store.dispatch('actualizarCampo', { campo: 'bandaFavorita', valor })
})
</script>

<template>
  <div>
    <h2>Form Preferencias</h2>
    <div class="mb-3">
      <label for="hobby" class="form-label">Hobby</label>
      <input type="text" name="hobby" id="hobby" class="form-control" v-model="hobby">
    </div>
    <div class="mb-3">
      <label for="color" class="form-label">Color Favorito</label>
      <input type="color" name="color" id="color" class="form-control" v-model="colorFavorito">
    </div>
    <div class="mb-3">
      <label for="banda" class="form-label">Banda favorita</label>
      <input type="text" name="banda" id="banda" class="form-control" v-model="bandaFavorita">
    </div>
  </div>
</template>

<style scoped></style>