import React from 'react';

import './collection-item.styles.scss';

import { ICollectionItem } from '../../pages/shop/shop.component';

const CollectionItem = ({ id, name, price, imageUrl }: ICollectionItem) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">${price}</span>
    </div>
  </div>
);

export default CollectionItem;
