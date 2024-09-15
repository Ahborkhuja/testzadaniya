"use server"

import { Post } from "@/types/env"
import { revalidateTag } from "next/cache";
import { endpoint } from ".";

export type NewPost = Partial<Post>;

export const create = async (post: NewPost): Promise<string | number> => {

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

