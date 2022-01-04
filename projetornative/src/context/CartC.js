import React, {createContext, useState} from 'react';

export const CartC = createContext();

export default Carrinho = ({children}) => {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <CarrinhoContext.Provider value={[carrinho, setCarrinho]}>
      {children}
    </CarrinhoContext.Provider>
  );
};
