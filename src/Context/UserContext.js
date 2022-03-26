import { createContext, useState } from "react";

export const UserContext = createContext();

// TODO Context necesita un Provider el cual se encarge de guardar o retnorna la informacion
export const UserPorvider = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) ?? []
  );

  const storeUser = (dataUser) => {
    localStorage.setItem("user", JSON.stringify(dataUser));
    setUser(dataUser);
  };

  // vamos a guardar el objeto de cada producto
  const storeBasket = (Product) => {
    Product.quantity = 1;
    setBasket([...basket, Product]);
    localStorage.setItem("basket", JSON.stringify([...basket, Product]));
  };

  const deleteElementFromBasket = (id) => {
    const product = basket.filter((bas) => bas.id !== id);
    setBasket(product);
    localStorage.setItem("basket", JSON.stringify(product));
  };

  const addOrRemoveProduct = (id, add) => {
    // este id nos vas a servir para poder encontrar el product
    // add es un bool por si add es true entonces suma sino resta
    const products = basket.map((product) => {
      // estamos buscando al producto que tenga el id que estamos recibiendo
      if (product.id === id) {
        if (add) {
          product.quantity += 1;
        } else {
          // debemos validar que la cantidad minima para poder restar 1
          if (product.quantity > 1) {
            product.quantity -= 1;
          }
        }
      }
      // por ende despues del if el elemement quantity ha sido alterado
      return {
        ...product,
      };
    });
    setBasket(products);
    localStorage.setItem("basket", JSON.stringify(products));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        storeUser,
        basket,
        storeBasket,
        deleteElementFromBasket,
        addOrRemoveProduct,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
