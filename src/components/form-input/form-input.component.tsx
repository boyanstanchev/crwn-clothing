import React from 'react';

import './form-input.styles.scss';

const FormInput = ({
  handleChange,
  label,
  ...otherProps
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  required?: boolean;
  name?: string;
  type?: string;
  value?: string;
}) => (
  <div className="group">
    <input
      {...otherProps}
      onChange={handleChange}
      className="form-input"
    />
    {label ? (
      <label
        className={`${
          otherProps.value?.length ? 'shrink' : ''
        } form-input-label`}
        htmlFor=""
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
