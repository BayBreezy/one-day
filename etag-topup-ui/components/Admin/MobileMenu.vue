<template>
  <div>
    <UiSheet>
      <UiSheetTrigger asChild>
        <slot></slot>
      </UiSheetTrigger>

      <UiSheetContent class="p-1 pr-4">
        <AdminMenuItems class="w-full" />
        <UiSheetX />
      </UiSheetContent>
    </UiSheet>
  </div>
</template>

<script lang="ts" setup></script>
