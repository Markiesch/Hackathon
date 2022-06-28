interface Item {
  name: string;
  description: string;
}

const events: Item[] = [
  { name: "Evenement 1", description: "de beschrijving" },
  { name: "Nieuw evenement 2", description: "de beschrijving" },
  { name: "Nieuw evenement 3", description: "de beschrijving" },
];

export default defineEventHandler(() => events);
