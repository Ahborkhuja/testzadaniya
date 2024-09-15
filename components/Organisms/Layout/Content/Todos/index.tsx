"use client"
import { useToast } from '@/hooks/use-toast';
import { Todos } from '@/services/Todos';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React from 'react';
import TodoPageTile from '../../../../Molecules/Content/Todo/index';

const TodoPage = ({ id }: { id: number }) => {
  const router = useRouter();
  const { toast } = useToast()
  const { data: todoData } = useQuery({
    queryKey: ['todo'],
    queryFn: () => {
      return Todos.byId({ id });
    }
  })

  // There need more time to add an upadate
  const handleUpdate = () => {
    console.log(`Updating Todo with id: ${id}`);
  };

  const handleDelete = async () => {
    await Todos.delet({ id });
    router.push('/todos'); // Redirect to todo list
    toast({ title: "Todo deleted", })
  };

  return (
    <div className="p-6 bg-yellow-50 min-h-screen">
      <h1 className="text-2xl font-bold">Todo Details</h1>
      <TodoPageTile todo={todoData!} handleDelete={handleDelete} handleUpdate={handleUpdate} />
    </div>
  );
};

export default TodoPage;
