import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { RecoilRoot } from 'recoil';
import LogForm from './components/member/LogForm';
import Join from './components/member/Join';
import Home from './components/main/Home';
import Nav from './UI/Nav';
import UploadPhotoPage from './components/clothes/PhotoUpload3';
import ClothesInfo from './components/clothes/ClothesInfo';
import Test from './Test';


function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <div className='w-full bg-black'>
          <div>
            <Nav />
          </div>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/test' element={<Test />} />
            <Route path='/login' element={<LogForm />} />
            <Route path='/join' element={<Join />} />
            <Route path='/upload' element={<UploadPhotoPage />} />
            <Route path='/clothes' element={<ClothesInfo />} />
            {/* <Route path='/food' element={<BusanFoodInfo />} />
            <Route path='/list' element={<BoardList2 />} />            
            <Route path='/view/:seq' element={<BoardDetail />} />
            <Route path='/write' element={<BoardWrite />} />            */}
          </Routes>
        </div>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
