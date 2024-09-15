import { User } from "@/types/env";
import Image from 'next/image';
import Link from "next/link";

const UsersTile = ({ user }: { user: User }) => {
  const { age, email, firstName, gender, id, image, lastName, phone } = user;
  return (
    <Link href={`/users/${id}`} replace>
      <div key={id} className="p-4 bg-white rounded-lg shadow-md flex items-center space-x-4">
        <Image src={image} alt={firstName} className="w-16 h-16 rounded-full" />
        <div>
          <h3 className="font-semibold text-lg">{firstName} {lastName}</h3>
          <p className="text-gray-600">Age: {age}, Gender: {gender}</p>
          <p className="text-gray-500">📧 {email}</p>
          <p className="text-gray-500">📞 {phone}</p>
        </div>
      </div>
    </Link>
  )
}

export default UsersTile