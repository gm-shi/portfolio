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
  description:
    'Task-oriented and highly motivated software developer with a strong focus on web development. Recent graduate in Information Technology in UTS. Proficient in full stack technologies with a solid understanding of responsive web design and frameworks. Seeking an opportunity to apply my skills and contribute to a dynamic web development team, leveraging my technical acumen and creative mindset to build innovative solutions.',
  resumeLink: 'https://www.linkedin.com/in/gongming-shi-90a176234/', //To do
};

export const openSource = {
  githubUserName: 'gm-shi',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://gm-shi.github.io/',
  linkedin: 'https://www.linkedin.com/in/gongming-shi-90a176234/',
  github: 'https://github.com/gm-shi',
};

export const skillsSection: SkillsSectionType = {
  title: 'Tech Skills',
  subTitle:
    'JUNIOR FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK AND LEARN NEW THINGS EVERYDAY',
  data: [
    {
      title: 'Full Stack Development',
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs Node.js, Express.js'),
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
    schoolLogoUrl: '/img/utsLogo.png',
    descBullets: [
      "Dean's List Information Technology (2021)",
      "Dean's List Information Technology (2022)",
      "Dean's List Information Technology (2023)",
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Frontend Developer',
    company: 'Duseca Software',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Apr 2022 – Jun 2022',
    desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
  },
  {
    role: 'API Engineer',
    company: 'Duseca Software',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Jan 2022 – Mar 2022',
    desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
    descBullets: [
      'Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Photography Share Point',
    desc: 'Allow user to comment, like and follow other users and content they have posted',
    github: 'https://github.com/1hanzla100/developer-portfolio',
    link: 'https://developer-portfolio-1hanzla100.vercel.app/',
  },
];

// option to hide or show the ContactUs component
// export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Gongming Shi',
  description: 'A passionate Fresh Grad & Junior Full Stack Web Developer.',
  author: 'Gongming Shi',
  // image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  keywords: ['Gongming Shi', 'Ming'],
};
