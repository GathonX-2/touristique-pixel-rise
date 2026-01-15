import { Outlet } from 'react-router-dom';
import Header from './ui/Header';
import Footer from './ui/Footer';

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-gray-100" />
      <Header />
      <main className="relative z-10 pt-24 pb-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
