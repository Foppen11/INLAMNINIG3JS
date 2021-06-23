import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrdersByEmail, clearOrder } from '../store/actions/orderCatalogActions';
import OrderCard from '../components/orders/OrderCard'

const ProductDetails = () => {

    const email = useParams().email
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getOrdersByEmail(email))

        return () => {
            dispatch(clearOrder())
          }
        
    }, [dispatch, email])
    
    const order = useSelector(state => state.order.order);


    return (
        <div>
            {
            order && order.map(order => (
                <OrderCard key={order._id} order={order} />
            ))
        }
        </div>
  )
}

export default ProductDetails
