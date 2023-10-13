import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment, useEffect } from 'react';
import Notification from './components/UI/Notication';
import { fetchCartData, sendcartData } from './store/cart-actions';



let isInitial = true;
function App() {
  const cart = useSelector((state) => state.cart);
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const dispatch = useDispatch((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);
  
  useEffect(() =>{
dispatch(fetchCartData())
  }, [dispatch])
  useEffect(() => {
   
    if(isInitial){
      isInitial = false;
      return;
    }
if(cart.changed){
    dispatch(sendcartData(cart))
}


  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
