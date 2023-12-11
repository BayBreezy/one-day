<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <Lenis>
        <NuxtPage />
      </Lenis>
    </NuxtLayout>
    <UiVueSonner />
  </div>
</template>

<script lang="ts" setup>
  const title = "eTag UI";
  const description =
    "This is how I would improve the UI for the eTag Topup website/app. It can be found here: https://atopup.h2k-jio.com/";
  const url = process.env.PUBLIC_URL;
  const image = "/cover.png";
  useSeoMeta({
    ogTitle: title,
    ogDescription: description,
    ogImage: image,
    ogUrl: url,
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
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
        href: "/favicon.ico",
      },
    ],
  });
</script>
<style>
  .page-enter-active,
  .page-leave-active,
  .layout-enter-active,
  .layout-leave-active {
    transition: all 0.4s ease;
  }

  .page-enter-from {
    opacity: 0;
    transform: scale(0.95);
    filter: blur(10px);
  }

  .page-leave-to {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(10px);
  }

  .layout-enter-from {
    opacity: 0;
    transform: scale(0.98);
  }

  .layout-leave-to {
    opacity: 0;
    transform: scale(0.98);
  }
</style>
