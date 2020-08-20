import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import './menu-item.styles.scss';

interface IProps extends RouteComponentProps<any> {
  title: string;
  imageUrl: string;
  linkUrl: string;
  size?: string;
}

const MenuItem = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
}: IProps) => (
  <div
    className={`${size || ''} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className='background-image'
    ></div>
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
