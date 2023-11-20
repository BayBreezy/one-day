<template>
  <div>
    <UiDropdownMenu>
      <UiDropdownMenuTrigger asChild>
        <UiButton variant="outline" size="icon">
          <Icon name="lucide:languages" class="h-5 w-5" />
        </UiButton>
      </UiDropdownMenuTrigger>
      <UiDropdownMenuContent align="end">
        <UiDropdownMenuRadioGroup v-model="locale">
          <template v-for="l in locales" :key="l.code">
            <UiDropdownMenuRadioItem
              v-if="typeof l !== 'string'"
              @select="setLocale(l.code)"
              :value="l.code"
              :textValue="l.name"
              >{{ l.name }}</UiDropdownMenuRadioItem
            >
          </template>
        </UiDropdownMenuRadioGroup>
      </UiDropdownMenuContent>
    </UiDropdownMenu>
  </div>
</template>

<script lang="ts" setup>
  const { locale, locales, setLocale } = useI18n();
</script>
