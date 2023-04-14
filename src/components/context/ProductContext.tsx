import React, { createContext, Dispatch } from "react";

interface IProductContext {
  id: number;
  setId: Dispatch<React.SetStateAction<number>>;
  title: string;
  setTitle: Dispatch<React.SetStateAction<string>>;
  userName: string;
  setUserName: Dispatch<React.SetStateAction<string>>;
  price: number;
  setPrice: Dispatch<React.SetStateAction<number>>;
  img: string;
  setImg: Dispatch<React.SetStateAction<string>>;
}

export const ProductContext = createContext<IProductContext>({
  id: 0,
  setId: () => {},
  title: '',
  setTitle: () => {},
  userName: '',
  setUserName: () => {},
  price: 0,
  setPrice: () => {},
  img: '',
  setImg: () => {}
});
