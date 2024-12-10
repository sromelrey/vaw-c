import React from "react";
import { womenInNationBuildingContent } from "./place_holder";
import Link from "next/link";

const WomenInNationBuildingPage = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-rose-100 to-pink-200 p-5 text-center'>
      <div className='bg-white/90 border-2 border-pink-500 rounded-lg shadow-lg max-w-lg h-[90vh] p-8 animate-fadeIn overflow-y-scroll'>
        <h1 className='text-4xl font-bold text-pink-600 mb-6 drop-shadow-md'>
          WOMEN IN NATION BUILDING LAW (RA 7192)
        </h1>

        {womenInNationBuildingContent.map((section: any, index: any) => (
          <div
            key={index}
            className='mt-8 p-6 bg-pink-50 border border-pink-300 rounded-lg shadow-md'
          >
            <h2 className='text-2xl font-semibold text-pink-500 mb-4'>
              {section.title}
            </h2>
            {section.content.map((item: any, idx: any) => (
              <div key={idx} className='mb-6'>
                {item.text && (
                  <p className='text-lg text-gray-600 leading-relaxed'>
                    {item.text}
                  </p>
                )}
                {item.subTitle && (
                  <h3 className='text-xl font-semibold text-pink-400 mb-4'>
                    {item.subTitle}
                  </h3>
                )}
                {item.scenarioDescription && (
                  <p className='text-md text-gray-600 leading-relaxed'>
                    {item.scenarioDescription}
                  </p>
                )}
                {item.steps && (
                  <ul className='list-disc pl-6 space-y-4'>
                    {item.steps.map((step: any, stepIdx: any) => (
                      <li key={stepIdx} className='text-gray-700'>
                        {step}
                      </li>
                    ))}
                  </ul>
                )}
                {item.helplines && (
                  <ul className='list-disc pl-6 space-y-4'>
                    {item.helplines.map((helpline: any, hlIdx: any) => (
                      <li key={hlIdx} className='text-gray-700'>
                        <strong className='font-semibold'>
                          {helpline.name}:
                        </strong>
                        <span className='text-gray-600'>
                          {helpline.hotline}
                        </span>
                        {helpline.website && (
                          <a
                            href={helpline.website}
                            target='_blank'
                            className='text-blue-600'
                          >
                            {helpline.website}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
                {item.resources && (
                  <ul className='list-disc pl-6 space-y-4'>
                    {item.resources.map((resource: any, resIdx: any) => (
                      <li key={resIdx} className='text-gray-700'>
                        {resource}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
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
};

export default WomenInNationBuildingPage;
