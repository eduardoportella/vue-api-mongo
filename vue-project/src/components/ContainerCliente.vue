<script setup lang="ts"></script>

<template>
  <div class="card mb-3" style="max-width: 18rem">
    <div class="card-header">Cliente 1</div>
    <div class="card-body">
      <h5 class="card-title">Eduardo Portella</h5>
      <a class="card-text" href="mailto:mail@mail.com?subject=Assunto do email&body=Olá, Cliente!"
        >mail@mail.com</a
      >
    </div>
  </div>
  <div class="icone-excluir"></div>
</template>

<style scoped>
.card {
  border-color: var(--color-aqua);
  background-color: var(--color-gray);
  color: var(--color-white);
}

.card-text {
  color: var(--color-aqua);
  text-decoration: none;
}

.card-text:hover {
  text-decoration: underline;
}
</style>
