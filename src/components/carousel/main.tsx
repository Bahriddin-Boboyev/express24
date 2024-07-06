import { useState } from 'react';
import { Icon } from '@/assets';

type Props = {
  items: any[];
  isBottom: boolean;
};

export const MainCarousel = ({ ...props }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const ITEM_COUNT = props.items.length;

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 3) % ITEM_COUNT);
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 3 + ITEM_COUNT) % ITEM_COUNT);
  };

  return (
    <div className="container">
      <div className="relative block">
        <div
          className="flex overflow-scroll carousel-scroll-snap"
          style={{
            '--slide-width': `${(1144 / ((props?.items?.length / 2 + 1) * 14) + 3).toFixed(2)}%`,
            '--slide-space': '14px',
          }}
        >
          {props.items.map((item, index) => {
            if (props.isBottom) {
              return (
                <div
                  key={item.id}
                  className={`carousel-scroll pb-1 ${index === activeIndex ? 'active' : ''}`}
                  ref={(ref) => {
                    if (ref && index === activeIndex) {
                      ref.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
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
                </div>
              );
            }

            return (
              <div
                key={index + 1}
                className={`carousel-scroll pb-1 ${index === activeIndex ? 'active' : ''}`}
                ref={(ref) => {
                  if (ref && index === activeIndex) {
                    ref.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
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
              </div>
            );
          })}
        </div>
        <div
          className="absolute w-9 h-9 mx-auto z-[2] opacity-100 top-[50%] transformY-50 rounded-[50%] cursor-pointer pointer-events-auto bg-white left-[-18px] hover:text-secondary-gray o-16-ease-in-out"
          onClick={handlePrevClick}
        >
          <span className="h-[inherit] flex items-center justify-center">
            <Icon.PreviousIcon width={16} height={16} />
          </span>
        </div>
        <div
          className="absolute w-9 h-9 mx-auto z-[2] opacity-100 top-[50%] transformY-50 rounded-[50%] cursor-pointer pointer-events-auto bg-white right-[-18px] hover:text-secondary-gray o-16-ease-in-out"
          onClick={handleNextClick}
        >
          <span className="h-[inherit] flex items-center justify-center">
            <Icon.NextIcon width={16} height={16} />
          </span>
        </div>
      </div>
    </div>
  );
};
