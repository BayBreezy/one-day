<template>
  <div class="grid grid-cols-1 items-start justify-start gap-7 lg:grid-cols-3 lg:gap-5">
    <FormLabel :label="$t('interfaceText')" :sub-text="$t('interfaceSubText')" />
    <div class="flex flex-col items-start justify-start gap-5">
      <UiRadioGroup orientation="horizontal" v-model="theme" class="flex items-center gap-7">
        <template v-for="t in themes" :key="t.name">
          <UiRadioGroupItem :value="t.value" :name="t.name" :id="t.value" class="hidden">
          </UiRadioGroupItem>
          <UiLabel
            :for="t.value"
            class="flex h-20 w-20 items-center justify-center rounded-xl border"
            :class="[t.value == theme && 'ring-2 ring-ring ring-offset-2 ring-offset-background']"
          >
            <Icon :name="t.icon" class="h-7 w-7 text-muted-foreground" />
          </UiLabel>
        </template>
      </UiRadioGroup>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const theme = ref("system");
  const themes = [
    {
      name: "System",
      value: "system",
      icon: "solar:laptop-line-duotone",
    },
    {
      name: "Light",
      value: "light",
      icon: "solar:sun-line-duotone",
    },
    {
      name: "Dark",
      value: "dark",
      icon: "solar:moon-line-duotone",
    },
  ];

  const colorMode = useColorMode();
  watch(theme, (v) => {
    colorMode.preference = v;
    useSonner.success("Updated", { description: `Theme set to ${v}` });
  });
</script>
