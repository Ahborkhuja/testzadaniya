import React from 'react'
import { IUserPageTile } from './types'
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const UserPageTile = ({ deleteHandler, updateHandler, user }: IUserPageTile) => {
  const { image, firstName, lastName, email, phone, } = user;
  return (
    <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
      <Image src={image} alt={firstName} className="w-32 h-32 object-cover rounded-full" />
      <p><strong>Name:</strong> {firstName} {lastName}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <div className="mt-6 space-x-4">
        <Button onClick={updateHandler} className="bg-blue-500 text-white px-4 py-2 rounded">Update</Button>
        <Button onClick={deleteHandler} className="bg-red-500 text-white px-4 py-2 rounded">Delete</Button>
      </div>
    </div>
  )
}

export default UserPageTile