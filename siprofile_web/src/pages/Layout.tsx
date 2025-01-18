import { Outlet } from 'react-router-dom';
import { Background, Viewport } from '../styled/layout';

const Layout = () => {
  return (
    <Background>
      <Viewport>
        <Outlet />
      </Viewport>
    </Background>
  );
};

export default Layout;
