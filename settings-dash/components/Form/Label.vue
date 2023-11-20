<template>
  <div class="flex flex-col gap-1">
    <UiLabel class="font-semibold leading-none sm:text-lg" :for="props.for">{{ label }}</UiLabel>
    <p v-if="subText" class="text-sm leading-none text-muted-foreground">{{ subText }}</p>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    label: string;
    for?: string;
    subText?: string;
  }>();
</script>
