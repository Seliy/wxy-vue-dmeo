<template>
  <div>
    <ul>
      <li v-for="todo in filteredTodos" v-bind:key="todo.id">
        <!-- {{ todo.text }} -->
        <!-- 我们为每个todo准备一个插槽，将todo对象作为一个插槽的prop传入 -->
        <slot name="todo" v-bind:todo="todo">
          {{ todo.text }}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filteredTodos: [
        { id: 1, text: "h1", isComplete: true },
        { id: 2, text: "h2" },
        { id: 3, text: "h3" },
      ],
    };
  },
};
</script>

<style></style>
