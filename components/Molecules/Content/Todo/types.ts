import { Todo } from "@/types/env";

export interface ITodoPageTile {
  todo: Todo,
  handleDelete: (id: number) => void;
  handleUpdate: (id: number) => void;
}