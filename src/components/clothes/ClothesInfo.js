import React, { useEffect, useState } from 'react'
import Pagination from 'react-js-pagination';
import './paginate.css';

export default function ClothesInfo() {
  const categories = ['ALL', 'OUTER', 'TOP', 'BOTTOM'];  // 상품 카테고리
  const products = ['Product1', 'Product 2', 'Product 3'];  // 상품 목록

  const [clothesList, setClothesList] = useState([]);
  const [clothesTag, setClothesTag] = useState([]);
  const [page, setPage] = useState(1);
  const [totalNum, setTotalNum] = useState(22539);

  // 의류 리스트 가져오기
  const getClothesList = async (page) => {
    const resp = fetch(`http://10.125.121.184:8080/product/items?page=${page}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        // console.log('data', data);
        setClothesList(data);
        setTotalNum(data.total);
      })

  }

  useEffect(() => {
    getClothesList();
  }, []);

  // 의류 리스트 mapping
  useEffect(() => {
    console.log('clothesList=', clothesList);

    let tag = clothesList.map((item) =>
      <div>
        <div>
          <div>
            {item.productcode}
          </div>
          <div>
            <span>상품명 : {item.name}</span>
          </div>
          <div>
            <span>가격 : {item.price}</span>
          </div>
        </div>
      </div>
    )
    setClothesTag(tag);

  }, [clothesList]);

  // 페이지 변경
  const handlePageChange = (page) => {
    setPage(page);
    setClothesList(page);
  }

  return (
    <div className='bg-white flex'>
      <div className='w-1/4 p-4 bg-slate-400 h-lvh'>
        <h2 className='font-bold mb-4 mt-16'>Categories</h2>
        {categories.map((category, index) => (
          <p key={index} className='mb-2'>{category}</p>
        ))}
      </div>
      <div className='w-3/4 p-4'>
        <h2 className='font-bold mb-4 mt-16'>Products</h2>
        {/* {clothesTag} */}
        {/* {products.map((product, index) => (
          <p key={index} className='mb-2'>{product}</p>
        ))} */}
      </div>
      <div className="flex flex-col justify-center items-center pt-2">
        <Pagination
          activePage={page}   // 현재 페이지
          itemsCountPerPage={20}  // 한 페이지에 보여줄 아이템 갯수
          totalItemsCount={totalNum}  // 총 아이템 갯수
          pageRangeDisplayed={5}  // paginator의 페이지 범위
          prevPageText={"‹"} // "이전"을 나타낼 텍스트
          nextPageText={"›"} // "다음"을 나타낼 텍스트
          onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
        />
      </div>
    </div>
  )
}
