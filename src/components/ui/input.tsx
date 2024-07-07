import React, { useState } from 'react';
import { Icon } from '@/assets';

type Props = {
  text: string;
  type: string;
  placeholder?: string;
  label?: string;
  beforeIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  style?: string;
  isPhoneInput: boolean;

  handleChange: (val: string) => void;
};

export const Input = ({ ...props }: Props) => {
  const [inputVal, setInputVal] = useState('');
  const [isKey, setIsKey] = useState(false);
  const clearInput = () => {
    setInputVal('');
  };

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regexPhone = /[^0-9+]/g;
    let formattedNumber = '';
    const { value } = e.target;
    const { length } = value;

    const sliceVal = value.trim().slice(-1);
    const regex = (value: string, rgx: RegExp, spliceVal: string) => value.replace(rgx, spliceVal);
    if (sliceVal.match(regexPhone)?.length || length === 18) {
      setInputVal(inputVal);
      return;
    }

    formattedNumber = value
      .replace(/^\+$/, value)
      .replace(/^\d{1}$/, `+${value}`)
      .replace(/^\+\d{3}$/, `${value} `)
      .replace(/^\+\d{3}\s\d{2}$/, `${value} `)
      .replace(/^\+\d{3}\s\d{2}\s\d{3}$/, `${value} `)
      .replace(/^\+\d{3}\s\d{2}\s\d{3}\s\d{2}$/, `${value} `);

    if (isKey) {
      formattedNumber = formattedNumber.trim();
      setIsKey(false);
    }
    const val = formattedNumber! || '';
    setInputVal(val);
    props.handleChange(val);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.isPhoneInput) {
      handlePhoneInput(e);
      return;
    }

    props.handleChange(e.target.value);
    setInputVal(e.target.value);
  };

  const handleInputDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Backspace') {
      setIsKey(true);
    }
  };

  return (
    <div className="w-inherit flex relative items-center border border-[#d1d1d6] rounded-xl overflow-hidden">
      {props?.beforeIcon && (
        <div className="icon w-[18px] h-[18px] absolute left-3 flex items-center justify-center">
          <props.beforeIcon />
        </div>
      )}
      <input
        className={`input ${
          props.beforeIcon ? 'px-[40px] py-[14px]' : ''
        } border-none outline-none w-inherit flex-1 m-0 outline-0 text-[16px] leading-5 ${props.style}`}
        id="input"
        placeholder={props.placeholder}
        type={props.type}
        value={inputVal}
        onChange={handleInputChange}
        onKeyDown={handleInputDown}
      />
      <div
        className="icon clear-icon opacity-0 pointer-events-none cursor-none w-[20px] h-[20px] text-[#aeaeb2] absolute right-3"
        onClick={clearInput}
      >
        <Icon.InputClear />
      </div>
      {props?.label && (
        <label
          htmlFor="input"
          className="input-animation-label h-[fit-content] absolute top-[14px] left-3 text-base text-secondary-gray pointer-events-none input-label"
        >
          {props.label}
        </label>
      )}
    </div>
  );
};
