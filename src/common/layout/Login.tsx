import { Outlet } from 'react-router-dom';

const LayoutLogin = () => {
  return (
    <div className="h-[100vh] overflow-auto flex items-center">
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutLogin;
