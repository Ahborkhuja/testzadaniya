"use server"

import PostsGrid from '../../../../components/Organisms/Layout/Grid/Posts/index';

const PostsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-7xl mx-auto space-y-10">
        <PostsGrid />
      </div>
    </div>
  )
}

export default PostsPage