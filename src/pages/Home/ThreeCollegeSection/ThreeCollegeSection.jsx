import React, { useEffect, useState } from 'react';
import ThreeCollegeCard from './ThreeCollegeCard';

const ThreeCollegeSection = () => {
    const [threeColleges, setThreeColleges] = useState([]);
    useEffect(() => {
        fetch('https://my-college-server.vercel.app/threeColleges')
        .then(res => res.json())
        .then(data => setThreeColleges(data))
    },[])
    console.log(threeColleges);
    return (
        <div className='my-20'>
            <h3 className='text-center mb-8 text-4xl font-semibold'>Most Our Popular Colleges</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-4 md:mx-8'>
                {
                    threeColleges.map(college =><ThreeCollegeCard 
                        key={college._id}
                        college={college}
                        ></ThreeCollegeCard>)
                }
            </div>
        </div>
    );
};

export default ThreeCollegeSection;