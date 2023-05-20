import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCube, EffectFade } from 'swiper';
SwiperCore.use([Autoplay]);
SwiperCore.use([EffectCube]);
import 'swiper/css/effect-cube';
import 'swiper/css';
import banner1 from "../../assets/banner/banner1.jpg"
import banner2 from "../../assets/banner/banner2.jpg"
import banner3 from "../../assets/banner/banner3.jpg"
import banner4 from "../../assets/banner/banner4.jpg"
import banner5 from "../../assets/banner/banner5.jpg"
import banner6 from "../../assets/banner/banner6.jpg"
import banner7 from "../../assets/banner/banner7.jpg"
import banner8 from "../../assets/banner/banner8.jpg"
import banner9 from "../../assets/banner/banner9.jpg"
import { Link } from 'react-router-dom';
import Gallery from './Gallery';
import ShopByCategory from './ShopByCategory';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ToyGuides from '../../Pages/ToyGuides';
import CustomerReview from '../../Pages/CustomerReview';

const Homepage = () => {
    const {user} = useContext(AuthContext);
    const swiperParams = {
        // Swiper options here
        autoplay: {
            delay: 3000, // Delay between slides in milliseconds
            disableOnInteraction: false, // Continue autoplay after user interaction
        },
    };
    return (
        <>
            <div className='lg:my-8 my-4'>
                {/* homepage banner section */}
                <div className='w-[90%] mx-auto'>
                    <Swiper
                        loop={true}
                        slidesPerView={1}
                        {...swiperParams}
                        effect="cube"

                    >
                        <SwiperSlide>
                            <div className='relative w-full h-full'>
                                <img src={banner1} alt="" className='w-full h-56 md:h-72 lg:h-96' />
                                <div className="absolute text-center pt-8 top-0 w-full text-white h-full bg-gradient-to-r from-[#160505] to-[rgba(21,21,21,0)]">
                                    <h2 className='lg:text-6xl text-2xl font-semibold'>Hygenic toys for newborn baby</h2>
                                    <p className='lg:mt-8 my-4 px-4'>Clean Fun for Everyone! Discover our hygienic toys for a safe and germ-free playtime experience.</p>
                                    <Link to={"/all-toys"} className='btn hover:bg-orange-400 btn-ghost'>See All Toys</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className='relative w-full h-full'>
                                <img src={banner2} alt="" className='w-full h-56 md:h-72 lg:h-96' />
                                <div className="absolute text-center pt-8 top-0 w-full text-white h-full bg-gradient-to-r from-[#160505] to-[rgba(21,21,21,0)]">
                                    <h2 className='lg:text-6xl text-2xl font-semibold'>Tech Toys for Tomorrow</h2>
                                    <p className='lg:mt-8 my-4 px-4'>Ignite curiosity and innovation with our cutting-edge tech toys and gadgets.</p>
                                    <Link to={"/all-toys"} className='btn hover:bg-orange-400 btn-ghost'>See All Toys</Link>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='relative w-full h-full'>
                                <img src={banner3} alt="" className='w-full h-56 md:h-72 lg:h-96' />
                                <div className="absolute text-center pt-8 top-0 w-full text-white h-full bg-gradient-to-r from-[#160505] to-[rgba(21,21,21,0)]">
                                    <h2 className='lg:text-6xl text-2xl font-semibold'>Magical Playtime</h2>
                                    <p className='lg:mt-8 my-4 px-4'>Enter a world of enchantment with our imaginative and whimsical toy selection.</p>
                                    <Link to={"/all-toys"} className='btn hover:bg-orange-400 btn-ghost'>See All Toys</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='relative w-full h-full'>
                                <img src={banner4} alt="" className='w-full h-56 md:h-72 lg:h-96' />
                                <div className="absolute text-center pt-8 top-0 w-full text-white h-full bg-gradient-to-l from-[#5e0909] to-[rgba(21,21,21,0)]">
                                    <h2 className='lg:text-6xl text-2xl font-semibold'>Collect and Connect</h2>
                                    <p className='lg:mt-8 my-4 px-4'>Dive into the world of collectible toys and foster a sense of community and connection.</p>
                                    <Link to={"/all-toys"} className='btn hover:bg-orange-400 btn-ghost'>See All Toys</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='relative w-full h-full'>
                                <img src={banner5} alt="" className='w-full h-56 md:h-72 lg:h-96' />
                                <div className="absolute text-center pt-8 top-0 w-full text-white h-full bg-gradient-to-r from-[#160505] to-[rgba(21,21,21,0)]">
                                    <h2 className='lg:text-6xl text-2xl font-semibold'>Outdoor Excitement</h2>
                                    <p className='lg:mt-8 my-4 px-4'>Fuel outdoor exploration and active play with our thrilling range of toys.</p>
                                    <Link to={"/all-toys"} className='btn hover:bg-orange-400 btn-ghost'>See All Toys</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='relative w-full h-full'>
                                <img src={banner6} alt="" className='w-full h-56 md:h-72 lg:h-96' />
                                <div className="absolute text-center pt-8 top-0 w-full text-white h-full bg-gradient-to-r from-[#160505] to-[rgba(21,21,21,0)]">
                                    <h2 className='lg:text-6xl text-2xl font-semibold'>Imagination Unleashed</h2>
                                    <p className='lg:mt-8 my-4 px-4'> Inspire endless play and creativity with our captivating toy collection.</p>
                                    <Link to={"/all-toys"} className='btn hover:bg-orange-400 btn-ghost'>See All Toys</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='relative w-full h-full'>
                                <img src={banner7} alt="" className='w-full h-56 md:h-72 lg:h-96' />
                                <div className="absolute text-center pt-8 top-0 w-full text-white h-full bg-gradient-to-l from-[#030101] to-[rgba(21,21,21,0)]">
                                    <h2 className='lg:text-6xl text-2xl font-semibold'>Cuddly Companions</h2>
                                    <p className='lg:mt-8 my-4 px-4'>Find the perfect plush toys that bring comfort and companionship to children of all ages.</p>
                                    <Link to={"/all-toys"} className='btn hover:bg-orange-400 btn-ghost'>See All Toys</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='relative w-full h-full'>
                                <img src={banner8} alt="" className='w-full h-56 md:h-72 lg:h-96' />
                                <div className="absolute text-center pt-8 top-0 w-full text-white h-full bg-gradient-to-r from-[#160505] to-[rgba(21,21,21,0)]">
                                    <h2 className='lg:text-6xl text-2xl font-semibold'>Safe and Sustainable</h2>
                                    <p className='lg:mt-8 my-4 px-4'>Explore our eco-friendly toy collection for a greener and healthier playtime experience.</p>
                                    <Link to={"/all-toys"} className='btn hover:bg-orange-400 btn-ghost'>See All Toys</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='relative w-full h-full'>
                                <img src={banner9} alt="" className='w-full h-56 md:h-72 lg:h-96' />
                                <div className="absolute text-center pt-8 top-0 w-full text-white h-full bg-gradient-to-r  from-[#0c0b0b] to-[rgba(21,21,21,0)]">
                                    <h2 className='lg:text-6xl text-2xl font-semibold'>Building Blocks of Fun</h2>
                                    <p className='lg:mt-8 my-4 px-4'>Unleash the builder within with our engaging and versatile construction toy sets.</p>
                                    <Link to={"/all-toys"} className='btn hover:bg-orange-400 btn-ghost'>See All Toys</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {/* Toy Gallery Section */}
            <Gallery></Gallery>
            <ShopByCategory user={user}></ShopByCategory>
            <ToyGuides></ToyGuides>
            <CustomerReview></CustomerReview>
        </>
    );
};

export default Homepage;