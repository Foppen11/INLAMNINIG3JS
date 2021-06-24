const actiontypes = () => {
    return {
      productCatalog: {
        set:      'PRODUCT_CATALOG_SET'
      },
      product: {
        set:      'PRODUCT_SET',
        clear:    'PRODUCT_CLEAR'
      },
      cart: {
        add:      'ADD_TO_CART',
        sub:      'SUB_FROM_CART',
        delete:   'DELETE_FROM_CART',
        clear:    'CLEAR_CART'
      },
      orderCatalog: {
        set:      'ORDER_CATALOG_SET'
      },
      order: {
        set:      'ORDER_SET',
        add:      'ORDER_ADD',
        clear:    'ORDER_CLEAR',
        loading:  'ORDER_LOADING'
      },
      auth: {
        loading: 'AUTH_LOADING',
        success: 'AUTH_SUCCESS',
        failure: 'AUTH_FAILURE',
        logout:  'AUTH_LOGOUT'
      },
      users: {
        getUsers: 'USERS_GET',
        loading:  'USERS_LOADING',
        success:  'USERS_SUCCESS',
        failure:  'USERS_FAILURE'
      },
      user: {
        getUser:  'USER_GET',
        loading:  'USER_LOADING',
        success:  'USER_SUCCESS',
        failure:  'USER_FAILURE',
        update:   'USER_UPDATE',
        delete:   'USER_DELETE'
      }
    }
  }
  
  export default actiontypes;