import React, { useState } from 'react';

function Search(props) {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        props.onSearch(searchTerm);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <>
            <div className="flex rounded-lg border-solid border-2 items-center flex-auto">
                <img
                    className="w-5 h-5 ml-4"
                    src="https://salt.tikicdn.com/ts/upload/33/d0/37/6fef2e788f00a16dc7d5a1dfc5d0e97a.png"
                    alt=""
                />
                <input 
                    className="px-2 border-0 flex-auto focus:outline-none"
                    type="text" 
                    placeholder="Freeship đến 30k"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <button 
                    className="relative text-sky-700 hover:bg-sky-100 h-9 w-24 p-1 rounded-r-lg items-center justify-center before:block before:absolute before:h-6 before:border-l-2 before:left-0 before:top-2"
                    onClick={handleSearch}
                >
                    Tìm kiếm
                </button>
            </div>
        </>
    )
}
  
export default Search