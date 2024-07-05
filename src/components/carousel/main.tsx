import { useState } from 'react';
import { Icon, Image } from '@/assets';

export const MainCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const ITEM_COUNT = 10;

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 3) % ITEM_COUNT);
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 3 + ITEM_COUNT) % ITEM_COUNT);
  };

  return (
    <div className="container">
      <div className="relative">
        <div className="flex overflow-scroll carousel-scroll-snap">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <div
                className={`carousel-scroll ${index === activeIndex ? 'active' : ''}`}
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
                    // @ts-ignore
                    src={Image[`carouselImg${index + 1}`]}
                    alt="img"
                  />
                </div>
              </div>
            ))}
        </div>
        <div
          className="absolute w-9 h-9 mx-auto z-[2] opacity-100 top-[36%] rounded-[50%] cursor-pointer pointer-events-auto bg-white left-[-18px] hover:text-secondary-gray o-16-ease-in-out"
          onClick={handlePrevClick}
        >
          <span className="h-[inherit] flex items-center justify-center">
            <Icon.PreviousIcon width={16} height={16} />
          </span>
        </div>
        <div
          className="absolute w-9 h-9 mx-auto z-[2] opacity-100 top-[36%] rounded-[50%] cursor-pointer pointer-events-auto bg-white right-[-18px] hover:text-secondary-gray o-16-ease-in-out"
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
