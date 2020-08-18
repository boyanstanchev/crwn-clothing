import React from 'react';

import './collection-preview.styles.scss';

import { ICollectionItem } from '../../pages/shop/shop.component';

import CollectionItem from '../collection-item/collection-item.component';

const ColletionPreview = ({
  title,
  items,
}: {
  title: string;
  items: ICollectionItem[];
}) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((_, index) => index < 4)
        .map(({ id, ...otherProps }) => (
          <CollectionItem key={id} {...otherProps} />
        ))}
    </div>
  </div>
);

export default ColletionPreview;
