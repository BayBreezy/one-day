<template>
  <DropdownMenuArrow v-bind="props" :class="styles({ class: props.class })" />
</template>

<script lang="ts" setup>
  import { DropdownMenuArrow } from "radix-vue";
  import type { DropdownMenuArrowProps } from "radix-vue";

  const props = withDefaults(
    defineProps<
      DropdownMenuArrowProps & {
        class?: any;
      }
    >(),
    {
      asChild: false,
      width: 10,
      height: 5,
    }
  );

  const styles = tv({
    base: "rotate-45 border bg-muted",
  });
</script>
