import React from 'react';

import './shop.styles.scss';
import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

export interface ICollection {
  id: number;
  title: string;
  routeName: string;
  items: ICollectionItem[];
}

export interface ICollectionItem {
  id?: number;
  name: string;
  imageUrl: string;
  price: number;
}

class ShopPage extends React.Component<{}, { collections: ICollection[] }> {
  constructor(props: any) {
    super(props);

    this.state = {
      collections: SHOP_DATA as ICollection[],
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
