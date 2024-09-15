import { Product } from '@/types/env';
import Image from 'next/image';
import Link from 'next/link';

const ProductTile = ({ product }: { product: Product }) => {
  const { availabilityStatus, description, id, images, meta, price, rating, reviews, tags, title } = product;

  return (
    <Link href={`/product/${id}`}>
      <div key={id} className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex space-x-4">
          <Image
            src={images[0]}
            alt={title}
            className="w-32 h-32 object-cover rounded-lg"
          />
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <p className="mt-2 font-bold">${price}</p>
            <p className="text-sm text-green-600">{availabilityStatus}</p>
          </div>
        </div>
        <div className="mt-4">
          <p>Rating: ⭐ {rating}</p>
          <div className="flex gap-2 mt-2">
            {tags.map(tag => (
              <span key={tag} className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded">
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-sm font-semibold">Reviews:</h4>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            {reviews.slice(0, 2).map((review, index) => (
              <li key={index} className="border-b pb-2">
                <strong>{review.reviewerName}:</strong> {review.comment} (⭐ {review.rating})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  )
}

export default ProductTile