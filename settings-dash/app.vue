<template>
  <div class="container grid grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-10">
    <Sidebar class="border-r" />
    <main class="mx-auto w-full pb-5 md:max-w-2xl lg:max-w-full">
      <div
        class="sticky top-0 mb-10 flex w-full items-center justify-between border-b bg-background pb-7 pt-5"
        ref="headerRef"
        :style="styles"
      >
        <h1 class="text-3xl font-bold tracking-tight">{{ $t("appearance") }}</h1>
        <LanguageSwitcher />
      </div>

      <SettingsLogo />
      <UiSeparator class="my-10" />
      <SettingsBrandColor />
      <UiSeparator class="my-10" />
      <SettingsTheme />
      <UiSeparator class="my-10" />
      <SettingsSidebar />
      <UiSeparator class="my-10" />
      <SettingsSidebarFeature />
      <UiSeparator class="my-10" />
      <SettingsTables />
      <UiSeparator class="my-10" />
      <div class="flex items-start gap-3">
        <UiButton @click="save">{{ $t("save") }}</UiButton>
        <UiButton variant="outline">{{ $t("cancel") }}</UiButton>
      </div>
      <div class="fixed bottom-5 right-5 lg:hidden">
        <ClientOnly>
          <SidebarMobile />
        </ClientOnly>
      </div>
    </main>
  </div>
  <UiVueSonner />
</template>

<script lang="ts" setup>
  import { useFixedHeader } from "vue-use-fixed-header";

  const headerRef = ref(null);
  const { styles } = useFixedHeader(headerRef);

  const title = ref("Settings Dashboard");
  const description = ref(
    "Another UI added to the One Day collection. This time, it's a settings dashboard."
  );

  const img = "/cover.png";
  useSeoMeta({
    title: title.value,
    titleTemplate: "%s | One Day",
    description: description.value,

    ogTitle: title.value,
    ogDescription: description.value,
    ogImage: img,
    twitterTitle: title.value,
    twitterDescription: description.value,
    twitterImage: img,
    twitterCard: "summary_large_image",
  });

  useHead({
    htmlAttrs: {
      lang: "en",
    },
    link: [
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/icon.svg",
      },
    ],
  });
  const save = () => {
    useSonner.success("Saved", { description: "Settings saved successfully" });
  };
</script>
