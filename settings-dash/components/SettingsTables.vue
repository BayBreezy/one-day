<template>
  <div class="grid grid-cols-1 items-start justify-start gap-7 lg:grid-cols-3 lg:gap-5">
    <FormLabel :label="$t('tablesViewText')" :sub-text="$t('tablesViewSubText')" />
    <div class="flex flex-col items-start justify-start gap-5">
      <UiRadioGroup
        orientation="horizontal"
        v-model="table"
        class="flex items-center gap-3 md:gap-7"
      >
        <template v-for="t in tables" :key="t.name">
          <UiRadioGroupItem :value="t.value" :name="t.name" :id="t.value" class="hidden">
          </UiRadioGroupItem>
          <UiLabel
            :for="t.value"
            class="flex h-20 w-28 items-center justify-center rounded-xl border"
            :class="[t.value == table && 'ring-2 ring-ring ring-offset-2 ring-offset-background']"
          >
            <p>{{ t.name }}</p>
          </UiLabel>
        </template>
      </UiRadioGroup>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const table = ref("relaxed");
  const tables = [
    {
      name: "Relaxed",
      value: "relaxed",
    },
    {
      name: "Compact",
      value: "compact",
    },
    {
      name: "Cozy",
      value: "cozy",
    },
  ];

  watch(table, (v) => {
    useSonner.success("Updated", { description: `Table layout set to ${v}` });
  });
</script>
