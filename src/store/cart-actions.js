import { cartActions } from "./CartSlice";
import { uiActions } from "./UI-Slice";

export const fetchCartData = () => {
  return async (dispatch) =>{
const  fetchData = async () => {
  const response = await fetch(
    'https://expensetracker-20e7a-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json');
    if(!response.ok){
        throw new Error('Could not fetch cart data!')
    }
    const data = await response.json();
    return data;
}


 try{
  const cartData = await fetchData();
  dispatch(cartActions.replaceCart({
    items: cartData.items || [],
    totalQuantity: cartData.totalQuantity || []
  }));

 } catch (error){
    dispatch(
        uiActions.showNotifcation({
          status: 'Error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        })
      );
 }
  };
}


export const sendcartData = (cart ) => {
    return async (dispatch) => {
      const sendCodedata = async () => {
          dispatch(
            uiActions.showNotifcation({
              status: 'pending',
              title: 'sending',
              message: 'Sending cart data!',
            })
          );
          const sendRequest = async() => {
              const response = await fetch(
                  'https://expensetracker-20e7a-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
                  {
                    method: 'PUT',
                    body: JSON.stringify({
                        items: cart.items,
                        totalQuantity: cart.totalQuantity,
                    }),
                  }
                );
                if (!response.ok) {
                  throw new Error('Sending cart data failed.!');
                }
          }
        try{
          await sendRequest();
    
          dispatch(
            uiActions.showNotifcation({
              status: 'success',
              title: 'success!',
              message: 'Sending cart data successfully!',
            })
          );
        } catch(error){
          dispatch(
              uiActions.showNotifcation({
                status: 'Error',
                title: 'Error!',
                message: 'Sending cart data failed!',
              })
            );
        }  
        
        };
      
        sendCodedata().catch((error) => {
        
        });
    }
    
  }
  
  