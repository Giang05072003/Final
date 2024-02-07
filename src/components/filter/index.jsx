import React, { useState } from 'react';

function Filter(props) {
    const [showPrice, setShowPrice] = useState(false);
    const [seeMoreText, setSeeMoreText] = useState('Xem thêm');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [selectedStar, setSelectedStar] = useState(null);

    const handleSelectCategory = (category) => {
        props.onSelectCategory(category);
        setSelectedCategory(category);
    };

    const handleSelectPrice = (price) => {
        props.onSelectPrice(price);
        setSelectedPrice(price)
    };

    const handleSelectStar = (star) => {
        props.onSelectStar(star);
        setSelectedStar(star)
    };

    const togglePriceVisibility = () => {
        setShowPrice(!showPrice);
        setSeeMoreText(showPrice ? 'Xem thêm' : 'Thu gọn');
    };

    return (
        <>
            <div className="flex flex-col bg-white rounded-lg py-3 px-1 h-fit">
                <div className="flex flex-col w-[200px]">
                    <div className="font-bold p-1">Danh mục sản phẩm</div>
                    <div className={`p-1 ${selectedCategory === 'English Books' ? 'text-sky-700' : 'text-black'} hover:cursor-pointer hover:text-sky-700`} onClick={() => handleSelectCategory('English Books')}>
                        English Books
                    </div>
                    <div className={`p-1 ${selectedCategory === 'Sách tiếng Việt' ? 'text-sky-700' : 'text-black'} hover:cursor-pointer hover:text-sky-700`} onClick={() => handleSelectCategory('Sách tiếng Việt')}>
                        Sách tiếng Việt
                    </div>
                    <div className={`p-1 ${selectedCategory === 'Văn phòng phẩm' ? 'text-sky-700' : 'text-black'} hover:cursor-pointer hover:text-sky-700`} onClick={() => handleSelectCategory('Văn phòng phẩm')}>
                        Văn phòng phẩm
                    </div>
                    <div className={`p-1 ${selectedCategory === 'Quà lưu niệm' ? 'text-sky-700' : 'text-black'} hover:cursor-pointer hover:text-sky-700`} onClick={() => handleSelectCategory('Quà lưu niệm')}>
                        Quà lưu niệm
                    </div>
                </div>
                <div className="border-solid border-t mt-2">
                    <div className="font-bold p-1">Nhà cung cấp</div>
                    <div className="flex p-1">
                        <input type="checkbox" value=""/>
                        <p className="ml-2">Nhà sách Fahasa</p>
                    </div>
                    <div className="flex p-1">
                        <input type="checkbox" value=""/>
                        <p className="ml-2">Bamboo Books</p>
                    </div>
                    <div className="flex p-1">
                        <input type="checkbox" value=""/>
                        <p className="ml-2">Time Books</p>
                    </div>
                    <div className="flex p-1">
                        <input type="checkbox" value=""/>
                        <p className="ml-2">Nhà Sách Trẻ Online</p>
                    </div>
                    <div className="flex p-1">
                        <input type="checkbox" value=""/>
                        <p className="ml-2">VBooks</p>
                    </div>
                </div>
                {showPrice && (
                    <div className="border-solid border-t mt-2">
                        <div className="font-bold p-1">Giá sản phẩm</div>
                        <div className={`p-1 ${selectedPrice === 0 ? 'text-sky-700' : 'text-black'} hover:cursor-pointer hover:text-sky-700`} onClick={() => handleSelectPrice(0)}>
                            Từ thấp đến cao
                        </div>
                        <div className={`p-1 ${selectedPrice === 1 ? 'text-sky-700' : 'text-black'} hover:cursor-pointer hover:text-sky-700`}onClick={() => handleSelectPrice(1)}>
                            Từ cao đến thấp
                        </div>
                    </div>
                )}
                <div onClick={togglePriceVisibility} className="flex items-center cursor-pointer">
                    <div className="font-bold p-1 text-sky-700">{seeMoreText}</div>
                    <div className="flex text-sky-700 items-center justify-center">
                        <span class="material-symbols-outlined">
                            {showPrice ? 'expand_less' : 'expand_more'}
                        </span>
                    </div>
                </div>
                <div className="border-solid border-t mt-2">
                    <div className="font-bold p-1">Đánh giá</div>
                    <div className={`flex p-1 ${selectedStar === '5' ? 'text-sky-700' : 'text-black'} hover:cursor-pointer hover:text-sky-700`} onClick={() => handleSelectStar('5')}>
                        <div className="flex items-center mr-2">
                            {[...Array(5)].map((_, index) => (
                                <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#a)">
                                    <path
                                        d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                                        fill="#FFC400"
                                    ></path>
                                    </g>
                                    <defs>
                                    <clipPath id="a">
                                        <path fill="#fff" transform="translate(1 1.5)" d="M0 0h10v10H0z"></path>
                                    </clipPath>
                                    </defs>
                                </svg>
                            ))}
                        </div>
                        <div>
                            từ 5 sao
                        </div>
                    </div>
                    <div className={`flex p-1 ${selectedStar === '4' ? 'text-sky-700' : 'text-black'} hover:cursor-pointer hover:text-sky-700`} onClick={() => handleSelectStar('4')}>
                        <div className="flex items-center mr-2">
                            {/* Load Star Gold*/}
                            {[...Array(4)].map((_, index) => (
                                <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#a)">
                                    <path
                                        d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                                        fill="#FFC400"
                                    ></path>
                                    </g>
                                    <defs>
                                    <clipPath id="a">
                                        <path fill="#fff" transform="translate(1 1.5)" d="M0 0h10v10H0z"></path>
                                    </clipPath>
                                    </defs>
                                </svg>
                            ))}

                            {/* Load Star not Gold*/}
                            {[...Array(1)].map((_, index) => (
                                <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#a)">
                                    <path
                                        d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                                        fill="#DDDDE3"
                                    ></path>
                                    </g>
                                    <defs>
                                    <clipPath id="a">
                                        <path fill="#fff" transform="translate(1 1.5)" d="M0 0h10v10H0z"></path>
                                    </clipPath>
                                    </defs>
                                </svg>
                            ))}
                        </div>
                        <div>
                            từ 4 sao
                        </div>
                    </div>
                    <div className={`flex p-1 ${selectedStar === '3' ? 'text-sky-700' : 'text-black'} hover:cursor-pointer hover:text-sky-700`}  onClick={() => handleSelectStar('3')}>
                        <div className="flex items-center mr-2">
                            {/* Load Star Gold*/}
                            {[...Array(3)].map((_, index) => (
                                <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#a)">
                                    <path
                                        d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                                        fill="#FFC400"
                                    ></path>
                                    </g>
                                    <defs>
                                    <clipPath id="a">
                                        <path fill="#fff" transform="translate(1 1.5)" d="M0 0h10v10H0z"></path>
                                    </clipPath>
                                    </defs>
                                </svg>
                            ))}

                            {/* Load Star not Gold*/}
                            {[...Array(2)].map((_, index) => (
                                <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#a)">
                                    <path
                                        d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                                        fill="#DDDDE3"
                                    ></path>
                                    </g>
                                    <defs>
                                    <clipPath id="a">
                                        <path fill="#fff" transform="translate(1 1.5)" d="M0 0h10v10H0z"></path>
                                    </clipPath>
                                    </defs>
                                </svg>
                            ))}
                        </div>
                        <div>
                            từ 3 sao
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
  
export default Filter