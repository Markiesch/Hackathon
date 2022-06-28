interface Item {
  name: string;
  description: string;
}

const events = ref<Item[]>([
  { name: "Nieuwe evenement", description: "de beschrijving" },
  { name: "Nieuwe evenement 2", description: "de beschrijving" },
  { name: "Nieuwe evenement 3", description: "de beschrijving" },
]);

export default events;
