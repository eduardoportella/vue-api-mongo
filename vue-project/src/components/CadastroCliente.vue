<template>
  <div>
    <div class="mb-3">
      <input type="text" v-model="nome" class="form-control" id="costumerName" placeholder="Nome" />
    </div>
    <div class="mb-3">
      <input type="email" v-model="email" class="form-control" id="costumerEmail" placeholder="Email" />
    </div>
    <button type="submit" @click="saveCustomer()" class="btn btn-outline-light">Cadastrar</button>
  </div>
</template>

<style scoped>
.btn {
  border-color: var(--color-aqua);
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
import { api } from '../services/api-mongo'

const nome = ref('');
const email = ref('');

async function saveCustomer(){
  console.log(nome.value)
  console.log(email.value)

  if (!nome.value || !email.value) {
      alert('Por favor, preencha todos os campos.');
      return;
  }

  api.post('/createCustomer', {
    name: nome.value,
    email: email.value
  })
  .then(function () {
    location.reload();
  })
  .catch(function (error) {
    console.log(error);
  });
}
</script>
