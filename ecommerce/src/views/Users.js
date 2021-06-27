import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../store/actions/usersActions';
import UserCard from '../components/users/UserCard';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.list);
    
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch])
    
    return (
        <div>
        {
          users && users.map(user => (
            <UserCard key={user._id} user={user} />
              ))
        }
        </div>
  )
}

export default Users