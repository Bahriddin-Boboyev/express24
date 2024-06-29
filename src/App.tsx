import { Route, Routes } from 'react-router-dom';
import { About, Main } from '@/pages';
// import { appStore } from './store';

export const App = () => {
  // const { count, inc } = appStore();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} index />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};
