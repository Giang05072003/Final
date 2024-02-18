import React, { useState, useEffect } from "react";

function BookInfoLarge(props) {

    const [author, setAuthor] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        if (props.book.authors && props.book.authors.length > 0) {
            setAuthor(props.book.authors[0].name || "");
        } else {
            setAuthor("Chưa xác định");
        }
        setName(props.book.name || "Chưa xác định");
    }, [props]);

    useEffect(() => {
    }, [author]);

    useEffect(() => {
    }, [name]);
    
    return (
      <>
        <div className="flex gap-2 flex-col bg-white rounded-lg p-4">
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-4">
                    <div>
                        <img className="w-[89px] h-[20px]" src="https://salt.tikicdn.com/ts/upload/d7/56/04/b93b8c666e13f49971483596ef14800f.png" alt="" />
                    </div>
                    <div className="flex">
                        <p>Tác giả:&nbsp;</p>
                        <p className="text-sky-700">{author}</p>
                    </div>
                </div>
                <h1 className="text-xl whitespace-break-spaces break-words font-medium">{name}</h1>
                <div>
                    <div className="flex">
                        <div className="items-center flex">
                            <div className="font-semibold mr-1">5.0</div>
                            <div className="flex">
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
                            <div className="w-[1px] h-3 mx-2 bg-neutral-500"></div>
                        </div>
                        <div className="text-neutral-500">Đã bán 5000+</div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex gap-2 font-semibold items-center">
                    <div className="text-2xl">
                        73.100
                        <sup>đ</sup>
                    </div>
                    <div className="bg-neutral-200 text-[12px] px-1 h-5 rounded-lg justify-center">-32%</div>
                </div>
            </div>
        </div>
      </>
    );
}
  
export default BookInfoLarge;
  