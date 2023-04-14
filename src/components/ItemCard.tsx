import React, { useContext } from 'react';
import HeartIcon from './icons/HeartIcon';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from './context/ProductContext';

interface Props {
  id: number;
  title: string;
  userName: string;
  price: number;
  img: string;
}

const Li = styled.li`
list-style-type: none;
    border: 1px solid;
    width: 20rem;
    height: 22rem;
    margin: 2rem;
`

const Title = styled.h2`
  margin-left: 1rem;
`

const PriceTag = styled.span`
  float: right;
  margin-right: 1rem;
`

const User = styled.span`
  margin-left: 1rem;
`

const Img = styled.img`
  width: 20rem;
  height: 10rem;
`

const Icon = styled.span`
  display: block;
  text-align: center;
`

function ItemCard(props:Props) {
  const photoDetails = useContext(ProductContext);
  const navigate = useNavigate();
  function goToProduct(){
    navigate(`/store/${props.id}`);
    photoDetails.setId(props.id);
    photoDetails.setTitle(props.title);
    photoDetails.setUserName(props.userName);
    photoDetails.setPrice(props.price);
    photoDetails.setImg(props.img);
    console.log(photoDetails);
  }

  return (
    <Li onClick={goToProduct}>
      <Img src={props.img} alt="" />
      <Title>{props.title}</Title>
        <User>{props.userName}</User>
        <PriceTag>Fr. {props.price}SEK</PriceTag>
        <Icon><HeartIcon /></Icon>
    </Li>
  )
}

export default ItemCard
