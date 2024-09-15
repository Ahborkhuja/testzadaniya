import { Post } from '@/types/env';
import Link from 'next/link';

const PostTile = ({ post }: { post: Post }) => {
  const { body, id, reactions, tags, title, views } = post;
  return (
    <Link href={`/posts/${id}`}>
      <div key={id} className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600">{body}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map(tag => (
            <span key={tag} className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded">
              #{tag}
            </span>
          ))}
        </div>
        <div className="mt-3 flex justify-between text-sm text-gray-500">
          <span>💬 {reactions.likes} Reactions</span>
          <span>👁️ {views} Views</span>
        </div>
      </div>
    </Link>
  );
};

export default PostTile;
