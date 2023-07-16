import { NextSeo } from 'next-seo';
import React from 'react';

const SEO = () => (
  <NextSeo
    title="Azubuine"
    titleTemplate="Uchechukwu Azubuine"
    defaultTitle="Uchechukwu Azubuine - Developer"
    description="Software Engineer, and UI enthusiast with a 
    passion for creating aesthetically pleasing user interfaces, 
    with the goal of bridging the gap between design and implementation. With experience in languages such as Typescript, and JavaScript, I am always
    eager to learn and explore new technologies. I am also available for collaboration on projects that align with my
    skills and interests."
    canonical=""
    openGraph={{
      type: 'website',
      site_name: 'Azubuine',
      url: 'https://azubuine.netlify.app/',
      title: 'Azubuine - Developer',
      description:
        'Software Engineer, and UI enthusiast with a passion for creating aesthetically pleasing user interfaces, with the goal of bridging the gap between design and implementation',
      images: [
        {
          url: '/images/og/og-1200.webp',
          width: 1200,
          height: 630,
          alt: 'Open graph image 1200',
        },
        {
          url: '/images/og/og-500.webp',
          width: 500,
          height: 500,
          alt: 'Open graph image 500',
        },
      ],
    }}
    twitter={{
      cardType: 'summary_large_image',
      site: '@AzubuineU',
      handle: '@AzubuineU',
    }}
    additionalLinkTags={[
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
    ]}
    additionalMetaTags={[
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' },
    ]}
  />
);

export default SEO;
