<script setup lang="ts">
import { ref } from 'vue'
import type { AxiosResponse } from 'axios'
import CadastroCliente from './components/CadastroCliente.vue'
import ContainerCliente from './components/ContainerCliente.vue'
import { api } from './services/api-mongo'

interface Cliente {
    id: string
    name: string
    email: string
}

const clientes = ref<Cliente[] | null>(null)

import { onMounted } from 'vue'

onMounted(async () => {
    try {
        const response: AxiosResponse<Cliente[]> = await api.get('/customers')
        clientes.value = response.data
    } catch (error) {
        console.error(error)
    }
})
</script>

<template>
    <div>
        <h1>Clientes</h1>
        <CadastroCliente />
		<div class="container">
			<div class="row justify-content-between">
				<ContainerCliente
					v-for="(cliente, index) in clientes"
					:key="index"
					:nome="cliente.name"
					:email="cliente.email"
					:id_cliente="cliente.id"
					:id_index = "index+1"
				/>
			</div>
		</div>
    </div>
</template>

<style>

</style>
