import Link from 'next/link'
import React from 'react'
import { Todo } from '@/types/env';

const TodoTile = ({ todo }: { todo: Todo }) => {
  const { completed, id } = todo;
  return (
    <Link href={`/todos/${id}`}>
      <li key={id} className="flex items-center space-x-3">
        <input type="checkbox" className="form-checkbox" checked={completed} readOnly />
        <span className={completed ? 'line-through text-gray-400' : 'text-gray-800'}>
          {todo.todo}
        </span>
      </li>
    </Link>
  )
}

export default TodoTile