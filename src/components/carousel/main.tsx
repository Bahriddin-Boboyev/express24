import { useState } from 'react';
import { Icon } from '@/assets';

type Props = {
  items: any[];
  type: 'normal' | 'bottom' | 'drink-card';
  isExistBtn: boolean;
};

export const MainCarousel = ({ ...props }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClickBnt, setIsClickBnt] = useState(false);

  const ITEM_COUNT = props.items.length;

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 3) % ITEM_COUNT);
    setIsClickBnt(true);
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 3 + ITEM_COUNT) % ITEM_COUNT);
    setIsClickBnt(true);
  };

  return (
    <div className="container">
      <div className="relative block">
        <ul
          className="flex overflow-x-scroll carousel-scroll-snap"
          style={{
            '--slide-width': `${(1144 / ((props?.items?.length / 2 + 1) * 14) + 3).toFixed(2)}%`,
            '--slide-space': '14px',
          }}
        >
          {props.items.map((item, index) => {
            if (props.type == 'bottom') {
              return (
                <li
                  key={item.id}
                  className={`carousel-scroll pb-1 ${index === activeIndex ? 'active' : ''}`}
                  ref={(ref) => {
                    if (isClickBnt && ref && index === activeIndex) {
                      ref.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                      setIsClickBnt(false);
                    }
                  }}
                >
                  <div className="carousel-scroll-item">
                    <img
                      className="max-w-full max-h-full w-full h-full object-cover"
                      key={index + 1}
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="px-1">
                      <p>{item.name}</p>
                      <p className="text-secondary-gray text-xs">{item.category}</p>
                    </div>
                  </div>
                </li>
              );
            } else if (props.type == 'drink-card') {
              return (
                <li
                  key={item.id}
                  className={`carousel-scroll p-[6px] rounded-[16px] bg-[#f3f3f8] pb-1 mb-[6px] cursor-pointer`}
                >
                  <div>
                    <img
                      className="max-w-full max-h-full w-full h-full object-cover aspect-[200/200] rounded-[12px]"
                      key={index + 1}
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="flex flex-col justify-between h-[68px]" style={{ margin: '8px 4px 4px' }}>
                      <p>{item.name}</p>
                    </div>
                    <div className="p-1">
                      <button className="carousel-drink-card-btn-shadow w-full bg-white py-3 px-[14px] text-[14px] rounded-[12px] cursor-pointer hover:bg-primary-gray">
                        {item.price} сум
                      </button>
                    </div>
                  </div>
                </li>
              );
            }

            return (
              <li
                key={index + 1}
                className={`carousel-scroll pb-1 ${index === activeIndex ? 'active' : ''}`}
                ref={(ref) => {
                  if (isClickBnt && ref && index === activeIndex) {
                    ref.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                    setIsClickBnt(false);
                  }
                }}
              >
                <div className="carousel-scroll-item">
                  <img
                    className="max-w-full max-h-full w-full h-full object-cover"
                    key={index + 1}
                    src={item}
                    alt="img"
                  />
                </div>
              </li>
            );
          })}
        </ul>
        {props.isExistBtn && (
          <>
            <div
              className="absolute w-9 h-9 mx-auto z-[2] opacity-100 top-[50%] transformY-50 rounded-[50%] cursor-pointer pointer-events-auto bg-white left-[-18px] hover:text-secondary-gray o-16-ease-in-out prev-next-btn-shadow"
              onClick={handlePrevClick}
            >
              <span className="h-[inherit] flex items-center justify-center">
                <Icon.PreviousIcon width={16} height={16} />
              </span>
            </div>
            <div
              className="absolute w-9 h-9 mx-auto z-[2] opacity-100 top-[50%] transformY-50 rounded-[50%] cursor-pointer pointer-events-auto bg-white right-[-18px] hover:text-secondary-gray o-16-ease-in-out prev-next-btn-shadow"
              onClick={handleNextClick}
            >
              <span className="h-[inherit] flex items-center justify-center">
                <Icon.NextIcon width={16} height={16} />
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
