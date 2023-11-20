<template>
  <UiSheet>
    <UiSheetTrigger aschild>
      <UiButton size="icon" class="h-11 w-11 rounded-full" variant="outline">
        <Icon class="h-7 w-7" name="heroicons:bars-2" />
      </UiButton>
    </UiSheetTrigger>
    <UiSheetContent class="p-0">
      <UiSheetX class="z-30" />

      <UiSheetTitle class="sr-only">Mobile navigation</UiSheetTitle>
      <UiSheetDescription class="sr-only"
        >Description placeholder for mobile nav</UiSheetDescription
      >

      <Sidebar class="block" />
    </UiSheetContent>
  </UiSheet>
</template>

<script lang="ts" setup></script>
