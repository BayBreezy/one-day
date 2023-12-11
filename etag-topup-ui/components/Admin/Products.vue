<template>
  <section class="mt-10 grid grid-cols-12 gap-5 lg:gap-10">
    <UiCard class="group col-span-full rounded-xl transition hover:border-primary lg:col-span-4">
      <UiCardContent class="py-4">
        <div class="mb-5 flex items-center justify-between gap-4">
          <p class="text-sm font-semibold">Jonas Walters</p>
          <UiTooltip disableClosingTrigger>
            <UiTooltipTrigger asChild>
              <UiButton variant="ghost" size="icon-sm">
                <Icon class="h-4 w-4" name="solar:pen-2-line-duotone" />
              </UiButton>
            </UiTooltipTrigger>
            <UiTooltipContent side="top"> Edit </UiTooltipContent>
          </UiTooltip>
        </div>

        <p class="mb-2 text-sm font-light text-muted-foreground">Balance</p>
        <h3 class="text-2xl font-semibold transition group-hover:text-primary">$16,500.00</h3>

        <UiSeparator decorative class="my-3" />
        <div>
          <p class="text-sm font-light text-muted-foreground">Last payment</p>
          <p class="mt-1 text-sm font-medium">
            {{ useDateFormat(new Date(), "MMM DD, YYYY [at] h:mmA").value }}
          </p>
        </div>
      </UiCardContent>
    </UiCard>
    <UiCard
      class="group col-span-full cursor-pointer rounded-xl transition hover:border-primary lg:col-span-4"
    >
      <UiCardContent class="flex h-full flex-col items-center justify-center gap-5 py-10 lg:py-4">
        <p>Add new tag</p>
        <Icon
          name="solar:add-square-line-duotone"
          class="h-10 w-10 text-muted-foreground transition group-hover:text-primary"
        />
      </UiCardContent>
    </UiCard>
  </section>
</template>
