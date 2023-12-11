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
        <h1 class="mb-2 text-2xl font-semibold lg:text-3xl">Account verification</h1>
        <p class="text-muted-foreground">
          Enter your one-time password below. It was sent to your email earlier.
        </p>

        <form class="mt-10" @submit="submit">
          <fieldset :disabled="isSubmitting" class="grid gap-5">
            <UiVeePinInput :inputCount="6" name="otp" label="Verification code" />
            <div>
              <UiButton class="mt-3" type="submit">Verify account</UiButton>
            </div>
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
  const { handleSubmit, isSubmitting } = useForm({
    validationSchema: toTypedSchema(OTPSchema),
  });

  const submit = handleSubmit(async (values) => {
    useSonner.promise(useGlobals().fakePromise, {
      loading: "Verifying account...",
      success: () => {
        navigateTo("/signin");
        return "Account verified successfully";
      },
      error: () => "Failed to create account",
    });
  });

  useSeoMeta({
    title: "Account verification",
    description:
      "Enter your one-time password below. It was sent to your email after your account was created.",
  });
  definePageMeta({ layout: "blank" });
</script>
