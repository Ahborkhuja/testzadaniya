"use client"
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Todos } from '@/services/Todos';
import TodoTile from '@/components/Molecules/Tile/Todo';

const TodosGrid = () => {
  const { data: todoData, isFetching } = useQuery({
    queryKey: ['todos'],
    queryFn: () => {
      return Todos.getAll()
    }
  })
  return (
    <div className="bg-yellow-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Todos</h2>
      <ul className="space-y-2">
        {!isFetching && todoData?.data.map(todo => (
          <TodoTile todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodosGrid;
