<template>
  <div class="grid grid-cols-1 items-center gap-7 lg:grid-cols-3 lg:gap-5">
    <FormLabel :label="$t('companyText')" :sub-text="$t('companySubText')" />
    <div class="flex items-center gap-5">
      <div class="flex items-center justify-center rounded-2xl border bg-background p-3">
        <img src="https://img.logoipsum.com/296.svg" alt="Logo" class="h-12 w-12 object-contain" />
      </div>
      <UiButton variant="outline">{{ $t("replaceLogo") }}</UiButton>
    </div>
    <div class="flex items-center lg:justify-end">
      <UiButton variant="ghost">
        {{ $t("remove") }}
      </UiButton>
    </div>
  </div>
</template>
