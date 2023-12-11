<template>
  <div class="container flex flex-col">
    <AdminHeader />
    <main class="grid grow grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)]">
      <AdminMenu />
      <div class="container py-5">
        <slot />
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup></script>
