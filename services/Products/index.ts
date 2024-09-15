export const endpoint = "products";

import { byId } from "./byId";
import { create } from "./create";
import { delet } from "./delete";
import { getAll } from "./getAll";
import { update } from "./update";

const Products = {
  getAll,
  update,
  create,
  byId,
  delet 
}

export { Products }

