import { ArrowNext, ArrowPrev } from '@/components/icons';
import { Swiper, SwiperSlide, Navigation } from '@/components/ui/slider';
import { Image } from '@/components/ui/image';
import Logo from './1.png';
import Logo2 from './2.png';
import Logo3 from './3.png';
import Card from '../ui/cards/card';
import { useTranslation } from 'next-i18next';

const offerSliderBreakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  580: {
    slidesPerView: 2,
    spaceBetween: 16,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 16,
  },
  1920: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

export default function PromotionSlider({ sliders }: { sliders: any[] }) {
  const { t } = useTranslation();
  return (
    <div className="border-t border-border-200 bg-light px-6 py-5 md:p-8">
      <div className="relative">
        <Swiper
          id="offer"
          //TODO: need discussion
          // loop={true}
          breakpoints={offerSliderBreakpoints}
          modules={[Navigation]}
          navigation={{
            nextEl: '.next',
            prevEl: '.prev',
          }}
        >
          {/* {sliders?.map((d) => ( */}
          <SwiperSlide>
            <Card className="border-2">
              <Image src={Logo} alt="logo" className="h-auto w-full" />
              <div className=" text-center">
                <h1 className="font-bold">
                  {' '}
                  SHOP FROM MULTIPLE STORES, ON ONE PLATFORM{' '}
                </h1>
                <p>
                  Browse thousands of household products and groceries from
                  multiple stores
                </p>
              </div>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="border-2">
              <Image src={Logo2} alt="logo" className="h-auto w-full" />
              <div className=" text-center">
                <h1 className=" font-bold">
                  {' '}
                  GET SAMEDAY DELIVERY IN 60 MINUTES
                </h1>
                <p>
                  Our personal shoppers will handpick your items and keep you
                  informed all the way
                </p>
              </div>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="border-2">
              <Image src={Logo3} alt="logo" className="h-auto w-full" />
              <div className=" text-center">
                <h1 className="font-bold">SAVE TIME & MONEY</h1>
                <p>
                  Find amazing offers on household brands delivered to your
                  door, leaving you to enjoy your day
                </p>
              </div>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            {/* <Card className="border-2">
              <Image src={Logo} alt="logo"></Image>
            </Card>
            <Card className="border-2">
              <Image src={Logo2} alt="logo"></Image>
            </Card> */}
            {/* <Image
                className="h-auto w-full"
                src={d.original}
                alt={d.id}
                layout="responsive"
                width="580"
                height="270"
              /> */}
          </SwiperSlide>
          {/* ))} */}
        </Swiper>
        <div
          className="prev absolute top-2/4 z-10 -mt-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border-200 border-opacity-70 bg-light text-heading shadow-xl transition-all duration-200 hover:border-accent hover:bg-accent hover:text-light ltr:-left-4 rtl:-right-4 md:-mt-5 md:h-9 md:w-9 ltr:md:-left-5 rtl:md:-right-5"
          role="button"
        >
          <span className="sr-only">{t('common:text-previous')}</span>
          <ArrowPrev width={18} height={18} />
        </div>
        <div
          className="next absolute top-2/4 z-10 -mt-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border-200 border-opacity-70 bg-light text-heading shadow-xl transition-all duration-200 hover:border-accent hover:bg-accent hover:text-light ltr:-right-4 rtl:-left-4 md:-mt-5 md:h-9 md:w-9 ltr:md:-right-5"
          role="button"
        >
          <span className="sr-only">{t('common:text-next')}</span>
          <ArrowNext width={18} height={18} />
        </div>
      </div>
    </div>
  );
}
