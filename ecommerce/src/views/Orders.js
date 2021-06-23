import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrdersCatalog } from '../store/actions/orderCatalogActions';
import OrderCard from '../components/orders/OrderCard';

const Orders = () => {
    
    const dispatch = useDispatch();
    const orderCatalog = useSelector(state => state.orderCatalog);
    
    useEffect(() => {
        dispatch(getOrdersCatalog());
    }, [dispatch])
    
    return (
        <div className="">
        {
          orderCatalog && orderCatalog.map(order => (
            <OrderCard key={order._id} order={order} />
              ))
        }
        </div>
  )
}

export default Orders