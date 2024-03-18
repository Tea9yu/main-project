import React, { useEffect, useState } from 'react'
import Pagination from 'react-js-pagination';
import './paginate.css';

export default function ClothesInfo() {
  // const categories = ['ALL', 'OUTER', 'TOP', 'BOTTOM'];  // 상품 카테고리
  const products = ['Product1', 'Product 2', 'Product 3'];  // 상품 목록

  const categoryMap = {'아우터' : ['JP', 'JK', 'CT', 'VT', 'CA'], '상의': ['TS', 'TN', 'KT', 'KN', 'BL', 'WS', 'BN'], '하의': ['PT', 'DP', 'SK', 'LG'] };  // 카테고리 매핑
  const categories = ['ALL', ...Object.keys(categoryMap)];  // 상품 카테고리
  const [selectedCategory, setSelectedCategory] = useState('ALL');  // 추가된 상태 변수

  const [clothesList, setClothesList] = useState([]);
  const [itemsCountPerPage, setItemsCountPerPage] = useState([]);
  // const [clothesTag, setClothesTag] = useState([]);
  const [page, setPage] = useState(1);
  const [totalNum, setTotalNum] = useState(13957);

  const [booleanState, setBooleanState] = useState(false);

  const handleBoolean = (e) => {
    setBooleanState(true);
    console.log(booleanState);
  };
    // 의류 리스트 가져오기
    // const getClothesList = async (pgno) => {
    //   const resp = await fetch(`http://10.125.121.184:8080/product/items/${pgno}`, {
    //     method: 'GET',
    //   });
    //   const data = await resp.json();
    //   if (data) {  // data가 null이 아닌지 확인
    //     setClothesList(data);
    //     setTotalNum(data.length);
    //   } else {
    //     console.error('Failed to load data');
    //   }
    // }
    
    const getClothesList = async (pgno) => {
      const resp = await fetch(`http://10.125.121.184:8080/product/items/${pgno}`, {
        method: 'GET',
      });
      let data = await resp.json();
      if (selectedCategory !== 'ALL') {
        const categoryCodes = categoryMap[selectedCategory];
        data = data.content.filter(item => categoryCodes.includes(item.productCode.slice(4, 6)));
      }
      setClothesList(data.content);  // 상품 목록 업데이트
      setItemsCountPerPage(data.pageable.pageSize); // 페이지 상품 개수
      setTotalNum(data.totalPages);  // 전체 상품 수 업데이트
    }

  useEffect(() => {    
    getClothesList(page); // 페이지 번호 변경 시 새로운 상품 목록 불러옴
  }, [page, selectedCategory]);
  

  // 페이지 변경 했을 때  
  useEffect(() => {
    fetch(`http://10.125.121.184:8080/product/items/${page}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setClothesList(data.content);
        setTotalNum(data.totalPages);  // 전체 상품 수 업데이트 
                    
        // setClothesTag(data);
        console.log("clothseList=", data)
        // console.log("clothesTag=", clothesTag)

      })

  }, [page, selectedCategory]);

  // 페이지 변경
  const handlePageChange = (page) => {
    console.log("page=", page)
    setPage(page);
    getClothesList(page);
  }

  // 페이지 변경 했을 때
  useEffect(() => {
    fetch(`http://10.125.121.184:8080/product/items/${page}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        // console.log('data', data);
        console.log("page=", page)
        setClothesList(data.content);
        // setTotalNum(data.totalPages);
      })

  }, [page, selectedCategory]);

  return (
    <div className='bg-white flex'>
      <div className='p-4 bg-slate-400 h-screen fixed left-0 min-w-[250px] max-w-[250px]'>
        <h2 className='font-bold mb-4 mt-16'>Categories</h2>
        
        {categories.map((category, index) => (
          <button onClick={handleBoolean} key={index} className='border flex flex-col p-2 w-full m-2 justify-center' 
          // onClick={() => setSelectedCategory(category)}
          >{category}</button>
        ))}
      </div>
      <div className='flex flex-col flex-grow ml-64 p-4'>
        <h2 className='font-bold mb-4 mt-16'>Products</h2>
        <div className='grid xl:grid-cols-5 lg:grid-cols-4 grid-cols-4 gap-4 min-w-[900px]'>
          {clothesList.map((item, index) =>
            <div key={index} className='flex flex-wrap justify-center'>
              <div className='border rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5' 
              style={{width: '200px', minWidth: '200px', flex: ' 1 0 auto'}}
              >
                <div>
                  <img src={`${process.env.PUBLIC_URL}/product_image/${item.productCode}.jpg`} alt={item.name} 
                  // style={{ width: '100%', height: '250px' }} 
                  className='w-full h-48 object-cover'
                  />
                </div>
                <div className=''>
                  {/* {item.productCode} */}
                </div>
                <div className='font-bold mt-2'>
                  <span>{item.name}</span>
                </div>
                <div>
                  <span>{parseInt(item.price).toLocaleString('ko-KR')}원</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* {clothesTag} */}
        {/* {products.map((product, index) => (
          <p key={index} className='mb-2'>{product}</p>
        ))} */}
        <div className="flex flex-col justify-center items-center pt-2">
          <Pagination
            activePage={page}   // 현재 페이지
            itemsCountPerPage={itemsCountPerPage}  // 한 페이지에 보여줄 아이템 갯수
            totalItemsCount={13957}  // 총 아이템 갯수
            pageRangeDisplayed={10}  // paginator의 페이지 범위
            prevPageText={"‹"} // "이전"을 나타낼 텍스트
            nextPageText={"›"} // "다음"을 나타낼 텍스트
            onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
          />
        </div>
      </div>
    </div>
  )
}


