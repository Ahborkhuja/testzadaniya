import { Product } from "@/types/env";

export interface IProductsPageTile {
  product: Product,
  deleteHandler: () => void;
  updateHandler: () => void;
}