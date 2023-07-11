import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Gongming Shi',
  title: "Hi all, I'm Gongming",
  personalInfo: [
    {
      title: 'Email',
      value: 'gm.shi@outlook.com',
    },
    {
      title: 'Phone',
      value: '0455417699',
    },
    {
      title: 'Location',
      value: 'Sydney',
    },
  ],
  description:
    'Task-oriented and highly motivated software developer with a strong focus on web development. Recent graduate in Information Technology in UTS gained solid foundation of programming languages, data sctructures and algorithms. Proficient in full stack technologies with a solid understanding of responsive web design and frameworks. Seeking an opportunity to apply my skills and contribute to a dynamic web development team, leveraging my technical acumen and creative mindset to build innovative solutions.',
  resumeLink:
    'https://drive.google.com/file/d/1Udkxy4G89zTje7zbEUx8sjgIFv_kQzJk/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'gm-shi',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://gm-shi.github.io/',
  linkedin: 'https://www.linkedin.com/in/gongming-shi-90a176234/',
  github: 'https://github.com/gm-shi',
  resumeLink:
    'https://drive.google.com/file/d/1Udkxy4G89zTje7zbEUx8sjgIFv_kQzJk/view?usp=sharing',
};

export const skillsSection: SkillsSectionType = {
  title: 'Technical Skills',
  subTitle:
    'JUNIOR FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK AND LEARN NEW THINGS EVERYDAY',
  data: [
    {
      title: 'Full Stack Development',
      skills: [
        emoji('⚡ Building responsive Single-Page-Apps (SPA) in React.js'),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs Node.js'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'Scss',
          fontAwesomeClassName: 'vscode-icons:file-type-scss',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'TypeScript',
          fontAwesomeClassName: 'vscode-icons:file-type-typescript-official',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Nodejs',
          fontAwesomeClassName: 'vscode-icons:file-type-node',
        },
        {
          skillName: 'Java',
          fontAwesomeClassName: 'vscode-icons:file-type-java',
        },
        {
          skillName: 'Webpack',
          fontAwesomeClassName: 'vscode-icons:file-type-webpack',
        },
        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      skills: [
        emoji('⚡ AWS Certified Cloud Practitioner (9399YSG2024EQX93)'),
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using cloud services'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'GraphQL',
          fontAwesomeClassName: 'vscode-icons:file-type-graphql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
      ],
    },
  ],
};

export const educationInfo: EducationType[] = [
  {
    schoolName: 'University of Technology Sydney',
    subHeader: 'Bachelor of Science in Information Technology',
    duration: 'June 2020 - August 2023',
    desc: 'Major in Enterprise System Development & Networking and Cybersecurity',
    grade: 'GPA: 6.83 / 7.0 | WAM: 90.79 / 100',
    schoolLogoUrl: 'https://gm-shi.github.io/portfolio/img/utsLogo.png',
    descBullets: [
      "Dean's List Information Technology (2021)",
      "Dean's List Information Technology (2022)",
      "Dean's List Information Technology (2023)",
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Junior Full Stack Developer',
    company: 'HolonIQ',
    companyLogo: 'https://gm-shi.github.io/portfolio/img/holoniq.jpg',
    date: 'June 2022 - Present',
    desc: 'I worked as junior full stack web developer to develop plaform new features and maintain lagacy code using TypeScript, React, Expressjs, PostgreSQL, Chart.js and some other libraries.',
    descBullets: [
      'Constructed and maintained web applications using technologies such as JavaScript, TypeScript, React, GraphQL, and PostgreSQL.',
      'Developed RESTful APIs utilizing Express.js framework and seamlessly incorporated into client-side application by leveraging Axios Promise',
      'Coded with CSS, SASS and Bluprint.js to create responsive and visually appealing UI',
      'Utilized Postgraphile to create PostgreSQL database schemas and queries, improving database performance and ensuring data integrity',
      'Refactored legacy code using modern react and typescript to reusable functions and web components',
      ' Implemented version control using Git, ensuring efficient collaboration with team members and smooth development of code changes',
      'Conducted rigorous testing and comprehensive debugging to ensure reliability and functionality of software',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'HolonIQ',
    companyLogo: 'https://gm-shi.github.io/portfolio/img/holoniq.jpg',
    date: 'February 2022 - June 2022',
    desc: 'I worked as web developer to develop a Chrome extension for plaform users. The Chrome extension allowing user to see platfrom data and create object throgh it and create Restful APIs using Expressjs to connect with the Chrome extension plugins',
    descBullets: [
      'Developed a Chrome extension show Platform data to user and design entity profiles such as organization and person while browsing with Chrome',
      'Collaborated closely with a senior developer to troubleshoot and resolve software bugs, while contributing to feature development initiatives',
      'Constructed web components using Typescript and React framework',
    ],
  },
];

export const projects: ProjectType[] = [
  // {
  //   name: 'Photography Share Point',
  //   desc: 'Allow user to comment, like and follow other users and content they have posted',
  //   github: 'https://github.com/1hanzla100/developer-portfolio',
  //   link: 'https://developer-portfolio-1hanzla100.vercel.app/',
  // },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Gongming Shi',
  description: 'A passionate Fresh Grad & Junior Full Stack Web Developer.',
  author: 'Gongming Shi',
  // image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  keywords: ['Gongming Shi', 'Ming'],
};
