import { Routes, Route } from 'react-router-dom';
import { routes } from './common/routes';
import { AppRoute } from './common/types';

function renderRoute(_props: AppRoute) {
  const { routes, ...props } = _props;
  const children = routes?.map((route) => renderRoute(route)) as any;

  return <Route {...props}>{children}</Route>;
}

function App() {
  return (
    <Routes>
      {routes.map((route) => {
        return renderRoute(route);
      })}
    </Routes>
  );
}

export default App;
