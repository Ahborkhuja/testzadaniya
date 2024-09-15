"use client"

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Products } from '@/services/Products';
import ProductTile from '@/components/Molecules/Tile/Product';

const ProductsGrid = () => {

  const { data: productsData, isFetching } = useQuery({
    queryKey: ['products'],
    queryFn: () => {
      return Products.getAll()
    }
  })

  return (
    <div className="bg-green-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 gap-6">
        {!isFetching && productsData?.data.map(product => (
          <ProductTile product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
