import React from "react";
import Link from "next/link";
import { ra7688Content } from "./place_holder";

const RA7688Page = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-purple-100 to-indigo-200 p-5 text-center'>
      <div className='bg-white/90 border-2 border-indigo-500 rounded-lg shadow-lg max-w-lg h-[90vh] p-8 animate-fadeIn overflow-y-scroll'>
        <h1 className='text-4xl font-bold text-indigo-600 mb-6 drop-shadow-md'>
          SOCIAL REFORM AND POVERTY ALLEVIATION ACT (RA 7688)
        </h1>
        <p className='text-lg text-gray-600 leading-relaxed mb-6'>
          The Social Reform and Poverty Alleviation Act of 1994 (RA 7688) aims
          to address poverty through comprehensive programs targeting
          marginalized sectors. Below is a summary of its objectives, key
          provisions, and penalties.
        </p>

        {ra7688Content.map((section, index) => (
          <div
            key={index}
            className='mt-8 p-6 bg-indigo-50 border border-indigo-300 rounded-lg shadow-md'
          >
            <h2 className='text-2xl font-semibold text-indigo-500 mb-4'>
              {section.title}
            </h2>
            <ul className='list-disc pl-6 space-y-4'>
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <strong className='font-semibold text-blue-600'>
                    {item.key}
                  </strong>
                  : <span className='text-gray-700'>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <Link
          href='/'
          passHref
          className='block mt-6 bg-indigo-300 text-white px-6 py-3 rounded-md font-bold shadow-md transition transform hover:bg-indigo-500 hover:scale-105'
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default RA7688Page;
