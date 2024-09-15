import { Button } from "@/components/ui/button";
import { ITodoPageTile } from "./types"

const TodoPageTile = ({ todo, handleDelete, handleUpdate }: ITodoPageTile) => {
  const { completed, id } = todo;
  return (
    <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Task:</strong> {todo.todo}</p>
      <p><strong>Completed:</strong> {completed ? 'Yes' : 'No'}</p>
      <div className="mt-6 space-x-4">
        <Button onClick={() => handleUpdate(id)} className="bg-blue-500 text-white px-4 py-2 rounded">Update</Button>
        <Button onClick={() => handleDelete(id)} className="bg-red-500 text-white px-4 py-2 rounded">Delete</Button>
      </div>
    </div>
  )
}

export default TodoPageTile