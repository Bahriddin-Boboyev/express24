import { Image } from '@/assets';

export const carouselData1 = Object.keys(Image).reduce((acc, item) => {
  if (item.startsWith('carouselImg')) {
    // @ts-ignore
    acc.push(Image[item]);
  }
  return acc;
}, []);

export const carouselData2 = [
  {
    id: 1,
    name: 'Full Cart',
    category: 'Продукты',
    image: Image.carouselShopImg1,
  },
  {
    id: 2,
    name: 'The Loaf',
    category: 'Продукты',
    image: Image.carouselShopImg2,
  },
  {
    id: 3,
    name: "Bob's Market",
    category: 'Продукты',
    image: Image.carouselShopImg3,
  },
  {
    id: 4,
    name: 'Клубника в шоколаде',
    category: 'Продукты',
    image: Image.carouselShopImg4,
  },
  {
    id: 5,
    name: 'Yves Rocher',
    category: 'Красота',
    image: Image.carouselShopImg5,
  },
  {
    id: 6,
    name: 'Essens - Парфюмерия',
    category: 'Красота',
    image: Image.carouselShopImg6,
  },
  {
    id: 7,
    name: 'Хоттабыч',
    category: 'Продукты',
    image: Image.carouselShopImg7,
  },
  {
    id: 8,
    name: 'Letique',
    category: 'Красота',
    image: Image.carouselShopImg8,
  },
];
