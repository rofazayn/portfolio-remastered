import socilaPng from '../../assets/images/socila.png';
import charityPal from '../../assets/images/charitypal.png';
import rofazaynPng from '../../assets/images/rofazayn.png';

export const projects = [
  {
    id: 1,
    title: 'Socila. (In progress)',
    subtitle: 'Socila is rich featured social network application.',
    about: `Socila is a 'microblogging' system that allows you to send and receive short posts. Post can be up to 256 characters long and can include links to relevant websites and resources.

    Socila users follow other users. If you follow someone you can see their posts in your socila 'timeline'. You can choose to follow people and organisations with similar academic and personal interests to you.
    
    You can create your own post or you can share information that has been posted by others.`,
    image: socilaPng,
    logo: null,
    skills: ['JavaScript', 'React.js', 'Styled Components', 'Firebase'],
    previewUrl: 'https://socila.rofazayn.me',
    repoUrl: 'https://www.github.com/rofazayn/socila-client',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'CharityPal. (Completed)',
    subtitle: 'CharityPal is a charity web application.',
    about: `CharityPal is a web application built with React.js, it allows you donate a certain amount of money to help underprivileged kids around the globe and read charity news, the donation is processed immediately and the balance will be updated in realtime (I disabled the donation feature because I don't have CharityPal legalized, but you can still use this fake card to test: 4242424242424242|1|1|123)`,
    image: charityPal,
    logo: null,
    skills: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'Stripe'],
    previewUrl: 'https://charitypal.rofazayn.me',
    repoUrl: 'https://www.github.com/rofazayn/charitypal',
    isCompleted: true,
  },
  {
    id: 3,
    title: 'rofazayn. (Completed)',
    subtitle: 'A remake of my portfolio website.',
    about: `My official portfolio website, built with React.js, it has 4 main routes: Home, About, Projects and Contact. I made sure to keep it simple and straightforward, I also coded some reveal animations and added a dark/light theme switching feature. The code for it is open source, if you like it feel free to edit it, make it your own, do whatever suits you.`,
    image: rofazaynPng,
    logo: null,
    skills: ['JavaScript', 'React.js', 'Styled Components', 'GSAP'],
    previewUrl: 'https://rofazayn.me',
    repoUrl: 'https://www.github.com/rofazayn/portfolio-remastered',
    isCompleted: true,
  },
];
