
import React, { useEffect, useState, useRef } from 'react';
import Review from './Review';


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const CustomerReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>

            <div>
                <h1 className='text-4xl text-center my-20'>Here, What Others Have to Say</h1>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                <div className='grid sm:grid-cols-2 lg:grid-cols-3 lg:mx-24 gap-12 '>
                    {
                        reviews.map(review => <SwiperSlide>
                            <Review review={review} key={review._id}></Review>
                        </SwiperSlide>)
                    }
                </div>


            </Swiper>





        </div>
    );
};

export default CustomerReview;
