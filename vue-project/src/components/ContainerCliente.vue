<script setup lang="ts">
import { api } from '@/services/api-mongo';
import { ref, watch } from 'vue';

let props = defineProps<{
	nome: string,
	email: string,
	id_cliente: string,
  	id_index: number,
}>()

let isInput = ref(false);
let nomeNovo = props.nome;
let emailNovo = props.email;

watch(isInput, (newValue, oldValue) => {
    if (newValue === false && oldValue == true) {
        updateCustomer();
    }
});

async function deleteCustomer(){
    api.delete(`/deleteCustomer?id=${props.id_cliente}`)
        .then(() => {
            location.reload()
        }) 
        .catch(() => {
            alert('Erro ao deletar cliente')
        })
}

function changeInputValue(){
    isInput.value = !isInput.value;
}

async function updateCustomer(){
    api.put(`/updateCustomer?id=${props.id_cliente}`, {
        name: nomeNovo,
        email: emailNovo
  })
  .then(function () {
    
    console.log('Alterado com sucesso')
  })
  .catch(function (error) {
    console.log(error);
  });
}

</script>

<template>
    <div class="card mb-3 mt-5 position-relative" style="max-width: 18rem">
        <div class="card-header">Cliente {{ id_index }}</div>
        <div class="card-body">
            <h5 v-if="!isInput" class="card-title">{{ nomeNovo }}</h5>
            <input v-else v-model="nomeNovo" type="text" class="card-title">
            <a
                v-if="!isInput"
                class="card-text"
                :href="`mailto:${emailNovo}?subject=Assunto do email&body=Olá, Cliente!`"
                >{{ emailNovo }}</a
            >
            <input type="text" v-else v-model="emailNovo">
        </div>
        <button
            class="excluir bg-danger flex items-center justify-center rounded-3 position-absolute top-0 start-100 translate-middle"
        >
            <v-icon @click="deleteCustomer()" name="fa-trash" fill="white" />
        </button>
        <button
            class="alterar bg-info flex items-center justify-center rounded-3 position-absolute top-50 start-100 translate-middle"
            :class="isInput ? 'bg-warning' : 'bg-info'"
        >
            <v-icon @click="changeInputValue()" :name=" isInput ? 'gi-confirmed' : 'la-edit'" fill="black" />
        </button>
    </div>
</template>

<style scoped>
.card {
    border-color: var(--color-aqua);
    background-color: var(--color-gray);
    color: var(--color-white);
}

.card:hover {
    scale: 105%;
    transition-duration: 100ms;
}

.card-text {
    color: var(--color-aqua);
    text-decoration: none;
}

.card-text:hover {
    text-decoration: underline;
}

button {
    width: 15%;
    text-align: center;
}

.excluir {
    border-color: red;
}

.alterar{
    border: 1px solid black;
}

input {
    background-color: var(--color-gray);
    border-radius: 5px;
    max-width: 97%;
}
</style>
