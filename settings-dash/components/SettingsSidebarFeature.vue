<template>
  <div class="grid grid-cols-1 items-center justify-start gap-7 lg:grid-cols-3 lg:gap-5">
    <FormLabel
      for="sidebar-feature"
      :label="$t('sidebarFeaturText')"
      :sub-text="$t('sidebarFeaturSubText')"
    />
    <div class="flex flex-col items-start justify-start gap-5">
      <UiVeeMultiSelect
        open-direction="top"
        id="sidebar-feature"
        v-model="selected"
        :options="options"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  const selected = ref("Recent changes");

  const options = [
    "Recent changes",
    "Recent pages",
    "Recent files",
    "Recent comments",
    "Page tree",
    "Page information",
    "Attachments",
  ];

  watch(selected, (v) => {
    useSonner.success("Updated", { description: `Sidebar feature set to ${v}` });
  });
</script>
