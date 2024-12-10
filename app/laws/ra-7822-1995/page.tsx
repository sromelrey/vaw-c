import React from "react";
import Link from "next/link";
import { data } from "./place_holder"; // Assuming the data is exported from a file called "place_holder.js"

export default function Page() {
  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-rose-100 to-pink-200 p-5 text-center'>
      <div className='bg-white/90 border-2 border-pink-500 rounded-lg shadow-lg max-w-lg h-[90vh] p-8 animate-fadeIn overflow-y-scroll'>
        <h1 className='text-4xl font-bold text-pink-600 mb-6 drop-shadow-md'>
          Anti-Sexual Harassment Law (RA 7877)
        </h1>
        <p className='text-lg text-gray-600 leading-relaxed mb-6'>
          The Anti-Sexual Harassment Law (Republic Act No. 7877) of 1995 aims to
          protect individuals from sexual harassment in workplaces, educational
          institutions, and other environments. It ensures the safety and
          well-being of individuals, especially women, against gender-based
          violence and exploitation.
        </p>

        {data.map((section, index) => (
          <div
            key={index}
            className='mt-8 p-6 bg-pink-50 border border-pink-300 rounded-lg shadow-md'
          >
            <h2 className='text-2xl font-semibold text-pink-500 mb-4'>
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
          className='block mt-6 bg-pink-300 text-white px-6 py-3 rounded-md font-bold shadow-md transition transform hover:bg-pink-500 hover:scale-105'
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}
