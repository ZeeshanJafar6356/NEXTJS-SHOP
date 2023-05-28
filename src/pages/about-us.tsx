import { useTranslation } from 'next-i18next';
import { Image } from '@/components/ui/image';
import deliverImage from '@/assets/aboutus.jpg';
import storyImage from '@/assets/aboutus2.jpg';
import personalTouchImage from '@/assets/aboutus3.jpg';
import problemImage from '@/assets/aboutus4.jpg';
import solutionImage from '@/assets/aboutus5.jpg';
import userImage from '@/assets/user.jpg';
import { getLayout } from '@/components/layouts/layout';
import Seo from '@/components/seo/seo';
import { useEffect, useState } from 'react';
export { getStaticProps } from '@/framework/general.ssr';

// interface DataItem {
//   id: number;
//   address: string;
//   business: string;
// }
// interface DataResponse {
//   data: DataItem[];
// }
export const AboutPage = () => {
  const { t } = useTranslation('common');
  // const [data, setData] = useState<DataResponse | null>(null);
  // const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch('https://api.eventmassi.com/api/v2/explore')
  //     .then((res) => res.json())
  //     .then((data: DataResponse) => {
  //       setData(data);
  //       setLoading(false);
  //     });
  // }, []);

  // if (isLoading) return <p>Loading...</p>;
  // if (!data) return <p>No profile data</p>;
  return (
    <>
      <Seo title={'Contact'} url={'contact'} />

      {/* <div className="mx-auto grid w-full  max-w-2xl grid-cols-2 gap-4">
          {data.data.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="flex flex-col items-center pb-10">
                <Image
                  className="mb-3 h-24 w-24 rounded-full shadow-lg"
                  src={userImage}
                  alt="User image"
                />

                <a key="item" href="#">
                  <h5 className="mb-1 mt-3 text-xl font-bold text-gray-900  dark:text-white">
                    {item.business}
                  </h5>
                </a>

                <div className="mt-4 flex space-x-3 md:mt-6">
                  <a
                    href="#"
                    className="mx-auto inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Inquire Vendor
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div> */}

      <div className="w-full bg-white p-5">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col items-center py-10 px-5 md:flex-row xl:py-14 xl:px-8 2xl:px-14">
            <div className="md:w-1/2">
              <h1 className="mb-4 text-4xl font-bold text-orange-500 underline">
                WHAT WE DO?
              </h1>
              <p className="text-lg text-gray-700">
                DeliverCart is an on-demand grocery delivery service. You can
                choose from over 20,000 grocery and household items from
                multiple stores and get them delivered to your door in as little
                as 60 minutes.
              </p>
              <br></br>
              <p className="text-lg text-gray-700">
                DeliverCart is on a mission to transform the way you order
                groceries. We have a team of experienced personal shoppers that
                fulfill your order by shopping from national favorites and local
                specialty stores, bringing you the groceries you love right to
                your door.
              </p>
            </div>

            <div className="mt-8 md:mt-0 md:w-1/2">
              <div className="flex justify-center">
                <div className="image-container">
                  <Image
                    src={deliverImage}
                    alt={t('nav-menu-contact')}
                    className="h-auto max-h-96 w-full md:max-h-full md:w-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center py-10 px-5 md:flex-row-reverse xl:py-14 xl:px-8 2xl:px-14">
            <div className="md:w-1/2">
              <h1 className="mb-4 px-5 text-4xl font-bold text-orange-500 underline">
                The DeliverCart Story
              </h1>
              <p className="px-5 text-justify text-lg text-gray-700">
                We set up DeliverCart because we recognized there was a big gap
                in the market - consumers could not buy grocery & household
                items directly from a wholesaler.
              </p>
              <p className="px-5 text-justify text-lg text-gray-700">
                There are many difficulties wholesalers face when directly
                offering products to the end consumer online. For wholesalers,
                digitising and maintaining their extensive product range, which
                is in the tens of thousands, is very expensive. It takes
                thousands of man hours and getting it right is not easy.
              </p>
              <p className="px-5 text-justify text-lg text-gray-700">
                After lots of brainstorming (and caffeine consumption!) we
                solved this problem by making the entire product range of a
                national wholesaler available directly to the consumer on our
                bespoke, cutting-edge platform. For the first time ever,
                consumers could browse and bulk buy thousands of products from a
                wholesaler at amazingly low prices on an easy-to-use online
                platform. That was half the job done.
              </p>
            </div>

            <div className="mt-8 md:mt-0 md:w-1/2">
              <div className="flex justify-center">
                <div className="image-container">
                  <Image
                    src={storyImage}
                    alt={t('nav-menu-contact')}
                    className="h-auto max-h-96 w-full md:max-h-full md:w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center py-10 px-5 md:flex-row xl:py-14 xl:px-8 2xl:px-14">
            <div className="md:w-1/2">
              <h1 className="mb-4 text-4xl font-bold text-orange-500 underline">
                A Personal Touch
              </h1>
              <p className="text-justify text-lg text-gray-700">
                DeliverCart is an on-demand grocery delivery service. You can
                choose from over 20,000 grocery and household items from
                multiple stores and get them delivered to your door in as little
                as 60 minutes.
              </p>
              <br></br>
              <p className="text-justify text-lg text-gray-700">
                The next part of the puzzle was, how do we ensure customers
                receive delivery of their items in as little as 60 minutes, and
                don`t feel let down when the items they ordered aren`t available
                in-store?
              </p>
              <p className="text-justify text-lg text-gray-700">
                This inspired us to recruit & train a team of personal shoppers
                to handpick customer`s items & deliver them right to their door.
                Our personal shoppers’ priority is to maintain a personal touch
                with customers and keep them informed all the way. If an item
                isn`t available, they will contact the customer to recommend
                alternative items and amend the order, giving the customer
                control of the shopping process and complete piece of mind.
              </p>
            </div>

            <div className="mt-8 md:mt-0 md:w-1/2">
              <div className="flex justify-center">
                <div className="image-container px-5">
                  <Image
                    src={personalTouchImage}
                    alt={t('nav-menu-contact')}
                    className="h-auto max-h-96 w-full md:max-h-full md:w-auto "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center py-10 px-5 md:flex-row-reverse xl:py-14 xl:px-8 2xl:px-14">
            <div className="md:w-1/2">
              <h1 className="mb-4 px-5 text-4xl font-bold text-orange-500 underline">
                More Problems
              </h1>
              <p className="px-5 text-justify text-lg text-gray-700">
                As we rolled up our sleeves and developed our online services,
                we discovered that there were other problems consumers faced
                that we could help solve.
              </p>
              <ul className="list-disc px-5 text-justify text-lg text-gray-700">
                <li>
                  They couldn`t get orders delivered late at night when shops
                  were closed.
                </li>
                <li>
                  {' '}
                  There weren`t any stores that delivered world foods like
                  exotic fruits, spices and speciality flour & rice.
                </li>
                <li>
                  Discount supermarkets like Aldi & Lidl were growing in
                  popularity, yet they didn`t offer their full range of products
                  for online delivery like Asda and Tesco.
                </li>
                <li>
                  Most big supermarkets didn`t offer a sameday delivery service
                  and had limited next day delivery slots.
                </li>
              </ul>
            </div>

            <div className="mt-8 px-3 md:mt-0 md:w-1/2">
              <div className="flex justify-center">
                <div className="image-container">
                  <Image
                    src={problemImage}
                    alt={t('nav-menu-contact')}
                    className="h-auto max-h-96 w-full md:max-h-full md:w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center py-10 px-5 md:flex-row xl:py-14 xl:px-8 2xl:px-14">
            <div className="md:w-1/2">
              <h1 className="mb-4 text-4xl font-bold text-orange-500 underline">
                The Solution
              </h1>
              <p className="text-justify text-lg text-gray-700">
                This motivated us to add more stores to our platform, offering a
                complete and comprehensive shopping experience for consumers.
                Now, for the first time ever, customers can choose from over
                20,000 products, across multiple stores from the comfort of
                their own home. Our personal shoppers handpick and deliver our
                customers’ items, in one delivery in as little as 60 minutes.
                Problems solved.
              </p>
            </div>

            <div className="mt-8 md:mt-0 md:w-1/2">
              <div className="flex justify-center">
                <div className="image-container px-5">
                  <Image
                    src={solutionImage}
                    alt={t('nav-menu-contact')}
                    className="h-auto max-h-96 w-full md:max-h-full md:w-auto "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
AboutPage.getLayout = getLayout;
export default AboutPage;
