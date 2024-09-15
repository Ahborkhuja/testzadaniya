export const endpoint = "users";

import { byId } from "./byId";
import { create } from "./create";
import { delet } from "./delete";
import { getAll } from "./getAll";
import { update } from "./update";

const Users = {
  getAll,
  update,
  create,
  byId,
  delet 
}

export { Users }

