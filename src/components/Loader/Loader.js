import homeImage from '../../assets/images/03.png';
import ProjectsImage from '../../assets/images/04.png';
import resumeImage from '../../assets/images/05.png';
import hireImage from '../../assets/images/09.png';
import contactImage from '../../assets/images/06.png';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../redux/actions/ui.actions';

export const images = [
  homeImage,
  ProjectsImage,
  resumeImage,
  hireImage,
  contactImage
];

const Loader = () => {
  const checkImage = path =>
    new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve({ path, status: 'ok' });
      img.onerror = () => resolve({ path, status: 'error' });

      img.src = path;
    });

  const loadImg = paths => Promise.all(paths.map(checkImage));

  const dispatch = useDispatch();

  loadImg(images).then(() => dispatch(setLoading(false)));

  return null;
};

export default Loader;
