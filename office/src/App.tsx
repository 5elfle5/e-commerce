import { type FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, AddItem } from './pages';

export const App: FC = () => {
  return (
    <div className='flex justify-center mt-2'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-item' element={<AddItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

