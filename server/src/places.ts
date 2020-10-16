interface Place {
  id: string;
  name: string;
  address: string;
  price: number;
  tags: string[];
}
export const places: Place[] = [
  {
    id: "001",
    name: "Taj Mahal",
    address: "3210 Scotchmere Dr W, Toronto, ON, CA",
    price: 3,
    tags: ["pet friendly", "trendy"],
  },
  {
    id: "002",
    name: "Naru Sushi",
    address: "San Francisco",
    price: 2,
    tags: ["food", "open now"],
  }
];