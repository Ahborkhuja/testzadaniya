export const endpoint = "posts";

import { byId } from "./byId";
import { create } from "./create";
import { delet } from "./delete";
import { getAll } from "./getAll";
import { update } from "./update";

const Posts = {
  getAll,
  update,
  create,
  byId,
  delet 
}

export { Posts }

