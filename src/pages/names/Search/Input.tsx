import React from 'react';
import { Input as AntdInput } from 'antd';


const { Search } = AntdInput;

interface InputProps {
  onChange: (value: string) => void;
  disabled: boolean;
}

const Input: React.FC<InputProps> = ({ onChange, disabled }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => onChange(event.target.value);

  return (
    <Search
      disabled={disabled}
      onChange={handleChange}
      style={{ width: '100%' }}
      placeholder="Search by name" />
  );
};


export default Input;
