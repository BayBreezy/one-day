<template>
  <header class="sticky top-0 z-30 border-b bg-background/90 backdrop-blur">
    <div class="container flex h-14 items-center justify-between">
      <div class="flex items-center gap-3">
        <AdminMobileMenu>
          <UiButton size="icon-sm" class="h-8 w-8 lg:hidden" variant="outline">
            <Icon class="h-5 w-5" name="solar:hamburger-menu-line-duotone" />
          </UiButton>
        </AdminMobileMenu>
        <NuxtLink to="/admin/home" class="text-lg font-semibold">ETag</NuxtLink>
      </div>
      <div class="flex items-center gap-3">
        <p class="hidden text-sm font-medium md:block">Hey Jonas 👋</p>
        <UiSeparator orientation="vertical" class="mx-4 hidden h-6 md:block" />
        <UiTooltip disableClosingTrigger>
          <UiTooltipTrigger asChild>
            <UiButton @click="signOut" size="icon-sm" variant="outline">
              <Icon class="h-4 w-4" name="solar:logout-3-line-duotone" />
            </UiButton>
          </UiTooltipTrigger>
          <UiTooltipContent align="end"> Logout </UiTooltipContent>
        </UiTooltip>
        <UiTooltip disableClosingTrigger>
          <UiTooltipTrigger asChild>
            <UiButton
              @click="$colorMode.preference = $colorMode.value == 'dark' ? 'light' : 'dark'"
              size="icon-sm"
              variant="outline"
            >
              <Icon class="h-4 w-4" name="solar:sun-2-line-duotone" />
            </UiButton>
          </UiTooltipTrigger>
          <UiTooltipContent align="end"> Switch color theme </UiTooltipContent>
        </UiTooltip>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
  const signOut = async () => {
    const id = useSonner.loading("Signing out...");
    await useGlobals().fakePromise();
    useSonner.success("Signed out successfully", { id });
    await navigateTo("/", { replace: true });
  };
</script>
