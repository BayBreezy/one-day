<template>
  <section class="mt-10 grid grid-cols-12 gap-5 lg:gap-10">
    <UiCard
      class="group col-span-full overflow-hidden border-none bg-gradient-to-b from-primary/50 to-yellow-500/50 p-[2px] transition hover:from-primary hover:to-yellow-500 active:scale-95 lg:col-span-4"
    >
      <UiCardContent
        class="w-full cursor-pointer rounded-md bg-background p-4 transition group-hover:bg-transparent group-hover:text-white"
      >
        <div class="flex items-start gap-4">
          <Icon name="solar:refresh-bold-duotone" class="mt-px h-7 w-7 group-hover:animate-spin" />
          <div class="text-sm">
            <p class="mb-1 font-medium">Auto Top-up</p>
            <small class="text-xs font-light">Configure auto top-up</small>
          </div>
        </div>
      </UiCardContent>
    </UiCard>
    <UiCard
      class="group col-span-full overflow-hidden border-none bg-gradient-to-b from-primary/50 to-yellow-500/50 p-[2px] transition hover:from-primary hover:to-yellow-500 active:scale-95 lg:col-span-4"
    >
      <UiCardContent
        class="w-full cursor-pointer rounded-md bg-background p-4 transition group-hover:bg-transparent group-hover:text-white"
      >
        <div class="flex items-start gap-4">
          <Icon
            name="solar:card-send-line-duotone"
            class="mt-px h-7 w-7 group-hover:animate-bounce"
          />
          <div class="text-sm">
            <p class="mb-1 font-medium">Quick Top-up</p>
            <small class="text-xs font-light">Add to your balance</small>
          </div>
        </div>
      </UiCardContent>
    </UiCard>
    <UiCard
      class="group col-span-full overflow-hidden border-none bg-gradient-to-b from-primary/50 to-yellow-500/50 p-[2px] transition hover:from-primary hover:to-yellow-500 active:scale-95 lg:col-span-4"
    >
      <UiCardContent
        class="w-full cursor-pointer rounded-md bg-background p-4 transition group-hover:bg-transparent group-hover:text-white"
      >
        <div class="flex items-start gap-4">
          <Icon
            name="solar:transfer-horizontal-bold-duotone"
            class="mt-px h-7 w-7 group-hover:animate-pulse"
          />
          <div class="text-sm">
            <p class="mb-1 font-medium">Transactions</p>
            <small class="text-xs font-light">View your transactions</small>
          </div>
        </div>
      </UiCardContent>
    </UiCard>
  </section>
</template>
