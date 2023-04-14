import React, { useContext } from 'react';
import { ProductContext } from '../components/context/ProductContext';
import styled from 'styled-components';

interface Props {
  id: number;
  title: string;
  userName: string;
  price: number;
  img: string;
}

const Img = styled.img`
  width: 60rem;
  height: 30rem;
`

function Product(props: Props) {
  const someval = useContext(ProductContext);
  return (
    <div>
      <Img src={someval.img} alt="Product" />
      <h2>{someval.title}</h2>
      <p>{someval.userName}</p>
      <strong>{someval.price}</strong>
    </div>
  )
}

export default Product
