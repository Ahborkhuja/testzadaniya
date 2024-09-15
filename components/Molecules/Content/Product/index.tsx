import Image from "next/image";
import { IProductsPageTile } from "./types"
import { Button } from "@/components/ui/button";

const ProductPageTile = ({ deleteHandler, product, updateHandler }: IProductsPageTile) => {
  const { availabilityStatus,  description, images, price, rating,  title } = product;
  return (
    <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
      <Image src={images[0]} alt={title} className="w-32 h-32 object-cover" />
      <p><strong>Title:</strong> {title}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Price:</strong> ${price}</p>
      <p><strong>Rating:</strong> ⭐ {rating}</p>
      <p><strong>Availability:</strong> {availabilityStatus}</p>
      <div className="mt-6 space-x-4">
        <Button onClick={updateHandler} className="bg-blue-500 text-white px-4 py-2 rounded">Update</Button>
        <Button onClick={deleteHandler} className="bg-red-500 text-white px-4 py-2 rounded">Delete</Button>
      </div>
    </div>
  )
}

export default ProductPageTile