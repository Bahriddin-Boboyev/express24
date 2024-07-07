import { appStore } from '@/store';
import { ReactNode, useEffect, useRef } from 'react';

type Props = {
  btnText: string;
  btnStyle?: string;
  afterIcon?: ReactNode;
  dropdownItems: string[];
};

export const Select = ({ ...props }: Props) => {
  const { setSelectIsOpen, selectIsOpen } = appStore();
  const selectRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (selectIsOpen && selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setSelectIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', (e) => handleClickOutside(e));
    return () => {
      document.removeEventListener('click', (e) => handleClickOutside(e));
    };
  }, [selectIsOpen]);

  const handleClose = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, item: string) => {
    e.stopPropagation();
    console.log(item);
    setSelectIsOpen(false);
  };

  const handleClick = () => {
    setSelectIsOpen(!selectIsOpen);
  };

  return (
    <div className="Select relative" ref={selectRef}>
      <button className={props.btnStyle} onClick={handleClick}>
        <span>{props.btnText}</span>
        {props?.afterIcon && props.afterIcon}
      </button>
      <ul
        className={`dropdown-content absolute z-[2] min-w-[288px] max-h-[350px] w-fit rounded-xl bg-white overflow-scroll shadow-headerSelect ease-in-opacity right-0 ${
          selectIsOpen ? '' : 'hidden'
        }`}
      >
        {props.dropdownItems.map((item, index) => (
          <li
            key={index}
            className={`select-border-b flex p-4 whitespace-nowrap justify-between gap-[10px] cursor-pointer hover:bg-[#ececf1] ease-in-bg1 `}
            onClick={(e) => handleClose(e, item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
