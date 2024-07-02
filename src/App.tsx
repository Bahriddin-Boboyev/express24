import { Route, Routes } from 'react-router-dom';
import { About, Main } from '@/pages';
import { Navbar } from '@/components';
import { appStore } from './store';

export const App = () => {
  const { isOverlay } = appStore();

  return (
    <>
      <Navbar />
      <div className="mt-20">
        <Routes>
          <Route path="/" element={<Main />} index />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <div className={`overlay ${isOverlay ? 'active' : ''}`} />
    </>
  );
};
