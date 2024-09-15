"use client"
import { useToast } from '@/hooks/use-toast';
import { Products } from '@/services/Products';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React from 'react';
import ProductPageTile from '../../../../Molecules/Content/Product/index';

const ProductPage = ({ id }: { id: number }) => {

  const router = useRouter();
  const { toast } = useToast()
  const { data: productData } = useQuery({
    queryKey: ['todo'],
    queryFn: () => {
      return Products.byId({ id });
    }
  })

  const handleUpdate = () => {
    console.log(`Updating Product with id: ${id}`);
    // Add logic to update the product
  };

  const handleDelete = () => {
    console.log(`Deleting Product with id: ${id}`);
    Products.delet({ id });
    // Add logic to delete the product
    router.push('/products'); // Redirect to products list
    toast({ title: 'Product deleted' })
  };

  return (
    <div className="p-6 bg-green-50 min-h-screen">
      <h1 className="text-2xl font-bold">Product Details</h1>
      <ProductPageTile product={productData!} deleteHandler={handleDelete} updateHandler={handleUpdate} />
    </div>
  );
};

export default ProductPage;
