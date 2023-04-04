import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { NavBar } from './NavBar';
import { ScrollToTop } from './ScrollToTop';

export const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
