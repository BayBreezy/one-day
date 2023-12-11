<template>
  <ScrollAreaRoot v-bind="props" :class="styles({ class: props.class })">
    <UiScrollAreaViewport>
      <slot></slot>
    </UiScrollAreaViewport>
    <UiScrollAreaScrollbar :orientation="orientation" />
    <UiScrollAreaCorner />
  </ScrollAreaRoot>
</template>

<script lang="ts" setup>
  import { ScrollAreaRoot } from "radix-vue";
  import type { ScrollAreaRootProps } from "radix-vue";

  const props = withDefaults(
    defineProps<
      ScrollAreaRootProps & {
        orientation?: "vertical" | "horizontal";
        class?: any;
      }
    >(),
    {
      orientation: "vertical",
    }
  );

  const styles = tv({
    base: "relative overflow-hidden",
  });
</script>
