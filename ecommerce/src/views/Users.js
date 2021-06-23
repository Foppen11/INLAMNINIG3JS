import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../store/actions/usersActions';
import UserCard from '../components/users/UserCard';

const Users = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch])
    
    return (
        <div>
        {
          user && user.map(user => (
            <UserCard key={user._id} user={user} />
              ))
        }
        </div>
  )
}

export default Users