"use server"

import ProductsGrid from "@/components/Organisms/Layout/Grid/Products"

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-7xl mx-auto space-y-10">
        <ProductsGrid />
      </div>
    </div>)
}

export default ProductsPage
