import React from 'react';

type ButtonType = {
  children?: string;
  click?: (event: React.MouseEvent<HTMLButtonElement>) => void
};

const Button: React.FC<ButtonType> = ({ children, click }) => {
  return (
    <button
      className="uppercase border h-[48px] px-[200px] text-sm border-blue-gravity text-blue-gravity hover:bg-blue-gravity hover:text-white transition duration-100"
      onClick={click}
    >
      {children}
    </button>
  );
};

export default Button