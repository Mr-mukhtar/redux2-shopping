import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment, useEffect } from 'react';
import { uiActions } from './store/UI-Slice';
import Notification from './components/UI/Notication';

let isInitial = true;
function App() {
  const cart = useSelector((state) => state.cart);
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const dispatch = useDispatch((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);
  useEffect(() => {
    const sendCodedata = async () => {
      dispatch(
        uiActions.showNotifcation({
          status: 'pending',
          title: 'sending',
          message: 'Sending cart data!',
        })
      );
      const response = await fetch(
        'https://expensetracker-20e7a-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
        {
          method: 'POST',
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error('Sending cart data failed.!');
      }

      dispatch(
        uiActions.showNotifcation({
          status: 'success',
          title: 'success!',
          message: 'Sending cart data successfully!',
        })
      );
    };
    if(isInitial){
      isInitial = false;
      return;
    }
    sendCodedata().catch((error) => {
      dispatch(
        uiActions.showNotifcation({
          status: 'Error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    });
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
