<template>
  <div>
    <h1 class="mb-2 text-2xl font-bold lg:text-3xl">Hey Jonas</h1>
    <p class="text-muted-foreground">Welcome back! Here is an overview of your account.</p>
    <UiSeparator decorative class="my-10" />

    <p class="text-xl font-semibold">Products</p>
    <p class="text-sm text-muted-foreground">A list of Products owned by you</p>

    <AdminProducts />

    <UiSeparator decorative class="my-10" />

    <p class="text-xl font-semibold">Quick actions</p>
    <p class="text-sm text-muted-foreground">In a rush? Here are some quick actions</p>

    <AdminQuickActions />

    <UiSeparator decorative class="my-10" />

    <p class="text-xl font-semibold">Recent travels</p>
    <p class="text-sm text-muted-foreground">
      Here are the most recent transactions on your account.
    </p>

    <section class="mt-10">
      <UiDatatable :data="transactions" :options="options" />
    </section>
  </div>
</template>

<script lang="ts" setup>
  import type { Config } from "datatables.net";

  const options = ref<Config>({
    dom: "<'flex flex-col lg:flex-row w-full lg:items-center lg:justify-between gap-5 mb-5 py-2 px-2'Bf><'border rounded-lg't><'flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between pt-3 p-5'li>",
    autoWidth: true,
    responsive: true,
    language: {
      searchPlaceholder: "Search transactions",
      search: "",
    },

    buttons: [
      "copy",
      "csv",
      "excel",
      "pdf",
      {
        extend: "print",
        text: "Print",
        title: "Transactions",
      },
    ],
    columns: [
      { data: "laneId", title: "Lane ID" },
      { data: "plaza", title: "Plaza Name" },
      {
        data: "date",
        title: "Date & time",
        render(data, type, row, meta) {
          return useDateFormat(row.date, "MMM DD, YYYY [at] h:mm A").value;
        },
      },
      {
        data: "amount",
        title: "Amount",
        render(data, type, row, meta) {
          return "- " + useCurrencyFormat(row.amount);
        },
      },
      {
        data: "balance",
        title: "Balance",
        render(data, type, row, meta) {
          return useCurrencyFormat(row.balance);
        },
      },
    ],
  });

  const useCurrencyFormat = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  const transactions = [
    {
      plaza: "May Pen W",
      laneId: "M05",
      date: new Date(),
      amount: 190,
      balance: 17550,
    },
    {
      plaza: "May Pen W",
      laneId: "M05",
      date: new Date(),
      amount: 190,
      balance: 17550,
    },
    {
      plaza: "May Pen W",
      laneId: "M05",
      date: new Date(),
      amount: 190,
      balance: 17550,
    },
    {
      plaza: "May Pen W",
      laneId: "M05",
      date: new Date(),
      amount: 190,
      balance: 17550,
    },
    {
      plaza: "May Pen W",
      laneId: "M05",
      date: new Date(),
      amount: 190,
      balance: 17550,
    },
    {
      plaza: "May Pen W",
      laneId: "M05",
      date: new Date(),
      amount: 190,
      balance: 17550,
    },
    {
      plaza: "May Pen W",
      laneId: "M05",
      date: new Date(),
      amount: 190,
      balance: 17550,
    },
    {
      plaza: "May Pen W",
      laneId: "M05",
      date: new Date(),
      amount: 190,
      balance: 17550,
    },
  ];

  useSeoMeta({
    title: "Home",
    description: "Home page for the admin dashboard",
  });
</script>
