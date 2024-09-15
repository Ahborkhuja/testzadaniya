import { User } from "@/types/env";

export interface IUserPageTile {
  user: User,
  deleteHandler: () => void
  updateHandler: () => void
}