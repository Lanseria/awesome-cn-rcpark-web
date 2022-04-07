<script setup lang="ts">
</script>

<template>
  <div
    color="red dark:red-500"
    bg="blue dark:blue-500"
    border="1px solid red dark:red-500"
    p="x-4 y-4"
    rounded
  >
    Hello World
  </div>
  <div
    flex
    justify-center
    items-center
    bg="red dark:red-500"
    sm="hover:bg-red-500"
    rounded="md hover:md"
  >
    <div>Hello</div>
    <div>World</div>
    <div>
      <div>2LineHelloWorld</div>
      <div>2LineHelloWorld</div>
    </div>
  </div>
  <div
    btn
    bg="purple dark:purple-500 hover:purple-500"
    shadow="md"
  >
    按钮
  </div>
</template>
