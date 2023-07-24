import React, { useEffect, useState } from 'react';
import ThreeCollegeCard from '../Home/ThreeCollegeSection/ThreeCollegeCard';

const Colleges = () => {
    const [colleges, setAllColleges] = useState([]);

    useEffect(() => {
        fetch('https://my-college-server.vercel.app/all-colleges')
        .then(res => res.json())
        .then(data => setAllColleges(data))
    },[])
    console.log(colleges);
    return (
        <div className='mb-20'>
            <h3 className='text-center mb-8 text-4xl font-semibold'>Our Colleges</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-10 mx-4 md:mx-8'>
                {
                    colleges.map(college =><ThreeCollegeCard 
                        key={college._id}
                        college={college}
                        ></ThreeCollegeCard>)
                }
            </div>
        </div>
    );
};

export default Colleges;