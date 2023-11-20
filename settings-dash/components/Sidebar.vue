<template>
  <aside :class="styles({ class: props.class })">
    <UiScrollArea class="h-screen px-5 py-10">
      <div class="flex items-center gap-5">
        <UiAvatar
          class="h-10 w-10 shrink-0"
          src="https://behonbaker.com/icon.png"
          alt="Behon Baker"
        />
        <div class="grow text-sm">
          <p class="font-bold">Behon Baker</p>
          <p class="text-sm text-muted-foreground">behonbaker.com</p>
        </div>
        <div class="ml-auto">
          <UiTooltip disable-closing-trigger>
            <template #trigger>
              <UiTooltipTrigger as="div">
                <UiButton
                  @click="$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'"
                  class="h-9 w-9"
                  variant="outline"
                  size="icon-sm"
                >
                  <Icon
                    :name="isDark ? 'solar:sun-2-outline' : 'solar:moon-sleep-linear'"
                    class="h-4 w-4 text-muted-foreground"
                  />
                </UiButton>
              </UiTooltipTrigger>
            </template>
            <template #content>
              <UiTooltipContent align="center" side="bottom">
                <p class="text-sm text-muted-foreground">
                  {{ isDark ? $t("switchToLight") : $t("switchToDark") }}
                </p>
              </UiTooltipContent>
            </template>
          </UiTooltip>
        </div>
      </div>
      <SidebarNav class="mt-10" />
    </UiScrollArea>
  </aside>
</template>

<script lang="ts" setup>
  const colorMode = useColorMode();

  const isDark = computed(() => colorMode.value === "dark");

  const props = defineProps<{
    class?: any;
  }>();

  const styles = tv({
    base: "sticky top-0 hidden h-screen lg:block",
  });
</script>
