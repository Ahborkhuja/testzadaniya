export const endpoint = "todos";

import { byId } from "./byId";
import { create } from "./create";
import { delet } from "./delete";
import { getAll } from "./getAll";
import { update } from "./update";

const Todos = {
  getAll,
  update,
  create,
  byId,
  delet 
}

export { Todos }

