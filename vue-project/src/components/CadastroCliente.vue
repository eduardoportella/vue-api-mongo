<script setup lang="ts"></script>

<template>
  <div>
    <div class="mb-3">
      <label for="costumerName" class="form-label">Nome</label>
      <input type="text" class="form-control" id="costumerName" />
    </div>
    <div class="mb-3">
      <label for="costumerEmail" class="form-label">Email</label>
      <input type="email" class="form-control" id="costumerEmail" placeholder="name@example.com" />
    </div>
    <button type="button" class="btn btn-outline-light">Cadastrar</button>
  </div>
</template>

<style scoped>
.btn {
  border-color: var(--color-aqua);
}
</style>
