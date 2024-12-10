import Link from "next/link";

export default function ConstitutionPage() {
  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-rose-100 to-pink-200 p-5 text-center'>
      <div className='bg-white/90 border-2 border-pink-500 rounded-lg shadow-lg max-w-lg h-[90vh] p-8 animate-fadeIn overflow-y-scroll'>
        {/* Title */}
        <h1 className='text-4xl font-bold text-pink-600 mb-6 drop-shadow-md'>
          The 1987 Constitution
        </h1>
        <p className='text-lg text-gray-600 leading-relaxed mb-6'>
          Article 13 Section 14 promotes gender equality by ensuring the rights
          of women in all aspects of society.
        </p>
        <div className='mt-8 p-6 bg-pink-50 border border-pink-300 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold text-pink-500 mb-4'>
            Objective
          </h2>
          <p className='text-base text-gray-700 leading-relaxed'>
            The primary objective of this provision is to ensure the protection
            and promotion of the rights and welfare of workers, particularly
            women, by mandating equality of opportunities and safeguarding them
            against exploitation.
          </p>
        </div>

        <div className='mt-8 p-6 bg-pink-50 border border-pink-300 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold text-pink-500 mb-4'>
            Key Provisions
          </h2>
          <ul className='list-disc pl-6 space-y-4'>
            <li>
              <strong className='font-semibold text-blue-600'>
                Promotion of Equal Opportunities
              </strong>
              :
              <span className='text-gray-700'>
                The law emphasizes the government's role in creating and
                maintaining an environment of equality for all workers,
                particularly addressing the need for equal opportunities for
                women in the workplace.
              </span>
            </li>
            <li>
              <strong className='font-semibold text-blue-600'>
                Protection from Exploitation
              </strong>
              :
              <span className='text-gray-700'>
                It explicitly mentions protecting working women by ensuring safe
                and healthful working conditions.
              </span>
            </li>
            <li>
              <strong className='font-semibold text-blue-600'>
                Special Protection for Women
              </strong>
              :
              <span className='text-gray-700'>
                The government is tasked with upholding the dignity of women by
                providing specific protections in the workplace, especially
                against abuse, discrimination, and exploitation.
              </span>
            </li>
          </ul>
        </div>
        <div className='mt-8 p-6 bg-pink-50 border border-pink-300 rounded-lg shadow-md'>
          <h2 className='text-3xl font-semibold text-pink-500 mb-4'>
            Penalties
          </h2>
          <h3 className='text-xl font-semibold text-pink-500 mb-4'>
            While the Constitution itself does not specify penalties under this
            section, implementing laws and labor-related statutes provide
            penalties for violations, such as
          </h3>
          <ul className='list-disc pl-6 space-y-4'>
            <li>
              <strong className='font-semibold text-blue-600'>
                The Labor Code of the Philippines:
              </strong>
              :
              <span className='text-gray-700'>
                Employers violating labor laws protecting women (e.g.,
                discrimination, unsafe working conditions) may face fines,
                imprisonment, or both, as prescribed by the Labor Code and
                related laws.
              </span>
            </li>
            <li>
              <strong className='font-semibold text-blue-600'>
                Anti-Sexual Harassment Act (RA 7877)
              </strong>
              :
              <span className='text-gray-700'>
                Harassment in the workplace can lead to imprisonment of up to
                six months or fines ranging from ₱10,000 to ₱20,000.
              </span>
            </li>
            <li>
              <strong className='font-semibold text-blue-600'>
                Special laws on women’s rights
              </strong>
              :
              <span className='text-gray-700'>
                Additional penalties may apply under laws such as the Magna
                Carta of Women (RA 9710) and Anti-Violence Against Women and
                Children Act (RA 9262).
              </span>
            </li>
          </ul>
        </div>

        <div className='mt-8 p-6 bg-pink-50 border border-pink-300 rounded-lg shadow-md'>
          <h2 className='text-3xl font-semibold text-pink-500 mb-4'>
            Why the law is important in protecting women and children?{" "}
          </h2>
          <p className='text-base text-gray-700 leading-relaxed'>
            The law, particularly Article XIII, Section 14 of the 1987
            Philippine Constitution, is essential in protecting women and
            children because it addresses historical inequalities, exploitation,
            and abuse faced by these vulnerable groups.
          </p>
        </div>

        {/* Case Scenario Section */}
        <div className='mt-8 p-6 bg-pink-50 border border-pink-300 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold text-pink-500 mb-4'>
            Case Scenario
          </h2>
          <h3 className='text-xl font-semibold text-pink-500 mb-4'>
            Maria’s Workplace Discrimination and Harassment Case
          </h3>
          <p className='text-base text-gray-700 leading-relaxed'>
            <strong className='font-semibold text-blue-600'>Description</strong>
            :
            <span className='text-gray-700'>
              Maria, a single mother working in a factory, was denied a
              promotion despite meeting all qualifications, with her employer
              explicitly stating that "women are less capable of leadership
              roles." Additionally, she experienced repeated sexual harassment
              from her supervisor, who made inappropriate comments and
              threatened to fire her if she reported him.
            </span>
          </p>
        </div>
        <div className='mt-8 p-6 bg-rose-100 border border-pink-500 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold text-pink-600 mb-4'>
            🌼 Call to Action 🌼
          </h2>
          <p className='text-base text-gray-700 leading-relaxed mb-6'>
            Steps to Raise Awareness of the Law in the Community:
          </p>
          <ul className='list-disc pl-6 space-y-4'>
            <li>
              <strong className='font-semibold text-blue-600'>
                Community Education Programs
              </strong>
              :
              <span className='text-gray-700'>
                Conduct seminars, workshops, and town hall meetings to educate
                community members about women’s and children’s rights under the
                law. Invite legal experts, social workers, and law enforcement
                representatives to explain key provisions.
              </span>
            </li>
            <li>
              <strong className='font-semibold text-blue-600'>
                Information Campaigns
              </strong>
              :
              <span className='text-gray-700'>
                Distribute flyers, posters, and brochures in public spaces
                (e.g., schools, barangay halls, and health centers) that outline
                the rights of women and children and the penalties for
                violations. Use social media to share infographics, videos, and
                real-life stories that emphasize the importance of these laws.
              </span>
            </li>
            <li>
              <strong className='font-semibold text-blue-600'>
                Engage Local Leaders and Influencers
              </strong>
              :
              <span className='text-gray-700'>
                Encourage barangay officials, religious leaders, and teachers to
                advocate for the protection of women and children in their
                respective communities.
              </span>
            </li>
            <li>
              <strong className='font-semibold text-blue-600'>
                School-Based Programs
              </strong>
              :
              <span className='text-gray-700'>
                Integrate discussions on gender equality and child protection
                laws into school curriculums. Organize activities like essay
                contests and role-playing exercises to promote understanding
                among young people.
              </span>
            </li>
            <li>
              <strong className='font-semibold text-blue-600'>
                Hotline Awareness
              </strong>
              :
              <span className='text-gray-700'>
                Promote helplines and resources by displaying them prominently
                in barangay offices, clinics, and schools. Use radio and
                community TV programs to share these helplines widely.
              </span>
            </li>
            <li>
              <strong className='font-semibold text-blue-600'>
                Collaborate with Civil Society Organizations
              </strong>
              :
              <span className='text-gray-700'>
                Partner with NGOs and advocacy groups to provide training,
                materials, and assistance in community-based initiatives.
              </span>
            </li>
            <li>
              <strong className='font-semibold text-blue-600'>
                Mobile Legal Clinics
              </strong>
              :
              <span className='text-gray-700'>
                Set up periodic mobile legal aid desks where residents can ask
                questions about their rights and report violations.
              </span>
            </li>
          </ul>

          <h3 className='text-xl font-semibold text-pink-500 mt-8 mb-4'>
            Helplines and Resources for Victims
          </h3>
          <ul className='list-disc pl-6 space-y-4'>
            <li>
              <strong className='font-semibold text-blue-600'>
                Philippine National Police (PNP) Women and Children Protection
                Desk
              </strong>
              : Hotline: 117 or contact your local police station.
            </li>
            <li>
              <strong className='font-semibold text-blue-600'>
                Department of Social Welfare and Development (DSWD)
              </strong>
              : Hotline: 8888 (for immediate reporting of abuse and other social
              welfare concerns).
            </li>
            <li>
              <strong className='font-semibold text-blue-600'>
                Commission on Human Rights (CHR)
              </strong>
              : Hotline: (02) 8294-8704, Email: hrv.cld@chr.gov.ph
            </li>
            <li>
              <strong className='font-semibold text-blue-600'>
                Gabriela Women’s Partylist
              </strong>
              : Hotline: (02) 514-4104
            </li>
            <li>
              <strong className='font-semibold text-blue-600'>
                ChildHelp Philippines
              </strong>
              : Child protection hotline: 163
            </li>
            <li>
              <strong className='font-semibold text-blue-600'>
                National Bureau of Investigation (NBI) Anti-Violence Against
                Women and Children Division
              </strong>
              : Hotline: (02) 8523-8231 to 38
            </li>
            <li>
              <strong className='font-semibold text-blue-600'>
                Philippine Commission on Women (PCW)
              </strong>
              : Website:{" "}
              <a
                href='https://www.pcw.gov.ph'
                className='text-blue-500 underline'
                target='_blank'
                rel='noopener noreferrer'
              >
                www.pcw.gov.ph
              </a>
            </li>
            <li>
              <strong className='font-semibold text-blue-600'>
                Local Government Units (LGUs)
              </strong>
              : Many barangays have Violence Against Women (VAW) desks to assist
              victims.
            </li>
          </ul>
          <p className='text-gray-700 mt-6'>
            By taking these steps and sharing these resources, communities can
            create a culture of awareness and advocacy for the protection of
            women and children.
          </p>
        </div>

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
