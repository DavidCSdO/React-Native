import Axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../Const/cart';

export const addToCart = (productId, qtd) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/products/${productId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.imagem,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      qtd,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({type: CART_REMOVE_ITEM, payload : productId});
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}