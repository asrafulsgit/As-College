import Image from 'next/image';

const students = [
  {
    name: "Alex Johnson",
    classLevel: "10th Grade",
    avatar: "https://avatar.iran.liara.run/public/boy?username=StudentOne",
    rank: 1,
    gpa: 4.0,
    strengths: ["Math", "Science"],
  },
  {
    name: "Maria Garcia",
    classLevel: "12th Grade",
    avatar: "https://avatar.iran.liara.run/public/girl?username=StudentTwo",
    rank: 2,
    gpa: 3.95,
    strengths: ["Biology", "English"],
  },
  {
    name: "Ben Davis",
    classLevel: "9th Grade",
    avatar: "https://avatar.iran.liara.run/public/boy?username=StudentThree",
    rank: 3,
    gpa: 3.9,
    strengths: ["Physics", "Chemistry"],
  },
  {
    name: "Sophia Lee",
    classLevel: "11th Grade",
    avatar: "https://avatar.iran.liara.run/public/girl?username=StudentFour",
    rank: 4,
    gpa: 3.88,
    strengths: ["Math", "History"],
  },
];

export default function HighestRankStudents() {
  return (
    <section
      className="max-w-[1350px] mx-auto py-10 px-5 md:px-15 "
    >
      <div className="">
        <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Highest Rank Students
        </h2>
        <p className="mt-2 text-gray-600 text-base max-w-110 mx-auto">
          Celebrating the academic excellence of our top students.
        </p>
      </div>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        lg:grid-cols-4 gap-5">
          {students.map((student, index) => (
           <div
  key={index}
  className="bg-white rounded-2xl border border-gray-200  
  hover:shadow-lg transition p-5 md:p-3  lg:p-5 flex flex-col justify-between"
>
  {/* Avatar and Name */}
  <div className="flex items-center gap-4 mb-4">
    <div className="w-18 h-18 relative rounded-full overflow-hidden border-2 border-blue-500">
      <Image
        src={student.avatar}
        alt={student.name}
        fill
        className="object-cover"
        sizes="70px"
      />
    </div>
    <div>
      <h3 className="text-lg font-bold text-gray-800">{student.name}</h3>
      <p className="text-sm text-gray-500">Class: {student.classLevel}</p>
    </div>
  </div>

  {/* Stats */}
  <div className="bg-gray-50 rounded-lg mb-4 text-sm text-gray-700 space-y-1">
    <div className="flex justify-between">
      <span className="font-medium">GPA</span>
      <span className="text-gray-900">{student.gpa}</span>
    </div>
    <div className="flex justify-between">
      <span className="font-medium">Strengths</span>
      <span>{student.strengths.join(", ")}</span>
    </div>
    <div className="flex justify-between">
      <span className="font-medium">Rank</span>
      <span className="text-indigo-600 font-semibold">#{student.rank}</span>
    </div>
  </div>

  {/* Button */}
  <div className="text-center mt-auto">
    <button className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-md font-medium transition">
      View Profile
    </button>
  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
}
