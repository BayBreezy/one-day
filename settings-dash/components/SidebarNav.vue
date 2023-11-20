<template>
  <nav class="flex flex-col gap-2">
    <template v-for="(item, i) in links" :key="i">
      <!-- This could be its own component -->
      <!-- render a normal link with no sub items -->
      <NuxtLink
        v-if="!item.items"
        class="flex w-full items-center gap-4 rounded-lg px-3 py-2 text-[15px] transition hover:bg-muted hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        :to="localePath('/')"
        ><Icon :name="item.icon" class="h-5 w-5 text-muted-foreground" /> {{ item.name }}
      </NuxtLink>
      <!-- render a collapsible link with sub items -->
      <UiCollapsible v-if="item.items" v-model:open="item.open">
        <UiCollapsibleTrigger
          class="flex w-full items-center gap-4 rounded-lg px-3 py-2 text-[15px] transition hover:bg-muted hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          <Icon :name="item.icon" class="h-5 w-5 text-muted-foreground" /> {{ item.name }}
          <span class="ml-auto">
            <Icon
              name="solar:alt-arrow-down-line-duotone"
              class="h-4 w-4 text-muted-foreground transition duration-300"
              :class="[item.open ? 'rotate-180 transform' : '']"
            />
          </span>
        </UiCollapsibleTrigger>
        <UiCollapsibleContent class="flex flex-col gap-1 pl-10">
          <template v-for="(subItem, j) in item.items" :key="j">
            <!-- More reason for this to be a component -->
            <NuxtLink
              class="flex items-center rounded-lg px-3 py-2 text-sm transition hover:bg-muted hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              :to="localePath('/')"
              >{{ subItem.name }}
            </NuxtLink>
          </template>
        </UiCollapsibleContent>
      </UiCollapsible>
    </template>
  </nav>
</template>

<script lang="ts" setup>
  const { t, locale } = useI18n();
  const localePath = useLocalePath();
  // Use ref cause i have to bind open state to the collapsible items
  const links = ref([
    { name: t("nav.dashboard"), href: "#", icon: "solar:home-smile-angle-linear" },
    { name: t("nav.viewSite"), href: "#", icon: "solar:square-top-down-linear" },
    {
      name: t("nav.posts"),
      open: ref(true),
      href: "#",
      icon: "solar:document-add-linear",
      items: [
        { name: t("nav.allPosts"), href: "#" },
        { name: t("nav.addPosts"), href: "#" },
        { name: t("nav.categories"), href: "#" },
        { name: t("nav.tags"), href: "#" },
      ],
    },
    {
      name: t("nav.pages"),
      open: ref(false),
      href: "#",
      icon: "solar:diploma-verified-linear",
      items: [
        { name: t("nav.allPages"), href: "#" },
        { name: t("nav.addNew"), href: "#" },
      ],
    },
    { name: t("nav.performance"), href: "#", icon: "solar:bolt-outline" },
    { name: t("nav.tags"), href: "#", icon: "solar:tag-linear" },
    { name: t("nav.members"), href: "#", icon: "solar:users-group-rounded-outline" },
    { name: t("nav.looks"), href: "#", icon: "solar:stars-line-linear" },
    { name: t("nav.settings"), href: "#", icon: "solar:tuning-linear" },
    { name: t("nav.support"), href: "#", icon: "solar:help-outline" },
  ]);

  // watch local and refresh links
  watch(
    locale,
    () => {
      links.value = [
        { name: t("nav.dashboard"), href: "#", icon: "solar:home-smile-angle-linear" },
        { name: t("nav.viewSite"), href: "#", icon: "solar:square-top-down-linear" },
        {
          name: t("nav.posts"),
          open: true,
          href: "#",
          icon: "solar:document-add-linear",
          items: [
            { name: t("nav.allPosts"), href: "#" },
            { name: t("nav.addPosts"), href: "#" },
            { name: t("nav.categories"), href: "#" },
            { name: t("nav.tags"), href: "#" },
          ],
        },
        {
          name: t("nav.pages"),
          open: false,
          href: "#",
          icon: "solar:diploma-verified-linear",
          items: [
            { name: t("nav.allPages"), href: "#" },
            { name: t("nav.addNew"), href: "#" },
          ],
        },
        { name: t("nav.performance"), href: "#", icon: "solar:bolt-outline" },
        { name: t("nav.tags"), href: "#", icon: "solar:tag-linear" },
        { name: t("nav.members"), href: "#", icon: "solar:users-group-rounded-outline" },
        { name: t("nav.looks"), href: "#", icon: "solar:stars-line-linear" },
        { name: t("nav.settings"), href: "#", icon: "solar:tuning-linear" },
        { name: t("nav.support"), href: "#", icon: "solar:help-outline" },
      ];
    },
    { immediate: true, deep: true }
  );
</script>
