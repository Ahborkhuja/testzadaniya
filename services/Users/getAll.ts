"use server"

import { Pagination, User } from "@/types/env"
import { endpoint } from ".";

export const getAll = async () : Promise<Pagination<User[]>> => {
  // there can be add search and etc for much better UX
  const res = await fetch(`${process.env.API_URL}/${endpoint}`,{
    next:{
      tags:[endpoint]
    }
  })
  return res.json(); 
}

