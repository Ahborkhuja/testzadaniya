import { Todo } from "@/types/env";

export interface ITodoPageTile {
  todo: Todo,
  handleDelete: () => void;
  handleUpdate: () => void;
}