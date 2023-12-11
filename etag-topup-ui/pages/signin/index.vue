<template>
  <div class="container flex min-h-screen items-center justify-center">
    <div class="hidden h-screen w-full py-10 md:block md:w-1/3 lg:w-1/2">
      <img
        src="https://images.unsplash.com/photo-1564668836804-05a2de350bb6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Highway Image"
        class="h-full w-full rounded-xl object-cover shadow-md"
      />
    </div>
    <div class="flex w-full items-center justify-center md:w-2/3 lg:w-1/2">
      <div class="w-full max-w-sm">
        <h1 class="mb-2 text-2xl font-semibold lg:text-3xl">Welcome back</h1>
        <p class="text-muted-foreground">Welcome back! Enter your details to sign in.</p>
        <form class="mt-10" @submit="submit">
          <fieldset :disabled="isSubmitting" class="grid gap-5">
            <UiVeeInput label="Email" placeholder="johndoe@example.com" name="email" type="email" />
            <UiVeeInput label="Password" placeholder="********" name="password" type="password" />
            <div class="py-2">
              <NuxtLink
                class="text-sm font-semibold text-primary hover:underline"
                to="/forgot-password"
                >Forgot password</NuxtLink
              >
            </div>
            <UiButton class="mt-3" type="submit">Sign in</UiButton>
          </fieldset>
        </form>
        <p class="mt-10 text-sm">
          Don't have an account?
          <NuxtLink class="font-semibold text-primary underline-offset-2 hover:underline" to="/"
            >Create one here</NuxtLink
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { SignInSchema } from "~/utils/validations";

  const { handleSubmit, isSubmitting } = useForm({
    validationSchema: toTypedSchema(SignInSchema),
  });

  const submit = handleSubmit(async (values) => {
    const id = useSonner.loading("Signing in...");
    await useGlobals().fakePromise();
    useSonner.success("Signed in successfully", { id });
    await navigateTo("/admin/home", { replace: true });
    return;
  });

  useSeoMeta({
    title: "Sign in",
    description: "Sign in to your account",
  });
  definePageMeta({ layout: "blank" });
</script>
