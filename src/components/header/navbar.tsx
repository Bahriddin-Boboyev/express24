import { Icon } from '@/assets';
import { Button, Dropdown, Input } from '@/components';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { appStore } from '@/store';

export const Navbar = () => {
  const [isLangShow, setIsLangShow] = useState(false);
  const { setIsOverlay, isOverlay } = appStore();
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('click', (e) => handleClickOutside(e));
    return () => {
      document.removeEventListener('click', (e) => handleClickOutside(e));
    };
  }, []);

  const handleLangShow = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    console.log('work');
    setIsLangShow(!isLangShow);
  };

  // console.log(isOverlay);

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      console.log(selectRef.current.contains(event.target as Node));
      setIsLangShow(false);
    }
  };

  const handleProfile = () => {
    setIsOverlay(true);
  };

  return (
    <header className="w-full fixed top-0 z-10 h-20 gap-[60px] bg-white border-b border-primary-gray flex items-center">
      <div className="w-48 pl-7">
        <Link to={'/'} className="cursor-pointer">
          <Icon.Logo />
        </Link>
      </div>
      <div className="flex items-center gap-2 flex-1">
        <div className="w-[357px]">
          <Input text="test" type="text" placeholder="Muassasa, taom, tovar va oshxona" beforeIcon={Icon.Search} />
        </div>
        <Button text="Topish" variant="primary" />
        <div className="max-w-[280px] ml-4">
          <Dropdown label="Кашгар махалля, Юнусабадский район, Кашгар махалля" />
        </div>
      </div>
      <div className="flex h-[inherit]">
        <div
          onClick={(e) => handleLangShow(e)}
          className="flex relative items-center justify-center flex-col h-[inherit] border-l border-primary-gray  cursor-pointer"
        >
          <div className="w-28  flex items-center justify-center flex-row">
            <Icon.HeaderLang />
          </div>
          <p className="text-[#8e8e93]">O'zbekcha</p>
          <div
            ref={selectRef}
            className={`${
              !isLangShow ? 'hidden' : ''
            } absolute top-[calc(100%-5px)] left-0 bg-white rounded-[20px] shadow-headerSelect overflow-hidden`}
          >
            <div className="header-select">
              <div className="p-4 grid header-grid header-select-bottom hover:bg-primary-gray">
                <span className="grid-area-label">Русский</span>
                <span className="hidden grid-area-check-mark">
                  <Icon.CheckMark />
                </span>
              </div>
              <div className="p-4 grid header-grid header-select-bottom hover:bg-primary-gray">
                <span>English</span>
                <span className="hidden grid-area-check-mark">
                  <Icon.CheckMark />
                </span>
              </div>
              <div className="p-4 grid header-grid header-select-bottom hover:bg-primary-gray">
                <span>O’zbekcha</span>
                <span className="hidden grid-area-check-mark active">
                  <Icon.CheckMark />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={handleProfile}
          className="flex items-center justify-center flex-col text-[#8e8e93] h-[inherit] border-l border-primary-gray  cursor-pointer"
        >
          <div className="relative w-28  flex items-center justify-center flex-row">
            <Icon.HeaderUser />
          </div>
          <p>Profile</p>
        </div>
      </div>
    </header>
  );
};
