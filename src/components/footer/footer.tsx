import { Icon } from '@/assets';

export const Footer = () => {
  return (
    <footer className="footer py-10 bg-primary-gray">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-x-0 gap-y-12 mr-0">
          <ul className="flex text-sm text-secondary-gray flex-wrap gap-x-8 gap-y-0 -mr-8 w-full">
            <li>
              <a href="#up">Biz haqimizda</a>
            </li>
            <li>
              <a href="#up">Aloqa uchun</a>
            </li>
            <li>
              <a href="#up">Foydalanuvchi shartnomasi</a>
            </li>
          </ul>
          <ul className="flex items-center justify-between w-full text-base text-secondary-gray">
            <li>Qo‘llab-quvvatlash xizmati: +998 71 200 40 01</li>
            <li>
              <ul className="flex items-center gap-x-[10px]">
                <li>
                  <a href="#up">
                    <Icon.Instagram width={18} height={18} />
                  </a>
                </li>
                <li>
                  <a href="#up">
                    <Icon.Facebook width={18} height={18} />
                  </a>
                </li>
                <li>
                  <a href="#up">
                    <Icon.Telegram width={18} height={18} />
                  </a>
                </li>
                <li>
                  <span className="text-[20px]">Ⓒ </span>
                  <span className="text-sm">2024 Express24</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
