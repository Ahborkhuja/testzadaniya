"use server"
import { User } from "@/types/env"
import { revalidateTag } from "next/cache";
import { endpoint } from ".";

export type NewUser = Pick<User, 'username' & 'password'>;

export const login = async (post: NewUser): Promise<string | number> => {

  const res = await fetch(`${process.env.API_URL}/${endpoint}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post),
  });

  revalidateTag(endpoint);

  return res.json();
}

