import { NextSeo, NextSeoProps } from 'next-seo';
interface SeoProps extends NextSeoProps {
  url?: string;
  images?: any[] | null;
}
/**
 * This is a TypeScript React component that renders SEO metadata for a webpage using the NextSeo
 * library.
 * @param {SeoProps}  - The `Seo` component takes in several props:
 * @returns The `Seo` component is being returned, which takes in `title`, `description`, `images`, and
 * `url` as props and renders the `NextSeo` component with these props. The `NextSeo` component is used
 * for managing the SEO metadata of a Next.js application. The `openGraph` property is used to set the
 * Open Graph metadata for social media sharing.
 */
const Seo = ({ title, description, images, url, ...props }: SeoProps) => {
  return (
    <NextSeo
      title={title}
      openGraph={{
        ...(Boolean(url) && {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/${url}`,
        }),
        title,
        description,
        ...(Boolean(images) && {
          images: images?.map((item) => ({
            url: item?.image?.original,
            alt: item?.title,
          })),
        }),
      }}
      {...props}
    />
  );
};

export default Seo;
