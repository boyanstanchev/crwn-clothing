import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({
  children,
  ...otherProps
}: {
  children: any;
  type?: "button" | "submit" | "reset" | undefined;
  value: string;
  onClick?: any;
}) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
