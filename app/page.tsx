import { navigatio_details, sections_detail } from "./place-holder";

import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";

export default function Home() {
  return (
    <>
      <header className='bg-pink-500 text-white text-center py-8'>
        <h1 className='text-5xl shadow- font-bold'>
          Gender Equality Laws and Programs
        </h1>
        <p className='text-lg mt-2'>
          Promoting equality and protecting women and children
        </p>
      </header>

      <nav className='bg-gray-100 py-4'>
        <ul className='flex justify-center space-x-8  font-semibold'>
          {navigatio_details.map((details: any) => (
            <li>
              <Link
                href={details.link}
                className='hover:opacity-50 bg-[#FDB0C0] p-3 rounded text-white'
              >
                {details.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <section id='home' className='py-16 bg-gray-50'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl font-bold text-pink-500 underline'>
            Welcome to Gender Equality Laws and Programs
          </h2>
          <p className='mt-4 text-gray-700'>
            This website highlights important laws, national programs, and civil
            society organizations promoting gender equality and addressing
            violence against women and children (VAWC). Navigate through the
            sections to learn more.
          </p>
        </div>
      </section>

      {sections_detail.map((section) => (
        <section id={section.id} className='py-16 bg-gray-50' key={section.id}>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl font-bold text-pink-500 underline mb-8 text-center'>
              {section.title}
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {section.details.map((data) =>
                section.id === "laws" ? (
                  <a
                    key={data.label}
                    href={data.link}
                    className='block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200 hover:border-pink-500'
                  >
                    <h3 className='text-lg font-semibold text-blue-600 hover:text-pink-500 transition-colors'>
                      {data.label}
                    </h3>
                    <p className='mt-2 text-sm text-gray-600'>
                      Learn more about {data.label}.
                    </p>
                  </a>
                ) : (
                  <Dialog.Root key={data.label}>
                    <Dialog.Trigger asChild>
                      <button className='block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200 hover:border-pink-500'>
                        <h3 className='text-lg font-semibold text-blue-600 hover:text-pink-500 transition-colors'>
                          {data.label}
                        </h3>
                        <p className='mt-2 text-sm text-gray-600'>
                          Learn more about {data.label}.
                        </p>
                      </button>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-50 z-10' />
                      <Dialog.Content className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-20 max-w-md w-full'>
                        <Dialog.Title className='text-xl font-bold text-pink-500'>
                          {data.label}
                        </Dialog.Title>
                        <Dialog.Description className='mt-2 text-gray-700'>
                          {data.description ||
                            "More details about this topic will appear here."}
                        </Dialog.Description>
                        {data.keyPoints && (
                          <Dialog.Description className='mt-2 text-gray-700'>
                            <ul className='list-disc pl-6'>
                              {data.keyPoints.map((point, index) => (
                                <li key={index} className='mt-1'>
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </Dialog.Description>
                        )}

                        <Dialog.Close asChild>
                          <button
                            className='absolute top-2 right-2 bg-pink-500 text-white rounded-full p-2 hover:bg-pink-600'
                            aria-label='Close'
                          >
                            &times;
                          </button>
                        </Dialog.Close>
                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>
                )
              )}
            </div>
          </div>
        </section>
      ))}

      <footer className='bg-[#FDB0C0] text-white text-center py-4'>
        <p>
          &copy; 2024 Gender Equality and VAWC Awareness. All rights reserved.
        </p>
      </footer>
    </>
  );
}
