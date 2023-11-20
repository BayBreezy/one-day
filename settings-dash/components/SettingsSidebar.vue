<template>
  <div class="grid grid-cols-1 items-center justify-start gap-7 lg:grid-cols-3 lg:gap-5">
    <FormLabel
      for="transparent"
      :label="$t('transparentText')"
      :sub-text="$t('transparentSubText')"
    />
    <div class="flex flex-col items-start justify-start gap-5">
      <UiSwitch id="transparent" v-model:checked="sidebarTransparent" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  const sidebarTransparent = ref(false);

  watch(sidebarTransparent, (v) => {
    if (v) {
      useSonner("Sidebar will be transparent");
    } else {
      useSonner("Sidebar will not be transparent");
    }
  });
</script>
