import { Icon } from '@/assets';
import { Button, MainCard, Select } from '@/components';
import { MainCarousel } from '@/components/carousel';
import { carouselData1, carouselData2, categories, cardProduct1, cardProduct2 } from '@/mock';
import { appStore } from '@/store';
import { Link } from 'react-router-dom';

export const Main = () => {
  const { isMore, setIsMore } = appStore();

  const toggleContent = () => {
    setIsMore(!isMore);
  };

  return (
    <main className="container mx-auto">
      <div className="flex flex-wrap gap-y-14">
        <section className="header-carousel" id="up">
          <MainCarousel items={carouselData1} type="normal" isExistBtn={true} />
        </section>

        <section className="prod-shop-carousel">
          <div className="flex flex-wrap items-center justify-between mb-6">
            <h3 className="text-[34px] font-extrabold text-[#1a1a18]">Do‘konlar</h3>
            <div className="flex items-center text-secondary-gray">
              <Link to="#">Hammasini ko‘rsatish</Link>
              <Icon.NextIcon width={16} height={16} color="black" />
            </div>
          </div>
          <MainCarousel items={carouselData2} type="bottom" isExistBtn={true} />
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

            <Select
              btnText="Еще"
              dropdownItems={categories.slice(1, -1)}
              afterIcon={<Icon.DropdownChevron width={16} height={16} />}
              btnStyle="flex items-center gap-3 text-base mx-1 bg-primary-gray px-4 py-[14px] cursor-pointer hover:bg-[#ececf1] rounded-xl ease-in-bg16"
            />
          </div>

          <section className="mt-5">
            <MainCard items={[...cardProduct1, ...cardProduct1]} />
          </section>
        </section>

        <section className={`drinks w-full`}>
          <h4 className="text-[22px] font-bold text-[#1a1a18] mb-3">Освежающие напитки</h4>
          <MainCarousel type="drink-card" items={cardProduct2} isExistBtn={false} />
        </section>

        <section className={`mt-5 ${isMore ? '' : 'expand'}`}>
          <MainCard items={[...cardProduct1, ...cardProduct1]} />
        </section>

        <Button
          text={isMore ? 'Kamroq ko‘rsatish' : 'Yana ko‘proq ko‘rsatish'}
          variant="primary"
          style="w-full bg-[#ececee] hover:bg-[#e0e0e4]"
          clickHandle={toggleContent}
        />
      </div>
    </main>
  );
};
