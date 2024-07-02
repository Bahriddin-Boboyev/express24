import React, { useState } from 'react';
import { Icon } from '@/assets';

type Props = {
  text: string;
  type: string;
  placeholder?: string;
  label?: string;
  beforeIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

export const Input = ({ ...props }: Props) => {
  const [inputVal, setInputVal] = useState('');

  const clearInput = () => {
    setInputVal('');
  };

  return (
    <div className="w-inherit flex relative items-center border border-[#d1d1d6] rounded-xl overflow-hidden">
      {props?.beforeIcon && (
        <div className="icon w-[18px] h-[18px] absolute left-3 flex items-center justify-center">
          <props.beforeIcon />
        </div>
      )}
      <input
        className="input px-[40px] py-[14px] border-none outline-none w-inherit flex-1 m-0 outline-0 text-[16px] leading-5"
        id="input"
        placeholder={props.placeholder}
        type={props.type}
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <div
        className="icon clear-icon opacity-0 pointer-events-none cursor-none w-[20px] h-[20px] text-[#aeaeb2] absolute right-3"
        onClick={clearInput}
      >
        <Icon.InputClear />
      </div>
      {props?.label && <label htmlFor="input">{props.label}</label>}
    </div>
  );
};
