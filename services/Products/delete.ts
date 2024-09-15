"use server"

import { revalidateTag } from "next/cache";
import { endpoint } from ".";

export const delet = async ({ id }: { id: number }): Promise<string | number> => {

  const res = await fetch(`${process.env.API_URL}/${endpoint}/${id}`, {
    method: 'DELETE',
  });

  revalidateTag(endpoint);

  return res.statusText;
}

