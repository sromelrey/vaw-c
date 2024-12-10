import Link from "next/link";

export default function LocalGovernmentCodePage() {
  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-pink-100 to-pink-200 p-5 text-center'>
      <div className='bg-white/90 border-2 border-pink-500 rounded-lg shadow-lg max-w-lg p-8 animate-fadeIn'>
        {/* Title */}
        <h1 className='text-4xl font-bold text-pink-600 mb-6 drop-shadow-md'>
          Local Government Code of 1991
        </h1>
        <p className='text-lg text-gray-600 leading-relaxed mb-6'>
          The Local Government Code of 1991 empowers local government units
          (LGUs) to promote development, autonomy, and good governance.
        </p>

        {/* Case Scenario Section */}
        <div className='mt-8 p-6 bg-pink-50 border border-pink-300 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold text-pink-500 mb-4'>
            Case Scenario
          </h2>
          <p className='text-base text-gray-700 leading-relaxed'>
            A small municipality faced challenges in managing its resources
            effectively. By utilizing the Local Government Code of 1991, the LGU
            was able to implement community-led development projects, resulting
            in better infrastructure and improved services for residents.
          </p>
        </div>

        {/* Call-to-Action Section */}
        <div className='mt-8 p-6 bg-pinkf-100 border border-pink-500 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold text-pink-600 mb-4'>
            Take Action
          </h2>
          <p className='text-base text-gray-700 leading-relaxed'>
            Discover how the Local Government Code can help empower your
            community. Learn more about LGU projects, join local initiatives, or
            engage with government programs.
          </p>
          <Link
            href='https://www.lga.gov.ph/'
            passHref
            className='block mt-4 bg-pink-500 text-white px-6 py-3 rounded-md font-bold shadow-md transition transform hover:bg-pink-600 hover:scale-105'
          >
            Learn More
          </Link>
        </div>

        {/* Back Link */}
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
