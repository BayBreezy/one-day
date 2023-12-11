<template>
  <div class="container flex min-h-screen items-center justify-center">
    <div class="flex w-full items-center justify-center md:w-2/3 lg:w-1/2">
      <div class="w-full max-w-sm">
        <h1 class="mb-2 text-2xl font-semibold lg:text-3xl">Create account</h1>
        <p class="text-muted-foreground">Enter your details to create an account</p>
        <form class="mt-10" @submit="submit">
          <fieldset :disabled="isSubmitting" class="grid gap-5">
            <UiVeeMultiSelect
              :options="['Company', 'Individual']"
              name="accountType"
              formLabel="Account type"
              placeholder="Select account type"
            />
            <UiVeeInput label="First name" placeholder="John" name="firstName" />
            <UiVeeInput label="Last name" placeholder="Doe" name="lastName" />
            <UiVeeInput label="Email" placeholder="johndoe@example.com" name="email" type="email" />
            <UiVeeInput label="Phone number" placeholder="876-123-4567" name="phone" type="tel" />
            <UiButton class="mt-3" type="submit">Create account</UiButton>
          </fieldset>
        </form>
        <p class="mt-10 text-sm">
          Already have an account?
          <NuxtLink
            class="font-semibold text-primary underline-offset-2 hover:underline"
            to="/signin"
            >Sign in here</NuxtLink
          >
        </p>
      </div>
    </div>
    <div class="hidden h-screen w-full py-10 md:block md:w-1/3 lg:w-1/2">
      <img
        src="https://images.unsplash.com/photo-1564668836804-05a2de350bb6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Highway Image"
        class="h-full w-full rounded-xl object-cover shadow-md"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  const { handleSubmit, isSubmitting } = useForm({
    validationSchema: toTypedSchema(RegisterSchema),
    initialValues: {
      accountType: "Individual",
    },
  });

  const submit = handleSubmit(async (values) => {
    useSonner.promise(useGlobals().fakePromise, {
      loading: "Creating account...",
      success: () => {
        navigateTo("/otp");
        return "Account created successfully, " + values.firstName;
      },
      error: () => "Failed to create account",
    });
  });

  useSeoMeta({
    title: "Create account",
    description: "Enter your details to create an account",
  });

  definePageMeta({ layout: "blank" });
</script>
