import { Route, Routes } from 'react-router-dom';
import { About, Main } from '@/pages';
import { Footer, Navbar } from '@/components';

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <Routes>
          <Route path="/" element={<Main />} index />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
