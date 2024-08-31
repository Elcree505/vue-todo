<template>
  <v-app>
    <v-app-bar app color="orange darken-2" dark>
      <v-toolbar-title class="text-h4">To-Do List</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search Todo..."
        single-line
        hide-details
        filled
        rounded
        dense
        class="mt-3 mt-sm-0"
      ></v-text-field>
    </v-app-bar>

    <v-main class="grey darken-3">
      <v-container>
        <v-card class="mx-auto mt-5" max-width="800">
          <v-card-text>
            <AddTodo @add-todo="addTodo" />
            <TodoList 
              :todos="filteredTodos" 
              @finish="finishTodo" 
              @undo="undoTodo" 
              @edit="editTodo" 
              @delete="deleteTodo" 
            />
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>

    <v-snackbar v-model="showError" color="error" :timeout="3000">
      <template #default>
        {{ errorMessage }}
        <v-btn color="white" @click="showError = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import AddTodo from './components/AddTodo.vue';
import TodoList from './components/TodoList.vue';
import { Todo } from './types/types';

export default defineComponent({
  components: {
    AddTodo,
    TodoList,
  },
  setup() {
    const todos = ref<Todo[]>([]);
    const search = ref('');
    const showError = ref(false);
    const errorMessage = ref('');
    let nextId = 1;

    const filteredTodos = computed(() => {
      if (!search.value) return todos.value;
      return todos.value.filter(todo => 
        todo.title.toLowerCase().includes(search.value.toLowerCase())
      );
    });

    const isTodoExist = (title: string): boolean => {
      return todos.value.some(todo => todo.title.toLowerCase() === title.toLowerCase());
    };

    const showErrorMessage = (message: string) => {
      errorMessage.value = message;
      showError.value = true;
    };

    const addTodo = (title: string) => {
      if (isTodoExist(title)) {
        showErrorMessage('This todo already exists!');
        return;
      }
      todos.value.push({
        id: nextId++,
        title,
        description: null,
        finished: false,
        createTime: new Date(),
        updateTime: null,
        doneTime: null,
      });
    };

    const finishTodo = (todo: Todo) => {
      const index = todos.value.findIndex(t => t.id === todo.id);
      if (index !== -1) {
        todos.value[index] = { ...todos.value[index], finished: true, doneTime: new Date() };
      }
    };

    const undoTodo = (todo: Todo) => {
      const index = todos.value.findIndex(t => t.id === todo.id);
      if (index !== -1) {
        todos.value[index] = { ...todos.value[index], finished: false, doneTime: null };
      }
    };

    const editTodo = (todo: Todo, newTitle: string) => {
      if (todo.title.toLowerCase() !== newTitle.toLowerCase() && isTodoExist(newTitle)) {
        showErrorMessage('This todo already exists!');
        return;
      }
      const index = todos.value.findIndex(t => t.id === todo.id);
      if (index !== -1) {
        todos.value[index] = { 
          ...todos.value[index], 
          title: newTitle, 
          updateTime: new Date() 
        };
      }
    };

    const deleteTodo = (todo: Todo) => {
      const index = todos.value.findIndex(t => t.id === todo.id);
      if (index !== -1) {
        todos.value.splice(index, 1);
      }
    };

    return {
      todos,
      filteredTodos,
      search,
      showError,
      errorMessage,
      addTodo,
      finishTodo,
      undoTodo,
      editTodo,
      deleteTodo,
    };
  },
});
</script>