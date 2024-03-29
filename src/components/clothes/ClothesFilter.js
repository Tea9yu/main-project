
import React, { useState } from 'react';
import plate from '../../images/namelabel.png'

export default function ClothesFilter({ setSubCategory, setPageInit }) {
  const categories = {
    아우터: { JP: '점퍼', JK: '자켓', CT: '코트', VT: '베스트', CA: '가디건' },
    상의: { TS: '티셔츠', TN: '티셔츠나시', KT: '니트', KN: '니트나시', BL: '블라우스', WS: '남방', BN: '블라우스나시', OP: '원피스' },
    하의: { PT: '바지', DP: '데님', SK: '스커트', LG: '레깅스' },
    세트: { ST: '세트' },
  };

  const [mainCategory, setMainCategory] = useState('');
  // const [subCategories, setSubCategories] = useState({});
  const [isOpen, setIsOpen] = useState(false);




  const handleMainCategoryClick = (category) => {
    if (mainCategory === category) {
      setIsOpen(false); // 대분류를 다시 클릭하면 중분류를 닫습니다.
      setMainCategory('');
    } else {
      setIsOpen(true); // 대분류를 클릭하면 중분류를 엽니다.
      setMainCategory(category);
      // 대분류에 해당하는 중분류 카테고리를 서버로부터 받아옵니다.

    }
  };

  const handleSubCategoryClick = (subCategoryCode) => {
    // console.log(`선택한 카테고리: ${mainCategory} - ${subCategory}`);
    console.log(`선택한 카테고리 코드: ${subCategoryCode}`);
    // 중분류 카테고리를 클릭했을 때 해당 카테고리에 대한 처리를 수행합니다.
    // 예를 들어, 부모 컴포넌트에 선택한 카테고리 정보를 전달할 수 있습니다.
    // 전달된 함수를 호출하여 선택한 카테고리 정보를 부모 컴포넌트로 전달할 수 있습니다.
    // 이를 위해 ClothesFilter 컴포넌트의 props로 onSubCategoryClick 함수를 받아와 사용합니다.
    // fetchSubCategories(subCategoryCode);
    // onSubCategoryClick(mainCategory, subCategoryCode);
    setSubCategory(subCategoryCode)
    setPageInit(1);
  };

  const handleSetALL = () => {
    setSubCategory("ALL")
  };

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center">
        <button className='relative border-b border-black p-2 m-1 mb-2 w-32 font-bold' onClick={handleSetALL}>
          <img src={plate} alt='plate.png' className='w-full h-auto' />
          <div className='absolute top-9 text-white left-11 '>전체</div>
        </button>
        {Object.keys(categories).map((category) => (
          <div key={category}>
            <button
              onClick={() => handleMainCategoryClick(category)}
              className="border p-2 m-1 w-32 bg-black text-white"
            >
              {category}
            </button>
            {isOpen && mainCategory === category && (
              <div className="flex flex-col">
                {Object.entries(categories[category]).map(([code, subCategory]) => (
                  <button
                    key={code}
                    onClick={() => handleSubCategoryClick(code)}
                    className="p-2 m-1 w-32 bg-gray-700 text-white"
                  >
                    {subCategory}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

