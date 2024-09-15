"use server"

import { Todo } from "@/types/env"
import { endpoint } from ".";

export const byId = async ({ id }: { id: number }): Promise<Todo> => {

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

