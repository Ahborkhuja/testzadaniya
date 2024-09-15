"use client"
import { useQuery } from '@tanstack/react-query';
import { Users } from "@/services/Users";

import React from 'react';
import UsersTile from '@/components/Molecules/Tile/User';


const UsersGrid = () => {
  const { data: usersData, isFetching } = useQuery({
    queryKey: ['users'],
    queryFn: () => {
      return Users.getAll()
    }
  })

  return (
    <div className="bg-purple-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <div className="space-y-4">
        {!isFetching && usersData?.data.map(user => (
          <UsersTile user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersGrid;
