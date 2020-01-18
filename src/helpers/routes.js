import Contact from '../views/Contact/Contact';
import Hire from '../views/Hire/Hire';
import Home from '../views/Home/Home';
import About from '../views/About/About';
import Projects from '../views/Projects/Projects';

const routes = [
  { path: '/home', name: 'Home', Component: Home },
  { path: '/projects', name: 'Projects', Component: Projects },
  { path: '/about', name: 'About', Component: About },
  { path: '/contact', name: 'Contact', Component: Contact },
  { path: '/hire', name: 'Hire', Component: Hire }
];

export { routes as default };
