"use server"

import { Todo } from "@/types/env"
import { revalidateTag } from "next/cache";
import { endpoint } from ".";

export type NewTodo = Partial<Todo>;

export const create = async (post: NewTodo): Promise<string | number> => {

  const res = await fetch(`${process.env.API_URL}/${endpoint}/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post),
  });

  revalidateTag(endpoint);

  return res.statusText;
}

