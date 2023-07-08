import { HiOutlineExternalLink } from 'react-icons/hi';
import { IoMail, IoLogoWhatsapp } from 'react-icons/io5';
import {
  SiJavascript,
  SiTypescript,
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiNodedotjs,
  SiFirebase,
  SiMongodb,
  SiRedux,
  SiChakraui,
  SiReact,
  SiZoho,
  SiSass,
  SiStripe,
} from 'react-icons/si';

import { IData } from '@/interfaces';

export const data: IData = {
  projects: [
    {
      tools: [
        { tool: SiJavascript, color: '#F38E82' },
        { tool: SiSass, color: '#F9F5F3' },
      ],
      title: 'Forkify',
      colorScheme: ['#F38E82', '#F9F5F3', '#582724'],
      description: 'Food recipe hub for international dishes ',
      logo: '/images/assets/forkify.webp',
      links: [{ label: 'live', link: 'https://ucforkify.netlify.app/', icon: HiOutlineExternalLink }],
    },

    {
      tools: [
        { tool: SiReact, color: 'gray.500' },
        { tool: SiRedux, color: 'white' },
        { tool: SiStripe, color: 'gray.300' },
      ],
      title: 'Crown Clothing',
      colorScheme: ['gray.700', 'white'],
      description: 'An e-commerce mockup store with real life functionalities',
      logo: '/images/assets/crown.webp',
      bgGradient: 'linear(to-b,  #cf59e6, #6bc5f8,)',
      links: [{ label: 'live', link: '/', icon: HiOutlineExternalLink }],
    },
  ],

  stack: [
    { icon: SiJavascript, color: '#E3D04C', label: 'Javascript' },
    // { icon: SiPython, color: '#356FA1', label: 'Python' },
    // { icon: SiRuby, color: '#cc342d', label: 'Ruby' },
    { icon: SiTypescript, color: '#2e72bb', label: 'Typescript' },
    // { icon: SiNodedotjs, color: '#61995e', label: 'Node Js' },
    // { icon: SiRubyonrails, color: '#D30002', label: 'Ruby on Rails' },
    { icon: SiReact, color: '#01d1f2', label: 'React' },
    // { icon: SiNestjs, color: '#de2641', label: 'Nest Js' },
    // { icon: SiNextdotjs, color: 'gray.50', label: 'Next Js' },
    { icon: SiFirebase, color: '#FFCA28', label: 'Firebase' },
    // { icon: SiMongodb, color: '#569035', label: 'Mongo Db' },
    // { icon: SiPostgresql, color: '#306289', label: 'Postgres' },
  ],

  aboutEmojis: ['💡', '💻', '🎨', '📚', '🤓', '🔍'],

  education: [
    {
      qualification: `Remote Frontend Web Development Program (ReactJS)`,
      university: 'Zero To Mastery Academy',
      date: 'January 2023 - April 2023',
      description: `Spent 400+ hours mastering algorithms, data structures, and frontend development while simultaneously developing projects with JavaScript, React, and Redux. `,
    },
    {
      qualification: `Bachelor of Engineering - BE, Mechanical Engineering`,
      university: 'Federal University of Technology Owerri',
      date: 'November 2016 - December 2022',
      grade: 'Second Class Upper Honours',
      description: `The skills and knowledge I gained through my studies in mechanical engineering have equipped me with a strong foundation for problem-solving, attention to detail, mathematical understanding, systems thinking, collaboration, adaptability, and continuous learning, all these which I have now tailored towards my frontend development career.`,
    },
  ],

  experience: [
    {
      role: `Frontend Developer - Intern (Remote)`,
      company: 'HNG Zuri Internship',
      date: 'October 2022 - December 2022',
      description: [
        `Completed day to day frontend tasks and implemented sophisticated user interfaces with reusable react components, I also joined a team to build a certificate generator.
        
      `,
      ],
    },
  ],
  links: {
    contacts: [
      {
        label: 'Send an Email',
        name: 'email',
        href: 'mailto:uchechukwuazubuine@gmail.com',
        icon: IoMail,
        color: 'cyan',
      },

      {
        label: 'Send a Whatsapp message',
        name: 'whatsapp',
        href: 'https://wa.me/2348113665923',
        icon: IoLogoWhatsapp,
        color: 'green',
      },
    ],
    socials: [
      {
        label: 'Visit my github',
        icon: SiGithub,
        href: 'https://github.com/Uchmahn',
        name: 'Github',
        color: 'gray',
      },
      {
        label: 'Visit my linkedin',
        icon: SiLinkedin,
        href: 'https://linkedin.com/in/uchechukwu-azubuine/',
        name: 'Linkedin',
        color: 'linkedin',
      },
      // {
      //   label: 'Visit my instagram',
      //   icon: SiInstagram,
      //   href: 'https://www.instagram.com/______/',
      //   name: 'Instagram',
      //   color: 'pink',
      // },
    ],
  },
};
