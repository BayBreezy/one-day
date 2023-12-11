<template>
  <div class="flex h-full flex-col">
    <nav class="mt-5 flex flex-col gap-4 px-4">
      <NuxtLink
        v-for="link in links"
        :key="link.name"
        to="#"
        class="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-muted"
      >
        <Icon
          :name="link.icon"
          class="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary"
        />
        <span class="text-muted-foreground group-hover:text-primary">{{ link.name }}</span>
      </NuxtLink>
    </nav>
    <nav class="mb-7 mt-auto flex flex-col gap-4 px-4">
      <NuxtLink
        v-for="link in bottomLinks"
        :key="link.name"
        to="#"
        class="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-muted"
      >
        <Icon
          :name="link.icon"
          class="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary"
        />
        <span class="text-muted-foreground group-hover:text-primary">{{ link.name }}</span>
      </NuxtLink>
    </nav>
  </div>
</template>

<script lang="ts" setup>
  const links = [
    {
      name: "Home",
      icon: "solar:home-smile-line-duotone",
      to: "#",
    },
    {
      name: "T-tag",
      icon: "solar:bookmark-linear",
      to: "#",
    },
    {
      name: "History",
      icon: "solar:history-2-bold-duotone",
      to: "#",
    },
    {
      name: "Notifications",
      icon: "solar:bell-line-duotone",
      to: "#",
    },
  ];

  const bottomLinks = [
    {
      name: "Profile",
      icon: "solar:user-rounded-bold-duotone",
      to: "#",
    },
    {
      name: "Settings",
      icon: "solar:settings-line-duotone",
      to: "#",
    },
    {
      name: "Sign out",
      icon: "solar:logout-3-line-duotone",
      to: "#",
    },
  ];
</script>
