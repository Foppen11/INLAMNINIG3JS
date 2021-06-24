import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrdersCatalog } from '../store/actions/orderCatalogActions';
import AdminOrderCard from '../components/orders/AdminOrderCard';

const Orders = () => {
    
    const dispatch = useDispatch();
    const orderCatalog = useSelector(state => state.orderCatalog);
    
    useEffect(() => {
        dispatch(getOrdersCatalog());
    }, [dispatch])
    


    return (
        <div>
        {
          orderCatalog && orderCatalog.map(order => (
            <AdminOrderCard key={order._id} order={order} />
              ))
        }
        </div>
  )
}

export default Orders