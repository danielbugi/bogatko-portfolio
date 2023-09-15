import standOut from './public/svgs/undraw_stand_out.svg';
import technology from './public/svgs/undraw_technology.svg';
import programming from './public/svgs/undraw_programming.svg';

import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

import project01 from './public/projects/project01-min.png';
import project02 from './public/projects/project02-min.png';
import project04 from './public/projects/project04-min.png';

import pr1 from './public/projects-full/Screenshot_1-min.png';
import pr2 from './public/projects-full/Screenshot_2-min.png';
import pr3 from './public/projects-full/Screenshot_3-min.png';
import pr4 from './public/projects-full/Screenshot_4-min.png';
import pr5 from './public/projects-full/Screenshot_5-min.png';

import html from './public/tech-png/html.png';
import css from './public/tech-png/css.png';
import javascript from './public/tech-png/javascript.png';
import react from './public/tech-png/react.png';
import node from './public/tech-png/node.png';
import python from './public/tech-png/python.png';

export const techList = [
  {
    text: 'HTML5',
    img: html,
    id: 1,
  },
  {
    text: 'CSS3',
    img: css,
    id: 2,
  },
  {
    text: 'Javascript',
    img: javascript,
    id: 3,
  },
  {
    text: 'Node',
    img: node,
    id: 4,
  },
  {
    text: 'React',
    img: react,
    id: 5,
  },
  {
    text: 'Python',
    img: python,
    id: 6,
  },
];

export const social = [
  {
    url: 'https://www.instagram.com/danny_bogatko',
    icon: FaInstagram,
    text: 'instagram',
    id: '1',
  },
  {
    url: 'https://github.com/danielbugi',
    icon: FaGithub,
    text: 'github',
    id: '2',
  },
  {
    url: 'https://www.instagram.com/danny_bogatko',
    icon: FaLinkedin,
    text: 'linkedIn',
    id: '3',
  },
];

export const animatedHeader = [
  'Portfolios',
  'E-Commerce',
  'Programs',
  'Landing Pages',
  'Blogs',
  'Banana',
];

export const links = [
  {
    text: 'Home',
    url: '/',
    id: 1,
  },
  {
    text: 'Projects',
    url: 'projects',
    id: 2,
  },
  {
    text: 'About',
    url: 'about',
    id: 3,
  },
  {
    text: 'get in touch',
    url: 'contact',
    id: 4,
  },
];

export const article = [
  {
    imgUrl: technology,
    title: 'In-Demand Technologies',
    text: 'Stay ahead with the latest tech stack. We specialize in Node.js, MongoDB, Express, ES6, Python, React, React Router, CSS, HTML, and Headless CMS. Harness the power of cutting-edge technologies for your digital success.',
    id: 1,
    url: '/about',
    buttonText: 'About',
  },
  {
    imgUrl: standOut,
    title: 'Custom and Unique Design',
    text: 'Experience one-of-a-kind website design tailored to your brand. Our creative team crafts visually stunning and memorable digital experiences that set you apart.',
    id: 2,
    url: '/projects',
    buttonText: 'Projects',
  },
  {
    imgUrl: programming,
    title: 'Programming',
    text: 'Our seasoned programmers bring your web applications to life. From responsive interfaces to complex functionalities, we code with precision and efficiency, ensuring seamless user experiences.',
    id: 3,
    url: '/projects',
    buttonText: 'Projects',
  },
];

export const featuredProject = [
  {
    id: 1,
    title: 'E-Commerce furniture store',
    img: project01,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium omnis veritatis repellendus, reiciendis nesciunt soluta minus amet eaque consequatur mollitia iure. Necessitatibus nam autem suscipit nisi enim, vel nostrum totam, maiores adipisci quidem placeat omnis quibusdam laborum nihil explicabo.',
  },
  {
    id: 2,
    title: 'Noble Clothing E-commerce clothing store',
    img: project02,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium omnis veritatis repellendus, reiciendis nesciunt soluta minus amet eaque consequatur mollitia iure. Necessitatibus nam autem suscipit nisi enim, vel nostrum totam, maiores adipisci quidem placeat omnis quibusdam laborum nihil explicabo.',
  },

  {
    id: 3,
    title: 'JS Track Racing Game',
    img: project04,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium omnis veritatis repellendus, reiciendis nesciunt soluta minus amet eaque consequatur mollitia iure. Necessitatibus nam autem suscipit nisi enim, vel nostrum totam, maiores adipisci quidem placeat omnis quibusdam laborum nihil explicabo.',
  },
];

export const projectList = [
  {
    id: 1,
    title: 'JS Track Racing Game',
    img: pr1,
    url: 'https://bejewelled-semolina-23f0bd.netlify.app/',
    githubUrl: 'https://github.com/danielbugi/track-road-game',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium omnis veritatis repellendus, reiciendis nesciunt soluta minus amet eaque consequatur mollitia iure. Necessitatibus nam autem suscipit nisi enim, vel nostrum totam, maiores adipisci quidem placeat omnis quibusdam laborum nihil explicabo.',
  },
  {
    id: 2,
    title: 'Parallax start background and scope cursor',
    url: 'https://gregarious-marigold-dd419d.netlify.app',
    githubUrl: 'https://github.com/danielbugi/portfolio-website',
    img: pr2,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium omnis veritatis repellendus, reiciendis nesciunt soluta minus amet eaque consequatur mollitia iure. Necessitatibus nam autem suscipit nisi enim, vel nostrum totam, maiores adipisci quidem placeat omnis quibusdam laborum nihil explicabo.',
  },
  {
    id: 3,
    title: 'Parallax Landing Page',
    url: 'https://profound-paprenjak-0f5e83.netlify.app/',
    githubUrl: 'https://github.com/danielbugi/leaf-parralax-effect',
    img: pr3,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium omnis veritatis repellendus, reiciendis nesciunt soluta minus amet eaque consequatur mollitia iure. Necessitatibus nam autem suscipit nisi enim, vel nostrum totam, maiores adipisci quidem placeat omnis quibusdam laborum nihil explicabo.',
  },

  {
    id: 4,
    title: 'Comfy Stroe E-Commerce furniture store',
    url: 'https://testing-comfy-db.netlify.app',
    githubUrl: 'https://github.com/danielbugi/react-comfy-store',
    img: pr4,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium omnis veritatis repellendus, reiciendis nesciunt soluta minus amet eaque consequatur mollitia iure. Necessitatibus nam autem suscipit nisi enim, vel nostrum totam, maiores adipisci quidem placeat omnis quibusdam laborum nihil explicabo.',
  },

  {
    id: 5,
    title: 'Noble Clothing E-commerce clothing store',
    url: 'https://noble-clothing.netlify.app',
    githubUrl: 'https://app.netlify.com/sites/noble-clothing/overview',
    img: pr5,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium omnis veritatis repellendus, reiciendis nesciunt soluta minus amet eaque consequatur mollitia iure. Necessitatibus nam autem suscipit nisi enim, vel nostrum totam, maiores adipisci quidem placeat omnis quibusdam laborum nihil explicabo.',
  },
];

//   // {
