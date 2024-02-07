import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import BookSmall from '../bookSmall';
import Filter from '../filter';

function Home(props) {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(null);
    const [star, setStar] = useState('');

    useEffect(() => {
        const fetchData = async () => {
        try {
            // const response = await fetch('https://h5ltj4-8080.csb.app/books');
            const response = await fetch('https://giang05072003.github.io/books/books.json');
            const data = await response.json();
    
            setBooks(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
        };
    
        fetchData();
    }, []);

    useEffect(() => {
    }, [category]);

    const handleCategory = (category) => {
        setCategory(category);
    };

    useEffect(() => {
        console.log(price);
    }, [price]);

    const handlePrice = (Price) => {
        setPrice(Price);
    };

    useEffect(() => {
    }, [star]);

    const handleStar = (star) => {
        setStar(star);
    };

    const filteredBooks = books.filter((book) => {
        const searchTerm = props.searchData.toLowerCase();
        const matchesCategory =
          category !== ''
            ? book.categories.name === category
            : true;
        const matchesSearch =
          props.searchData !== ''
            ? book.name.toLowerCase().includes(searchTerm)
            : true;
        const isNotHidden = book.isHidden === undefined || book.isHidden === false;
      
        const isRatingGreater =
            star !== ''
            ? parseFloat(book.rating_average) >= parseFloat(star)
            : true;

        return matchesCategory && matchesSearch && isNotHidden && isRatingGreater;
    });
    
    const sortedBooks = [...filteredBooks].sort((a, b) => {
        if (price === 0) {
          return a.current_seller.price - b.current_seller.price;
        } else if (price === 1) {
          return b.current_seller.price - a.current_seller.price;
        } else {
          return 0;
        }
    });

    return (
        <>
            <div className='flex flex-1 bg-[#efefef]'>
                {loading ? (
                    <div className='flex flex-1 items-center justify-center my-52'>
                        <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="" />
                    </div>
                ) : (
                    filteredBooks.length === 0 ? (
                        <div className='flex flex-1 my-5 mx-40 gap-4'>
                            <Filter onSelectCategory={handleCategory} onSelectStar={handleStar} onSelectPrice={handlePrice} />
                            <div className='flex flex-1 items-center justify-center my-52 font-bold text-lg'>
                                <p>Không tìm thấy sản phẩm!</p>
                            </div>
                        </div>
                    ) : (
                        <div className='flex flex-1 my-5 mx-40 gap-4'>
                            <Filter onSelectCategory={handleCategory}  onSelectStar={handleStar} onSelectPrice={handlePrice} />
                            <div className='grid flex-1 grid-cols-5 gap-2'>
                                {sortedBooks.map((book, index) => (
                                    <Link className='flex' key={index} to={`/book/${book.id}`}>
                                        <BookSmall jsonData={JSON.stringify(book)} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )
                )}
            </div>
        </>
    )
}
  
export default Home