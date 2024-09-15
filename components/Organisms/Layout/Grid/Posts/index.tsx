"use client"
import PostTile from "@/components/Molecules/Tile/Posts";
import { Posts } from "@/services/Posts";
import { useQuery } from "@tanstack/react-query";

const PostsGrid = () => {
  const { data: posts, isFetching } = useQuery({
    queryKey: ['posts'],
    queryFn: () => {
      return Posts.getAll();
    }
  })
  // here there can be added loading placeholder for better UI/UX and Performance
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Posts</h2>
      <div className="space-y-4">
        {!isFetching && posts?.data.map(post => (
          <PostTile post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostsGrid