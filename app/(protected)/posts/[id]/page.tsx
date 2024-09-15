import PostPage from '@/components/Organisms/Layout/Content/Posts'
import React from 'react'

const Post = ({ params }: { params: { id: string } }) => {
  return (
    <PostPage id={+(params.id)} />
  )
}

export default Post