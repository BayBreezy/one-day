<template>
  <div class="grid grid-cols-1 items-start gap-7 lg:grid-cols-3 lg:gap-5">
    <FormLabel :label="$t('brandColor')" :sub-text="$t('brandSubColor')" />
    <div class="flex flex-col items-start justify-start gap-7 lg:gap-5">
      <UiRadioGroup
        orientation="horizontal"
        v-model="brandColor"
        class="flex items-center justify-start gap-3"
      >
        <template v-for="p in presets" :key="p">
          <UiRadioGroupItem :value="p" :name="p" :id="p" class="hidden"> </UiRadioGroupItem>
          <UiLabel
            :for="p"
            class="h-7 w-7 rounded-full"
            :style="{ backgroundColor: p }"
            :class="[p == brandColor && 'ring-2 ring-ring ring-offset-2 ring-offset-background']"
          />
        </template>
      </UiRadioGroup>

      <div class="flex items-center gap-3">
        <p class="text-sm text-muted-foreground">{{ $t("customColor") }}:</p>
        <UiInput v-model="brandColor" class="h-9 w-24" />
        <span class="h-7 w-7 rounded-full" :style="{ backgroundColor: `${brandColor}` }" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const brandColor = ref("#7f7f7f");
  const presets = ["#7f7f7f", "#f44336", "#e91e63", "#3f51b5", "#2196f3", "#009688", "#cddc39"];
</script>
