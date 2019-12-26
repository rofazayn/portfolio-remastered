import Contact from '../views/Contact/Contact';
import Hire from '../views/Hire/Hire';
import Home from '../views/Home/Home';
import Resume from '../views/Resume/Resume';
import Projects from '../views/Projects/Projects';

const routes = [
  { path: '/home', name: 'Home', Component: Home },
  { path: '/projects', name: 'Projects', Component: Projects },
  { path: '/resume', name: 'Resume', Component: Resume },
  { path: '/contact', name: 'Contact', Component: Contact },
  { path: '/hire', name: 'Hire', Component: Hire }
];

export { routes as default };
