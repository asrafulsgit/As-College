import Image from "next/image";

const featuredClasses = [
  {
    id: 1,
    title: "Advanced Algebra",
    subject: "Mathematics",
    classLevel: "11th Grade",
    teacher: "Jane Doe",
    description: "Deep dive into algebraic concepts, preparing students for higher education.",
    image: "https://i.ibb.co/B2k447rj/children-school-achievements-477.webp",  
  },
  {
    id: 2,
    title: "Quantum Physics Basics",
    subject: "Physics",
    classLevel: "12th Grade",
    teacher: "John Smith",
    description: "An introductory course to the fascinating world of quantum mechanics.",
    image: "https://i.ibb.co/hRJ67SvY/extratimeinm.jpg", 
  },
  {
    id: 3,
    title: "Classic Literature Analysis",
    subject: "English",
    classLevel: "10th Grade",
    teacher: "David Green",
    description: "Explore timeless literary works and develop critical analysis skills.",
    image: "https://i.ibb.co/3YCzMGHC/young-group-gen-z-students-600nw-2507584013.webp", 
  },
];

export default function FeaturedClasses() {
  return (
    <section  className="max-w-[1350px] mx-auto py-10 px-5 md:px-15 ">
      <div className="">

        <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Featured Classes
        </h2>
        <p className="mt-2 text-gray-600 text-base max-w-110 mx-auto">
          Explore our most popular and highly-rated classes to accelerate your learning.
        </p>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredClasses.map((classItem) => (
            <div
  key={classItem.id}
  className="bg-white rounded-2xl border border-gray-200 hover:shadow-md overflow-hidden transition-all duration-300 flex flex-col"
>
  <div className="relative w-full h-52">
    <Image
      src={classItem.image}
      alt={classItem.title}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 33vw"
    />
    <span className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
      {classItem.classLevel}
    </span>
  </div>

  <div className="p-4 flex flex-col justify-between flex-grow">

    <p className="text-sm text-blue-600 font-medium uppercase">{classItem.subject}</p>

    <h3 className="text-xl font-semibold text-gray-900 mt-1 mb-2">{classItem.title}</h3>

             <p className="text-gray-500 text-sm line-clamp-3">
                    {classItem.description}
                  </p>


    <div className="mt-4 flex items-center justify-between">
      <span className="text-sm text-gray-600 font-medium">👨‍🏫 {classItem.teacher}</span>
      <button className="text-sm cursor-pointer text-blue-600 hover:text-blue-800 font-medium">
        View Details →
      </button>
    </div>
  </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          
          <button
        className="bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full text-lg transition duration-300"
      >
        View All Classes
      </button>
        </div>
        
      </div>
    </section>
  );
}
