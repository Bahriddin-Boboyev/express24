import { Icon } from '@/assets';
import { Button, Dropdown, Input } from '@/components';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="w-full fixed top-0 z-10 h-20 gap-[60px] bg-white border-b border-primary-gray flex items-center">
      <div className="w-48 pl-7">
        <Link to={'/'} className="cursor-pointer">
          <Icon.Logo />
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-[357px]">
          <Input text="test" type="text" placeholder="Muassasa, taom, tovar va oshxona" beforeIcon={Icon.Search} />
        </div>
        <Button text="Topish" variant="primary" />
      </div>
      <div className="max-w-[280px]">
        <Dropdown label="Кашгар махалля, Юнусабадский район, Кашгар махалля" />
      </div>
    </div>
  );
};
