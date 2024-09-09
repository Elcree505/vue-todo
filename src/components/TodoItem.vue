<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title>{{ todo.title }}</v-list-item-title>
      <v-list-item-subtitle>
        Created: {{ formatDate(todo.createTime) }}
        <span v-if="todo.updateTime">
          | Updated: {{ formatDate(todo.updateTime) }}
        </span>
        <span v-if="todo.doneTime">
          | Done: {{ formatDate(todo.doneTime) }}
        </span>
      </v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action>
      <v-btn v-if="!todo.finished" @click="$emit('finish', todo)" color="success">
        Done
      </v-btn>
      <v-btn v-else @click="$emit('undo', todo)" color="warning">
        Undo
      </v-btn>
      <v-btn @click="startEdit" color="primary">
        Edit
      </v-btn>
      <v-btn @click="$emit('delete', todo)" color="error">
        Delete
      </v-btn>
    </v-list-item-action>

    <v-dialog v-model="editDialog" max-width="300">
      <v-card>
        <v-card-title>Edit Todo</v-card-title>
        <v-card-text>
          <v-text-field v-model="editedTitle" label="Todo title" />
        </v-card-text>
        <v-card-actions>
          <v-btn @click="editDialog = false">Cancel</v-btn>
          <v-btn color="primary" @click="saveEdit">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-list-item>
</template>

<script lang="ts" setup>
import { ref, watch, defineEmits, defineProps } from 'vue';
import type { PropType } from 'vue';
import type { Todo } from '@/types/types';

const props = defineProps({
  todo: {
    type: Object as PropType<Todo>,
    required: true,
  },
});

const emit = defineEmits(['finish', 'undo', 'edit', 'delete']);

const editDialog = ref(false);
const editedTitle = ref(props.todo.title);

watch(() => props.todo, (newTodo) => {
  console.log('Todo updated:', newTodo);
  editedTitle.value = newTodo.title;
}, { deep: true });

const formatDate = (date: Date) => {
  return new Date(date).toLocaleString();
};

const startEdit = () => {
  editedTitle.value = props.todo.title;
  editDialog.value = true;
};

const saveEdit = () => {
  console.log('Saving edit:', editedTitle.value);
  if (!props.todo || typeof props.todo.title === 'undefined') {
    console.error('Invalid todo item in TodoItem');
    editDialog.value = false;
    return;
  }

  const trimmedTitle = editedTitle.value.trim();
  if (trimmedTitle && trimmedTitle !== props.todo.title) {
    console.log('Emitting edit event', props.todo, trimmedTitle);
    emit('edit', props.todo, trimmedTitle);
  } else if (!trimmedTitle) {
    emit('edit', trimmedTitle);
    console.warn('Cannot save empty title');
  }

  console.log(editedTitle.value);

  editDialog.value = false;
};
</script>
