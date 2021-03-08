export interface Project {
  id: string;
  description: string;
  responsibilities: string[];
}

export interface Work {
  id: string;
  position: string;
  period: { start: string; end: string };
  location: string;
  company: string;
  projects: Project[];
}

export const works: Work[] = [
  {
    id: 'znw',
    position: 'JavaScript Developer',
    period: { start: '11.2020', end: 'ongoing' },
    location: 'Kyiv',
    company: 'Company (Active NDA)',
    projects: [
      {
        id: 'language',
        description:
          'Language learning platform for students with games and lesson administration for teachers.',
        responsibilities: [
          'Develop and support language learning platform frontend with React and TypeScript',
          'Improved frontend performance, added support of next-gen image formats',
          'Refactored and developed new learning games with animations using Framer Motion library and updated games flow',
          'Refactoring and improvements of frontend testing using react-testing-library',
        ],
      },
    ],
  },
  {
    id: 'btv',
    position: 'JavaScript Software Engineer',
    company: 'Company (Active NDA)',
    period: { start: '06.2018', end: '11.2020' },
    location: 'Kyiv',
    projects: [
      {
        id: 'crm',
        description: 'CRM system for managing clients of the company`s products.',
        responsibilities: [
          'Developed and optimized user interface of CRM web application',
          'Rewritten UI class components for using new version of Material UI components library, improved frontend performance',
          'Developed new custom scrollbar and view history using Redux',
          'Rewritten old backend Go projects into NodeJs applications using Koa.js',
          'Developed a new bonus management functionality in the CRM system',
        ],
      },
      {
        id: 'sender',
        description:
          'Application for managing customers communication with support and contact center.',
        responsibilities: [
          'Developed NodeJs application for sending and managing sms using Infobip and Redis for sms messages queue',
          'Developed a gate for SMS Sender api internal usage',
          'Developed a module for synchronization customers communications with the CRM system using SenderMobi and Corezoid',
        ],
      },
    ],
  },
  {
    id: 'vds',
    position: 'Web developer',
    company: 'VD SOFT',
    period: { start: '04.2017', end: '10.2017' },
    location: 'Zhytomyr',
    projects: [
      {
        id: 'eco-balance',
        description: 'EcoBalance, administration tool for making automated ecology documentation.',
        responsibilities: [
          'Developed web pages for company partners with pure HTML and JS(JQuery)',
          'Developed many HTML template pages for ecology documents used in EcoBalance applications',
          'Developed module for C# application for vehicle ecology documentation',
          'Technologies: HTML/CSS, JQuery, C# Windows Forms',
        ],
      },
    ],
  },
];
