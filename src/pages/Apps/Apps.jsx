import React, { Suspense, useEffect, useState } from 'react';
import Appp from '../Appp/Appp';

const Apps = ({data}) => {
    const [allApps,setAllApps]=useState([]);

    return (
        <div className="">

            <div className='mb-5'>
            <h1 className='text-center font-bold text-[40px] pt-10' >Trending Apps</h1>
            <p className='text-center text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <Suspense fallback={<span>loading......</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-16 p-7'>
                    {
                    data.map((singleApp)=><Appp key={singleApp.id} singleApp={singleApp}></Appp>)
                }
                </div>
            </Suspense>

            <div className='justify-center items-center text-center mx-auto p-4'>
                <a href="/allApps"><button className="btn btn-active  bg-purple-500 text-white">Show All</button></a>  
            </div>
           
        </div>
    );
};

export default Apps;