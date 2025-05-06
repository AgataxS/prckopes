<script setup lang="ts">
defineProps<{ modelValue: string; type?: string; placeholder?: string }>()
defineEmits(['update:modelValue'])
</script>

<template>
  <input :type="type || 'text'"
         :placeholder="placeholder"
         class="input"
         :value="modelValue"
         @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" >
</template>

<style scoped>
.input{
  width: 100%; padding: 8px 12px; margin: 4px 0 12px;
  border: 1px solid #bbb; border-radius: 4px;
  font-size: 14px;
}
.input:focus{ outline: none; border-color: #2563eb; }
</style>
