import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

function PhotoItems() {
  const [photoItems, setPhotoItems] = useState<{id: number; title: string; user: string; price: number; img:string}[]>([]);

  useEffect(() => {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
      setPhotoItems(data);
    })
  }, []);
  console.log(photoItems.length);

  return (
    <div>
      <h1>Kevins photo store</h1>
      {photoItems.length === 0 ?
        <p>Nothing here</p>
        :
        <List>
        {photoItems.map(item => {
          console.log();
          console.log(item.title);
          return(
              <ItemCard
                key={item.id}
                id={item.id}
                title={item.title}
                userName={item.user}
                price={item.price}
                img={item.img}
              />
          )
          })}
        </List>
      }

    </div>
  )
}

export default PhotoItems
