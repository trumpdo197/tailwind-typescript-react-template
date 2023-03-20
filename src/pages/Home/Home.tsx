import { Button } from '@/components/Button/Button';
import { NavLink } from 'react-router-dom';
import { useHomeStore } from './store/home';

export const Home = () => {
  const { foo } = useHomeStore();
  return (
    <div>
      Home page
      <div className="mt-4">
        <Button theme="primary">Button primary</Button>
        <Button className="ml-2">Button default</Button>

        <div>Store state: {foo}</div>
        <NavLink to="/login" className="block mt-2">
          To login page
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
