import ProductPage from '../../../../../components/Organisms/Layout/Content/Products/index';

const Products = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <ProductPage id={+params.id} />
    </div>
  )
}

export default Products