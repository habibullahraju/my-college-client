import React from 'react';
import err from  '../../assets/err.png'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='bg-[#E6E6E6] lg:h-screen lg:flex justify-center items-center gap-36'>
            <div className='md:ml-20 text-center mb-20'>
                <h1 className='text-9xl text-center font-bold mb-6'>Oooops</h1>
                <h2 className='text-4xl mb-10'>There's <span className='font-semibold'>NOTHING</span> here...</h2>
                <Link to={'/'} className='btn btn-accent '>back to home</Link>
            </div>
            <div className='text-center'>
                <img className='w-2/3  mx-auto' src={err} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;