import React from 'react';
import HeartIcon from './icons/HeartIcon';
import styled from 'styled-components';

interface Props {
  id: number;
  title: string;
  userName: string;
  price: number;
  img: any;
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
  return (
    <Li>
      <Img src={props.img} alt="" />
      <Title>{props.title}</Title>
        <User>{props.userName}</User>
        <PriceTag>Fr. {props.price}SEK</PriceTag>
        <Icon><HeartIcon /></Icon>
    </Li>
  )
}

export default ItemCard
