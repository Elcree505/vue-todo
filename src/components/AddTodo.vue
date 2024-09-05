<template>
  <v-form @submit.prevent="addTodo">
    <v-text-field
      v-model="newTodo"
      label="Add new todo"
      :rules="[v => !!v || 'Todo is required']"
      required
      @keyup.enter="addTodo"
    ></v-text-field>
    <v-btn type="submit" color="primary">Add Todo</v-btn>
  </v-form>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['add-todo']);

const newTodo = ref('');

const addTodo = () => {
  if (newTodo.value.trim()) {
    emit('add-todo', newTodo.value.trim());
    newTodo.value = '';
  }
};
</script>
