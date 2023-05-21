import React from 'react';

const ToyGuides = () => {
    return (
        <div className='my-10 mx-10'>
            <h1 className='font-semibold my-4 text-2xl text-transparent text-center bg-clip-text bg-gradient-to-r from-slate-600 via-gray-600 to-[#1c0c0b]'>Toy Guides and Recommendations</h1>
            <p>Discover the Perfect Toys with Our Featured Toy Guides and Recommendations! Finding the right toy can be an exciting and fulfilling experience for both kids and parents alike. That's why we've curated a collection of expert Toy Guides and Recommendations to help you navigate through the world of playtime fun. Whether you're searching for educational toys, age-appropriate options, or special gifts for upcoming occasions, we've got you covered.</p>
            <div>
                <p className='mt-4 font-medium text-lg'>We Provide,</p>
                <ul className='list-disc mx-auto w-[90%]'>
                    <span className='font-medium'>STEM Toys for Future Innovators</span>
                    <li className='mx-4'>Foster a love for science, technology, engineering, and math with our selection of STEM toys. These hands-on and interactive toys empower children to explore the wonders of the STEM world while having fun and developing critical thinking skills.</li>
                    <span className='font-medium'>Imaginative Play Must-Haves</span>
                    <li className='mx-4'>Ignite the power of imagination with our collection of imaginative play toys. From pretend play sets to costumes and puppets, these toys encourage storytelling, creativity, and social development, allowing children to bring their wildest dreams to life.</li>
                    <span className='font-medium'>Outdoor Adventure Essentials</span>
                    <li className='mx-4'>Embrace the great outdoors with our range of outdoor adventure toys. From bicycles and scooters to sports equipment and camping gear, these toys promote physical activity, exploration, and an appreciation for nature. Let the adventures begin!</li>
                    <span className='font-medium'>Educational Delights for Early Learners</span>
                    <li className='mx-4'>Give your little ones a head start in learning with our educational toys for early learners. Designed to enhance cognitive skills, language development, and fine motor abilities, these toys make learning engaging and enjoyable for toddlers and preschoolers.</li>
                </ul>
                <div className='text-center mt-2 mb-4'>
                    <label htmlFor="my-modal-4" className="btn btn-sm bg-orange-500 border-0 hover:bg-amber-600">Explore More</label>
                    <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                    <label htmlFor="my-modal-4" className="modal cursor-pointer">
                        <label className="modal-box relative" htmlFor="">
                            <h3 className="text-lg font-bold">Our Guideline queue is full right now!</h3>
                            <p className="py-4">We appriciate your interest. But for now we're fully packed. Please check later.</p>
                        </label>
                    </label>
                </div>

            </div>
        </div>
    );
};

export default ToyGuides;