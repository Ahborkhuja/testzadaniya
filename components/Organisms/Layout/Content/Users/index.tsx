"use client"
import { useRouter } from 'next/router';
import React from 'react';
import UserPageTile from '../../../../Molecules/Content/User/index';
import { useQuery } from '@tanstack/react-query';
import { Users } from '@/services/Users';
import { toast } from '@/hooks/use-toast';

const UserPage = ({ id }: { id: number }) => {
  const router = useRouter();

  // Simulating fetching data based on ID
  const { data: userData } = useQuery({
    queryKey: ['user'],
    queryFn: () => {
      return Users.byId({ id });
    }
  })

  const handleUpdate = () => {
    console.log(`Updating User with id: ${id}`);
    // Add logic to update the user
  };

  const handleDelete = () => {
    console.log(`Deleting User with id: ${id}`);
    Users.delet({ id });
    // Add logic to delete the user
    router.push('/users'); // Redirect to users list
    toast({ title: "Delete User" })
  };

  return (
    <div className="p-6 bg-purple-50 min-h-screen">
      <h1 className="text-2xl font-bold">User Details</h1>
      <UserPageTile deleteHandler={handleDelete} updateHandler={handleUpdate} user={userData!} />
    </div>
  );
};

export default UserPage;
