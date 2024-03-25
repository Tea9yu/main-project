import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { RecoilRoot } from 'recoil';
import Login from './components/member/Login';
import Join from './components/member/Join';
import Home from './components/main/Home';
import Nav from './UI/Nav';
import UploadPhotoPage from './components/clothes/PhotoUpload3';
import ClothesInfo from './components/clothes/ClothesInfo';
import Test from './Test2';
import CategorySelector from './components/clothes/CategorySelector';
import ClothesFilter from './components/clothes/ClothesFilter';
import Mypage from './components/member/Mypage';
import Loading from './UI/Loading';



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
            <Route path='/category' element={<ClothesFilter />} />
            <Route path='/login' element={<Login />} />
            <Route path='/join' element={<Join />} />
            <Route path='/upload' element={<UploadPhotoPage />} />
            <Route path='/loading' element={<Loading />} />
            <Route path='/clothes' element={<ClothesInfo />} />
            <Route path='/mypage' element={<Mypage />} />
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
