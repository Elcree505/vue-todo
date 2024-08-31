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

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  emits: ['add-todo'],
  setup(props, { emit }) {
    const newTodo = ref('');

    const addTodo = () => {
      if (newTodo.value.trim()) {
        emit('add-todo', newTodo.value.trim());
        newTodo.value = '';
      }
    };

    return {
      newTodo,
      addTodo,
    };
  },
});
</script>