import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow, } from 'swiper';
SwiperCore.use([Autoplay]);
SwiperCore.use([EffectCoverflow]);
import 'swiper/css/effect-coverflow';
import 'swiper/css';
import img1 from "../assets/clients/1.jpg"
import img2 from "../assets/clients/2.jpg"
import img3 from "../assets/clients/3.jpg"
import img4 from "../assets/clients/4.jpg"
import img5 from "../assets/clients/5.jpg"
import img6 from "../assets/clients/6.jpg"
import img7 from "../assets/clients/7.jpg"
import img8 from "../assets/clients/8.jpg"
import img9 from "../assets/clients/9.jpg"
import img10 from "../assets/clients/10.jpg"
const CustomerReview = () => {
    const swiperParams = {
        // Swiper options here
        autoplay: {
            delay: 3000, // Delay between slides in milliseconds
            disableOnInteraction: false, // Continue autoplay after user interaction
        },
    };
    return (
        <div className='mx-10 my-8'>
             <h1 className='font-semibold text-2xl text-transparent text-center bg-clip-text bg-gradient-to-r from-slate-600 via-zinc-600 to-[#1c0c0b]'>What Our Customers Are Saying</h1>
            <p className=''>Discover the glowing feedback from our valued clients who have experienced the joy and satisfaction of shopping with us. Read their testimonials below to get a glimpse of the exceptional service and quality products that we provide.</p>
        <div className='mb-20 mt-6 h-80'>
            <Swiper 
            breakpoints={{
                // when window width is >= 768px (large devices)
                768: {
                  slidesPerView: 3
                },
                // when window width is < 768px (mobile devices)
                0: {
                  slidesPerView: 1
                }
              }}
             loop={true}
             {...swiperParams}
             effect="coverflow"
            >
                <SwiperSlide >                    
                    <div className='bg-gradient-to-r from-gray-600 via-black via-5% to-stone-600 h-full py-6 flex flex-col items-center justify-center rounded'>
                        
                        <p className='italic mx-auto w-[90%] text-white'> " Absolutely fantastic! The toys I ordered for my kids exceeded my expectations. They were of excellent quality, safe, and provided endless hours of entertainment. Thank you for bringing smiles to our home!"</p>
                        <div className="flex flex-col items-center py-4">
                            <img src={img1} alt="" className='rounded-full h-16 w-16' />
                            <p className='font-medium text-white'>Steve Jobs</p>    
                            <p className='font-light text-white'>Businessman</p>    
                        </div>
                    </div>
                </SwiperSlide>   
                <SwiperSlide >                    
                    <div className='bg-gradient-to-r from-gray-600 via-black via-5% to-stone-600 h-full py-6 flex flex-col items-center justify-center rounded'>
                        <p className='italic mx-auto w-[90%] text-white'> "I have been searching for unique and educational toys for my preschool classroom, and this website is a treasure trove! The toys are not only fun but also aid in the development of essential skills. Highly recommended for teachers and parents alike!"</p>
                        <div className='flex flex-col items-center py-4'>
                            <img src={img3} alt="" className='rounded-full h-16 w-16' />
                            <p className='font-medium text-white'>Rizvy Hasnath</p>    
                            <p className='font-light text-white'>Entrepreneur</p>    
                        </div>
                    </div>
                </SwiperSlide>   
                <SwiperSlide >                    
                    <div className='bg-gradient-to-r from-gray-600 via-black via-5% to-stone-600 h-full py-6 flex flex-col items-center justify-center rounded'>
                        
                        <p className='italic mx-auto w-[90%] text-white'> "I can't say enough good things about this toy website. Their customer service is exceptional, and their wide range of toys cater to all ages and interests. My grandchildren love everything I've purchased from here. Highly recommended!"</p>
                        <div className="flex flex-col items-center py-4">
                            <img src={img2} alt="" className='rounded-full h-16 w-16' />
                            <p className='font-medium text-white'>Mark Stefan</p>    
                            <p className='font-light text-white'>Teacher</p>    
                        </div>
                    </div>
                </SwiperSlide>   
                <SwiperSlide >                    
                    <div className='bg-gradient-to-r from-gray-600 via-black via-5% to-stone-600 h-full py-6 flex flex-col items-center justify-center rounded'>
                        
                        <p className='italic mx-auto w-[90%] text-white'> "I appreciate the attention to detail and care put into packaging my order. The toys were wrapped securely and arrived in pristine condition. It's evident that this website values customer satisfaction. Kudos to the team!""</p>
                        <div className="flex flex-col items-center py-4">
                            <img src={img3} alt="" className='rounded-full h-16 w-16' />
                            <p className='font-medium text-white'>Maquis Arnold</p>    
                            <p className='font-light text-white'>Personal Trainer</p>    
                        </div>
                    </div>
                </SwiperSlide>   
                <SwiperSlide >                    
                    <div className='bg-gradient-to-r from-gray-600 via-black via-5% to-stone-600 h-full py-6 flex flex-col items-center justify-center rounded'>
                        
                        <p className='italic mx-auto w-[90%] text-white'> "I recently purchased a toy for my nephew's birthday, and he couldn't have been happier! The toy was a huge hit, and the quality exceeded my expectations. It's safe to say that I'll be a returning customer!"</p>
                        <div className="flex flex-col items-center py-4">
                            <img src={img4} alt="" className='rounded-full h-16 w-16' />
                            <p className='font-medium text-white'>Ryan Descatte</p>    
                            <p className='font-light text-white'>Entrepreneur</p>    
                        </div>
                    </div>
                </SwiperSlide>   
                <SwiperSlide >                    
                    <div className='bg-gradient-to-r from-gray-600 via-black via-5% to-stone-600 h-full py-6 flex flex-col items-center justify-center rounded'>
                        <p className='italic mx-auto w-[90%] text-white'> "This toy website has become my go-to for all my gift shopping needs. The extensive range of toys ensures that I can find something perfect for every child. Plus, the website is user-friendly, making the entire shopping experience a breeze." </p>
                        <div className="flex flex-col items-center py-4">
                            <img src={img5} alt="" className='rounded-full h-16 w-16' />
                            <p className='font-medium text-white'>Abdullah Hasan</p>    
                            <p className='font-light text-white'>Teacher</p>    
                        </div>
                    </div>
                </SwiperSlide>   
                <SwiperSlide >                    
                    <div className='bg-gradient-to-r from-gray-600 via-black via-5% to-stone-600 h-full py-6 flex flex-col items-center justify-center rounded'>
                        
                        <p className='italic mx-auto w-[90%] text-white'> "I am thoroughly impressed with the customer service I received. I had a query regarding a toy, and their support team promptly assisted me, providing helpful and friendly guidance. It's refreshing to encounter such outstanding customer support!"</p>
                        <div className="flex flex-col items-center py-4">
                            <img src={img6} alt="" className='rounded-full h-16 w-16' />
                            <p className='font-medium text-white'>Steve Spencer</p>    
                            <p className='font-light text-white'>Police</p>    
                        </div>
                    </div>
                </SwiperSlide>   
                <SwiperSlide >                    
                    <div className='bg-gradient-to-r from-gray-600 via-black via-5% to-stone-600 h-full py-6 flex flex-col items-center justify-center rounded'>
                        <p className='italic mx-auto w-[90%] text-white'> "The toys I purchased from this website have become an integral part of our family playtime. They are not only entertaining but also encourage creativity and imagination. I highly recommend these toys for quality family bonding"</p>
                        <div className="flex flex-col items-center py-4">
                            <img src={img7} alt="" className='rounded-full h-16 w-16' />
                            <p className='font-medium text-white'>Jhon Monru</p>    
                            <p className='font-light text-white'>Lifestyle Specialist</p>    
                        </div>
                    </div>
                </SwiperSlide>   
                <SwiperSlide >                    
                    <div className='bg-gradient-to-r from-gray-600 via-black via-5% to-stone-600 h-full py-6 flex flex-col items-center justify-center rounded'>
                        
                        <p className='italic mx-auto w-[90%] text-white'> "I ordered a toy for my son's birthday, and it arrived right on time! The shipping was incredibly fast, ensuring that the gift made it in time for the celebration. Thank you for your efficiency and reliability!"</p>
                        <div className="flex flex-col items-center py-4">
                            <img src={img8} alt="" className='rounded-full h-16 w-16' />
                            <p className='font-medium text-white'>Mark Henry</p>    
                            <p className='font-light text-white'>Wrestler</p>    
                        </div>
                    </div>
                </SwiperSlide>   
                <SwiperSlide >                    
                    <div className='bg-gradient-to-r from-gray-600 via-black via-5% to-stone-600 h-full py-6 flex flex-col items-center justify-center rounded'>
                        
                        <p className='italic mx-auto w-[90%] text-white'> "The selection of eco-friendly toys on this website is impressive. As a parent passionate about sustainability, I appreciate their commitment to offering environmentally conscious options. It feels good to support a company that values the planet"</p>
                        <div className="flex flex-col items-center py-4">
                            <img src={img9} alt="" className='rounded-full h-16 w-16' />
                            <p className='font-medium text-white'>Samuel Jenn</p>    
                            <p className='font-light text-white'>Businessman</p>    
                        </div>
                    </div>
                </SwiperSlide>   
                <SwiperSlide >                    
                    <div className='bg-gradient-to-r from-gray-600 via-black via-5% to-stone-600 h-full py-6 flex flex-col items-center justify-center rounded'>
                        
                        <p className='italic mx-auto w-[90%] text-white'> "I stumbled upon this toy website while looking for educational resources for homeschooling. It's been a game-changer! The educational toys and learning materials have made our lessons engaging and interactive. Thank you for helping make learning fun!"</p>
                        <div className="flex flex-col items-center py-4">
                            <img src={img10} alt="" className='rounded-full h-16 w-16' />
                            <p className='font-medium text-white'>Hanry Pew</p>    
                            <p className='font-light text-white'>Content Creator</p>    
                        </div>
                    </div>
                </SwiperSlide>   
            </Swiper>
        </div>
            
        </div>
    );
};

export default CustomerReview;