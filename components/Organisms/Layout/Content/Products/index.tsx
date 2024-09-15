import { useRouter } from 'next/router';
import React, { useState } from 'react';

interface Review {
  user: string;
  comment: string;
  rating: number;
}

interface Meta {
  createdAt: string;
  updatedAt: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
  availabilityStatus: string;
}

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Simulating fetching data based on ID
  const [product, setProduct] = useState<Product>({
    id: Number(id),
    title: 'Sample Product',
    description: 'This is a sample product description.',
    price: 99.99,
    rating: 4.5,
    images: ['https://via.placeholder.com/200'],
    availabilityStatus: 'In stock',
  });

  const handleUpdate = () => {
    console.log(`Updating Product with id: ${product.id}`);
    // Add logic to update the product
  };

  const handleDelete = () => {
    console.log(`Deleting Product with id: ${product.id}`);
    // Add logic to delete the product
    router.push('/products'); // Redirect to products list
  };

  return (
    <div className="p-6 bg-green-50 min-h-screen">
      <h1 className="text-2xl font-bold">Product Details</h1>
      <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
        <img src={product.images[0]} alt={product.title} className="w-32 h-32 object-cover" />
        <p><strong>Title:</strong> {product.title}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Rating:</strong> ⭐ {product.rating}</p>
        <p><strong>Availability:</strong> {product.availabilityStatus}</p>
        <div className="mt-6 space-x-4">
          <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
          <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
