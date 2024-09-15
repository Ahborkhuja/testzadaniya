"use server"

import UsersGrid from "@/components/Organisms/Layout/Grid/Users"

const UsersPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-7xl mx-auto space-y-10">
        <UsersGrid />
      </div>
    </div>)
}

export default UsersPage