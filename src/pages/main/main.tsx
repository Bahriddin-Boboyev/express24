import { Icon } from '@/assets';
import { MainCarousel } from '@/components/carousel';
import { carouselData1, carouselData2, categories } from '@/mock';
import { Link } from 'react-router-dom';

export const Main = () => {
  return (
    <main className="container mx-auto">
      <div className="flex flex-wrap gap-y-14">
        <section className="header-carousel">
          <MainCarousel items={carouselData1} isBottom={false} />
        </section>

        <section className="prod-shop-carousel">
          <div className="flex flex-wrap items-center justify-between mb-6">
            <h3 className="text-[34px] font-extrabold text-[#1a1a18]">Do‘konlar</h3>
            <div className="flex items-center text-secondary-gray">
              <Link to="#">Hammasini ko‘rsatish</Link>
              <Icon.NextIcon width={16} height={16} color="black" />
            </div>
          </div>
          <MainCarousel items={carouselData2} isBottom={true} />
        </section>

        <section className="restaurants w-full">
          <h3 className="text-[34px] font-extrabold text-[#1a1a18]">Restoranlar</h3>
          <div className="categories flex items-center justify-between mt-2 w-full">
            <ul className="flex">
              {categories.slice(0, 7).map((item, index) => (
                <li
                  key={index}
                  className="text-base mx-1 bg-primary-gray px-4 py-[14px] cursor-pointer hover:bg-[#ececf1] rounded-xl ease-in-bg16"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="text-base mx-1 bg-primary-gray px-4 py-[14px] cursor-pointer hover:bg-[#ececf1] rounded-xl ease-in-bg16">
              {categories.slice(8, -1)[0]}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
