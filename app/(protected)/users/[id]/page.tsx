import React from 'react'
import UserPage from '../../../../components/Organisms/Layout/Content/Users/index';

const User = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <UserPage id={+params.id} />
    </div>
  )
}

export default User