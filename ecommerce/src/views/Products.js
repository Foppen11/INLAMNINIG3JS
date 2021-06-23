import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductCatalog } from '../store/actions/productCatalogActions';
import ProductCard from '../components/products/ProductCard';

const Products = () => {

  const dispatch = useDispatch();
  const productCatalog = useSelector(state => state.productCatalog);
  // const productCatalog = null

  useEffect(() => {
    dispatch(getProductCatalog());
  }, [dispatch])

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {
        productCatalog && productCatalog.map(product => (
          <ProductCard product={product} key={product._id} />
        ))
      }
    </div>
  )
}

export default Products
