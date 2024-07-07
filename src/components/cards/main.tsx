import { Icon } from '@/assets';
import { mainCard } from '@/types';
import { Link } from 'react-router-dom';

type Props = {
  items: mainCard[];
};

export const MainCard = ({ ...props }: Props) => {
  return (
    <div className="card">
      <ul className="flex flex-wrap gap-9">
        {props.items.map((item) => (
          <li
            key={Math.floor(Math.random() * 10000 + item.id)}
            className="main-card-item overflow-hidden relative"
            style={{ '--vertical-gap': '36px', '--card-radius': '16px', '--information-block-padding': '12px' }}
          >
            <Link to="#">
              <div className="">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="content p-[--information-block-padding]">
                <div className="flex">
                  <h4 className="flex-1 font-semibold text-xl webkit-box">{item.name}</h4>
                  <div className="favorite relative h-[inherit] flex pl-[--information-block-padding]">
                    <button className="absolute right-0 top-[-50%] transform-y--50 p-[10px] rounded-[50%] bg-white hover:bg-primary-gray text-sm main-card-favorite-shadow">
                      <Icon.FavoriteIcon width={20} height={20} />
                    </button>
                  </div>
                </div>
                <p className="text-[15px] text-[#7b7b7b] whitespace-nowrap text-ellipsis overflow-hidden mt-1">
                  {item.category}
                </p>
                <button className="mt-3 flex flex-wrap -mx-[3px] bg-primary-gray text-[#1a1a18] text-xs items-center cursor-pointer w-fit rounded-[24px] gap-1 px-[10px] py-[5px] ">
                  <Icon.StartIcon width={14} height={14} />
                  <span className="block">{item.rating}</span>
                </button>
              </div>
            </Link>

            <Link
              to="#"
              className="absolute top-[8px] right-[8px] w-[40px] h-[40px] rounded-[10px] overflow-hidden main-card-brand-shadow cursor-pointer"
            >
              <img src={item.brandImg} alt={item.category} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
