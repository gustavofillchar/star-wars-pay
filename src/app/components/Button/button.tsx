import React from 'react'

type ButtonType = {
  children?: string;
  click?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?:boolean
};

const Button: React.FC<ButtonType> = ({ children, click, disabled }) => {
  return (
    <button
      className="uppercase border h-[48px] px-[55px] sm:px-[200px] text-sm border-blue-gravity text-blue-gravity disabled:text-gray-300 disabled:border-gray-gravity-50 disabled:bg-white hover:bg-blue-gravity hover:text-white transition-all duration-500"
      onClick={click}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button