// import React, { useEffect, useState } from 'react'
// import Pagination from 'react-js-pagination';
// import './paginate.css';

// export default function ClothesInfo() {
//   const categories = ['ALL', 'OUTER', 'TOP', 'BOTTOM'];  // 상품 카테고리
//   const products = ['Product1', 'Product 2', 'Product 3'];  // 상품 목록

//   const [clothesList, setClothesList] = useState([]);
//   const [clothesTag, setClothesTag] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalNum, setTotalNum] = useState(17335);

//   // 의류 리스트 가져오기
//   const getClothesList = async (pgno) => {
//     const resp = fetch(`http://10.125.121.184:8080/product/items?pageNo=${pgno}`, {
//       method: 'GET',
//     })
//       .then(response => response.json())
//       .then(data => {
//         // console.log('data', data);
//         setClothesList(data);
//         setTotalNum(data.length);
//       })

//   }

//   useEffect(() => {
//     let n = 1
//     getClothesList(n);
//   }, []);

//   // // 의류 리스트 mapping
//   // useEffect(() => {
//   //   console.log('clothesList=', clothesList);

//   //   let tag = clothesList.map((item) =>
//   //     <div>
//   //       <div>
//   //         <div>
//   //           {item.productCode}
//   //         </div>
//   //         <div>
//   //           <span>상품명 : {item.name}</span>
//   //         </div>
//   //         <div>
//   //           <span>가격 : {item.price}</span>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   )
//   //   setClothesTag(tag);

//   // }, [clothesList]);

//   // 페이지 변경 했을 때
//   const itemsCountPerPage = 40;
//   useEffect(() => {
//     const start = (page - 1) * itemsCountPerPage;
//     const end = start + itemsCountPerPage;
//     const currentPageItems = clothesList.slice(start, end);
//     setClothesTag(currentPageItems);
//     console.log('clothesList=', clothesList);
//   }, [page, clothesList]);


//   // 페이지 변경
//   const handlePageChange = (page) => {
//     setPage(page);
//     // setClothesList(page);
//   }

//   // 페이지 변경 했을 때
//   useEffect(() => {
//     fetch(`http://10.125.121.184:8080/product/items?pageNo=${page}`, {
//       method: 'GET',
//     })
//       .then(response => response.json())
//       .then(data => {
//         // console.log('data', data);
//         setClothesList(data);
//         setTotalNum(data.length);
//       })

//   }, [page]);

//   return (
//     <div className='bg-white flex'>
//       <div className='p-4 bg-slate-400 h-screen fixed left-0 min-w-[250px] max-w-[250px]'>
//         <h2 className='font-bold mb-4 mt-16'>Categories</h2>
//         {categories.map((category, index) => (
//           <p key={index} className='mb-2'>{category}</p>
//         ))}
//       </div>
//       <div className='flex flex-col flex-grow ml-64 p-4  '>
//         <h2 className='font-bold mb-4 mt-16'>Products</h2>
//         <div className='grid xl:grid-cols-5 lg:grid-cols-4 grid-cols-4 gap-4 min-w-[900px]'>
//           {clothesTag.map((item, index) =>
//             <div key={index} className='flex flex-wrap justify-center'>
//               <div className='border rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5' 
//               style={{width: '200px', minWidth: '200px', flex: ' 1 0 auto'}}
//               >
//                 <div>
//                   <img src={`${process.env.PUBLIC_URL}/product_image/${item.productCode}.jpg`} alt={item.name} 
//                   // style={{ width: '100%', height: '250px' }} 
//                   className='w-full h-48 object-cover'
//                   />
//                 </div>
//                 <div className=''>
//                   {/* {item.productCode} */}
//                 </div>
//                 <div className='font-bold mt-2'>
//                   <span>{item.name}</span>
//                 </div>
//                 <div>
//                   <span>{parseInt(item.price).toLocaleString('ko-KR')}원</span>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* {clothesTag} */}
//         {/* {products.map((product, index) => (
//           <p key={index} className='mb-2'>{product}</p>
//         ))} */}
//         <div className="flex flex-col justify-center items-center pt-2">
//           <Pagination
//             activePage={page}   // 현재 페이지
//             itemsCountPerPage={itemsCountPerPage}  // 한 페이지에 보여줄 아이템 갯수
//             totalItemsCount={totalNum}  // 총 아이템 갯수
//             pageRangeDisplayed={10}  // paginator의 페이지 범위
//             prevPageText={"‹"} // "이전"을 나타낼 텍스트
//             nextPageText={"›"} // "다음"을 나타낼 텍스트
//             onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
//           />
//         </div>
//       </div>
//     </div>
//   )
// }
