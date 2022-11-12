import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import photo from '../../assect/photoshop1.jpg'
// Import Swiper styles
import "swiper/css";
export default function CustomerReview() {
    return (
        <div className="">
            <h1 className="text-2xl font-bold my-10">Here, What Others Have to Say</h1>
            <div className=" lg:mx-24 lg:px-10 ">
                <Swiper watchSlidesProgress={true} slidesPerView={3}>

                    <div className='grid lg:grid-cols-2 grid-cols-1'>


                        <SwiperSlide>
                            <div className="bg-violet-500 p-5 m-5 rounded">
                                <div className="flex my-3">
                                    <img className="w-16 rounded-full" src={photo} alt='photo' />
                                    <div className="mx-auto">
                                        <h1 className="font-bold  text-white">Rafsan Hassen</h1>
                                        <span className="text-white">Student.Net.Dhile</span>
                                    </div>
                                </div>
                                <p className="text-white font-sans text-left px-3 text-justify">My Dear Honorable Fiverr Buyer. Thanks a Lot for Visiting My profile. I am SEO Professional and SMM Marketer. I am expert in Facebook marketing, YouTube Marketing, Photo editing, Video Editing and Content making. I've successfully completed My professional Diploma Degree in Digital marketing From Outsourcing Institute . I can understand the customers...</p>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-violet-500 p-5 m-5 rounded">
                                <div className="flex my-3">
                                    <img className="w-16 rounded-full" src={photo} alt='photo' />
                                    <div className="mx-auto">
                                        <h1 className="font-bold  text-white">Rafsan Hassen</h1>
                                        <span className="text-white">Student.Net.Dhile</span>
                                    </div>
                                </div>
                                <p className="text-white font-sans text-left px-3 text-justify">My Dear Honorable Fiverr Buyer. Thanks a Lot for Visiting My profile. I am SEO Professional and SMM Marketer. I am expert in Facebook marketing, YouTube Marketing, Photo editing, Video Editing and Content making. I've successfully completed My professional Diploma Degree in Digital marketing From Outsourcing Institute . I can understand the customers...</p>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-violet-500 p-5 m-5 rounded">
                                <div className="flex my-3">
                                    <img className="w-16 rounded-full" src={photo} alt='photo' />
                                    <div className="mx-auto">
                                        <h1 className="font-bold  text-white">Rafsan Hassen</h1>
                                        <span className="text-white">Student.Net.Dhile</span>
                                    </div>
                                </div>
                                <p className="text-white font-sans text-left px-3 text-justify">My Dear Honorable Fiverr Buyer. Thanks a Lot for Visiting My profile. I am SEO Professional and SMM Marketer. I am expert in Facebook marketing, YouTube Marketing, Photo editing, Video Editing and Content making. I've successfully completed My professional Diploma Degree in Digital marketing From Outsourcing Institute . I can understand the customers...</p>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-violet-500 p-5 m-5 rounded">
                                <div className="flex my-3">
                                    <img className="w-16 rounded-full" src={photo} alt='photo' />
                                    <div className="mx-auto">
                                        <h1 className="font-bold  text-white">Rafsan Hassen</h1>
                                        <span className="text-white">Student.Net.Dhile</span>
                                    </div>
                                </div>
                                <p className="text-white font-sans text-left px-3 text-justify">My Dear Honorable Fiverr Buyer. Thanks a Lot for Visiting My profile. I am SEO Professional and SMM Marketer. I am expert in Facebook marketing, YouTube Marketing, Photo editing, Video Editing and Content making. I've successfully completed My professional Diploma Degree in Digital marketing From Outsourcing Institute . I can understand the customers...</p>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-violet-500 p-5 m-5 rounded">
                                <div className="flex my-3">
                                    <img className="w-16 rounded-full" src={photo} alt='photo' />
                                    <div className="mx-auto">
                                        <h1 className="font-bold  text-white">Rafsan Hassen</h1>
                                        <span className="text-white">Student.Net.Dhile</span>
                                    </div>
                                </div>
                                <p className="text-white font-sans text-left px-3 text-justify">My Dear Honorable Fiverr Buyer. Thanks a Lot for Visiting My profile. I am SEO Professional and SMM Marketer. I am expert in Facebook marketing, YouTube Marketing, Photo editing, Video Editing and Content making. I've successfully completed My professional Diploma Degree in Digital marketing From Outsourcing Institute . I can understand the customers...</p>

                            </div>
                        </SwiperSlide>


                    </div>
                </Swiper>
            </div>
        </div>
    );
}
