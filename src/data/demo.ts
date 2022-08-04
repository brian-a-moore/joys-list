export const DEMO_TEMPLATES = [
  {
    id: 1,
    title: "Grocery",
    fields: [
      {
        id: 1,
        fieldId: "text",
        title: "Item Name",
        opts: {
          defaultValue: "",
        },
      },
      {
        id: 2,
        fieldId: "number",
        title: "Quantity",
        opts: {
          defaultValue: 1,
          allowNegative: false,
          isDollarFormatted: false,
          showCents: true,
        },
      },
      {
        id: 3,
        fieldId: "number",
        title: "Projected Cost",
        opts: {
          defaultValue: undefined,
          allowNegative: false,
          isDollarFormatted: true,
          showCents: true,
        },
      },
      {
        id: 4,
        fieldId: "number",
        title: "Actual Cost",
        opts: {
          defaultValue: undefined,
          allowNegative: false,
          isDollarFormatted: true,
          showCents: true,
        },
      },
      {
        id: 5,
        fieldId: "checkbox",
        title: "Bought",
        opts: {
          defaultValue: false,
        },
      },
    ],
  },
];
