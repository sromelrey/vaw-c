import Link from "next/link";

export default function PartyListLawPage() {
  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-purple-100 to-pink-200 p-5 text-center'>
      <div className='bg-white/90 border-2 border-purple-500 rounded-lg shadow-lg max-w-lg p-8 animate-fadeIn'>
        {/* Title */}
        <h1 className='text-4xl font-bold text-purple-600 mb-6 drop-shadow-md'>
          Party-List Law and VAW-C
        </h1>
        <p className='text-lg text-gray-600 leading-relaxed mb-6'>
          The Party-List Law ensures representation for marginalized groups,
          including women and children, enabling them to advocate for
          protections against violence and abuse.
        </p>

        {/* Case Scenario Section */}
        <div className='mt-8 p-6 bg-purple-50 border border-purple-300 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold text-purple-500 mb-4'>
            Case Scenario
          </h2>
          <p className='text-base text-gray-700 leading-relaxed'>
            A women's advocacy group utilized their position as a party-list
            representative to push for legislation strengthening protections for
            women against domestic violence. This led to increased public
            awareness and better enforcement of laws addressing VAW-C.
          </p>
        </div>

        {/* Call-to-Action Section */}
        <div className='mt-8 p-6 bg-pink-100 border border-purple-500 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold text-purple-600 mb-4'>
            Take Action
          </h2>
          <p className='text-base text-gray-700 leading-relaxed'>
            Learn how the Party-List Law empowers marginalized groups to fight
            against violence. Explore resources and join organizations that
            champion the rights of women and children.
          </p>
          <Link
            href='https://pcw.gov.ph/vawc/'
            passHref
            className='block mt-4 bg-purple-500 text-white px-6 py-3 rounded-md font-bold shadow-md transition transform hover:bg-purple-600 hover:scale-105'
          >
            Learn More
          </Link>
        </div>

        {/* Back Link */}
        <Link
          href='/'
          passHref
          className='block mt-6 bg-purple-300 text-white px-6 py-3 rounded-md font-bold shadow-md transition transform hover:bg-purple-500 hover:scale-105'
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}
