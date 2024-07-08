import { Icon } from '@/assets';
import { Button, Dropdown, Input, Portal } from '@/components';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { appStore } from '@/store';

export const Navbar = () => {
  const [isLangShow, setIsLangShow] = useState(false);
  const { setIsOverlay } = appStore();
  const selectRef = useRef<HTMLDivElement>(null);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  useEffect(() => {
    document.addEventListener('click', (e) => handleClickOutside(e));
    return () => {
      document.removeEventListener('click', (e) => handleClickOutside(e));
    };
  }, [isLangShow]);

  const handleLangShow = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    console.log('work');
    setIsLangShow(!isLangShow);
  };

  const handleChange = (val: string) => {
    console.log(val);

    if (val.length) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (isLangShow && selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsLangShow(false);
    }
  };

  const handleProfile = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsOverlay(true);
  };

  const handleClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setIsOverlay(false);
  };

  return (
    <header
      id="header"
      className="w-full fixed top-0 z-[3] h-20 gap-[60px] bg-white border-b border-primary-gray flex items-center"
    >
      <div className="w-48 pl-7">
        <Link to={'/'} className="cursor-pointer">
          <Icon.Logo />
        </Link>
      </div>
      <div className="flex items-center gap-2 flex-1">
        <div className="w-[357px]">
          <Input
            text="test"
            type="text"
            placeholder="Muassasa, taom, tovar va oshxona"
            beforeIcon={Icon.Search}
            isPhoneInput={false}
            handleChange={() => {}}
          />
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

          <Portal>
            <div className="absolute right-0 p-16-16-0 z-[2]">
              <button
                onClick={handleClose}
                className="shadow-modalBtn p-2 rounded-[50%] bg-white text-[14px] border-none text-[#131314] cursor-pointer overflow-hidden w-[fit-content] tracking-tighter ease-in-out-016"
              >
                <Icon.ModalClose />
              </button>
            </div>
            <div className="p-6">
              <form>
                <div className="mb-10">
                  <h3 className="font-semibold text-2xl">Telefon raqamingizni kiriting</h3>
                  <p className="text-sm text-secondary-gray mt-1">va tasdiq kodini oling</p>
                </div>
                <Input
                  text=""
                  type="text"
                  style="p-22-40-6-12"
                  label="Telifon raqami"
                  placeholder=" "
                  handleChange={handleChange}
                  isPhoneInput={true}
                />
                <div className="text-xs text-secondary-gray flex flex-col text-center m-48-0-16">
                  Kodni olish tugmasini bosish orqali siz shartlarga rozilik bildirasiz{' '}
                  <a className="text-primary-link" href="#">
                    foydalanuvchi shartnomasi
                  </a>
                </div>
                <Button
                  text="Kod olish"
                  variant="primary"
                  style="w-full disabled:bg-primary-disabled disabled:text-primary-disabled-text"
                  disabled={isBtnDisabled}
                />
              </form>
            </div>
          </Portal>
        </div>
      </div>
    </header>
  );
};
