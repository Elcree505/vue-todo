<template>
  <div>
    <div class="d-flex justify-end mb-3">
      <v-chip color="teal" label small class="mr-2">
        <v-icon left small>mdi-clock-outline</v-icon>
        Updated Time
      </v-chip>
      <v-chip color="amber" label small class="mr-2">
        <v-icon left small>mdi-clock-outline</v-icon>
        Created Time
      </v-chip>
      <v-chip color="green" label small>
        <v-icon left small>mdi-clock-check-outline</v-icon>
        Done Time
      </v-chip>
    </div>

    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>
            Unfinished To-Do: {{ unfinishedTodos.length }}
          </v-card-title>
          <v-card-text>
            <v-list two-line>
              <TodoItem
                v-for="todo in unfinishedTodos"
                :key="todo.id"
                :todo="todo"
                @finish="$emit('finish', $event)"
                @edit="onEdit"
                @delete="$emit('delete', $event)"
              />
            </v-list>
            <div v-if="unfinishedTodos.length === 0" class="text-center mt-5">
              No unfinished todos found.
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>
            Finished To-Do: {{ finishedTodos.length }}
          </v-card-title>
          <v-card-text>
            <v-list two-line>
              <TodoItem
                v-for="todo in finishedTodos"
                :key="todo.id"
                :todo="todo"
                @undo="$emit('undo', $event)"
                @edit="onEdit"
                @delete="$emit('delete', $event)"
              />
            </v-list>
            <div v-if="finishedTodos.length === 0" class="text-center mt-5">
              No finished todos found.
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineEmits, defineProps } from 'vue';
import type { PropType } from 'vue';
import type { Todo } from '@/types/types';
import TodoItem from './TodoItem.vue';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ComponentName: typeof TodoItem
  }
}

const props = defineProps({
  todos: {
    type: Array as PropType<Todo[]>,
    required: true,
  },
});

const emit = defineEmits(['finish', 'undo', 'edit', 'delete']);

const unfinishedTodos = computed(() => props.todos.filter(todo => !todo.finished));
const finishedTodos = computed(() => props.todos.filter(todo => todo.finished));

const onEdit = (todo: Todo, newTitle: string) => {
  console.log('TodoList emitting edit:', todo, newTitle);
  emit('edit', todo, newTitle);
};
</script>
