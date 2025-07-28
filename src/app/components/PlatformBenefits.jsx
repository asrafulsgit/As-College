"use client";

const platformBenefits = [
  {
    iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Transparent Results",
    description:
      "Access grades and performance data instantly. Full transparency for all academic achievements.",
  },
  {
    iconPath:
      "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
    title: "Physical Enrollment with Online Access",
    description:
      "Seamless integration of offline admissions with comprehensive online resources.",
  },
  {
    iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    title: "Digital Class Schedule",
    description:
      "View and manage your class timetable digitally. Stay organized with ease.",
  },
  {
    iconPath:
      "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253",
    title: "Book Archive",
    description:
      "Access a vast digital library of academic resources and textbooks anytime, anywhere.",
  },
];

{/* bg-gradient-to-br 
    from-blue-200 to-indigo-400 p-[1px] rounded-lg transition-all 
    duration-300 hover:shadow-md */}


const BenefitItem = ({ iconPath, title, description }) => (
  <div className="hover:bg-gradient-to-br from-blue-200 to-indigo-400 
  rounded-lg p-4 hover:shadow-sm transition-all duration-300  border border-blue-100/80
   ">
    
    <div className="flex gap-3 items-center">
      <div>
        <svg
        className="h-10 w-10 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
      </svg>
      </div>
      <h3 className="text-[18px] font-semibold text-gray-900">{title}</h3>
    </div>
    <div>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  </div>
);

export default function PlatformBenefits() {
  return (
    <section
      className="max-w-[1350px] mx-auto py-10 px-5 md:px-15"
    >
      <div className="">
        <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Platform Benefits
        </h2>
        <p className="mt-2 text-gray-600 text-base max-w-110 mx-auto">
           Discover the advantages of choosing our comprehensive college management system.
        </p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4">

          {platformBenefits.map((benefit, index) => (
            <BenefitItem key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
