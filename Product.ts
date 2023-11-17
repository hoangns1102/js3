type ProductRate = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  rate: ProductRate;
};
