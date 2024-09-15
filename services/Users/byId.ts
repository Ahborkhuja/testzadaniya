"use server"

import { User } from "@/types/env"
import { revalidateTag } from "next/cache";
import { endpoint } from ".";


export const byId = async ({ id }: { id: number}): Promise<User> => {

  const res = await fetch(`${process.env.API_URL}/${endpoint}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    next:{
      tags:[`${endpoint}-${id}`]
    }
  });


  return res.json();
}

