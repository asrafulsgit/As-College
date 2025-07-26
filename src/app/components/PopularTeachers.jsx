import Image from 'next/image';


const teachers = [
  {
    name: "John Doe",
    subject: "Mathematics",
    role: "Head Teacher",
    classes: "9, 10",
    image: "https://i.ibb.co/Y4wmdrj5/636353007248947232-BTS-ELEM-MALE-TEACHERS-1-removebg-preview.png",
    rating: 4.9,
    reviews: 120,
    bio: "Simplifying complex math problems with real-life logic. John engages students with practical examples and problem-solving techniques that build confidence and critical thinking skills.",
  },
  {
    name: "Emily White",
    subject: "English Literature",
    role: "Head Teacher",
    classes: "9, 10, 11",
    image: "https://i.ibb.co/RGCJvmfG/118631867-beautiful-female-teacher-in-formal-wear-looking-at-camera-in-classroom-removebg-preview.png",
    rating: 4.9,
    reviews: 150,
    bio: "Helping students express ideas through literature. Emily encourages critical analysis, creative writing, and open discussions to foster a love for storytelling and expression.",
  },
  
  {
    name: "David Lee",
    subject: "Chemistry",
    role: "Teacher",
    classes: "11, 12",
    image: "https://i.ibb.co/1J8t6nHG/portrait-of-nerd-man-gesturing-and-explaining-something-isolated-on-D1-RG42-removebg-preview.png",
    rating: 4.7,
    reviews: 80,
    bio: "Passionate about bonding concepts with clarity. David uses hands-on activities and analogies to make chemical reactions and equations come alive in the classroom.",
  },
  {
    name: "Sophia Green",
    subject: "History",
    role: "Senior Teacher",
    classes: "9, 10",
    image: "https://i.ibb.co/Psm6y2n3/images-11-removebg-preview.png",
    rating: 4.8,
    reviews: 102,
    bio: "Sophia believes that history is best learned through stories, not just dates. Her lessons are known for vivid storytelling, critical thinking discussions, and connecting historical events to modern-day issues.",
  },
  {
    name: "Olivia Johnson",
    subject: "Geography",
    role: "Teacher",
    classes: "9, 10",
    image: "https://i.ibb.co/Dftj23Rh/COLOURBOX36217835-removebg-preview.png",
    rating: 4.7,
    reviews: 88,
    bio: "Olivia brings maps to life by combining classroom instruction with virtual field trips and local geography projects. Her goal is to develop global citizens who understand the physical and human processes shaping the planet.",
  },{
    name: "Jane Smith",
    subject: "Physics",
    role: "Assistant Teacher",
    classes: "11, 12",
    image: "https://i.ibb.co/27Ktm9Bm/COLOURBOX36217911-removebg-preview.png",
    rating: 4.8,
    reviews: 95,
    bio: "Making physics exciting with experiments and visuals. Jane focuses on concept-based teaching and uses animations and lab simulations to make theories easier to understand.",
  },
];

export default function PopularTeachers() {
  return (
    <section
      className="max-w-[1350px] mx-auto py-10 px-5 md:px-15 "
    >
      <div className="">
        <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Popular Teachers
        </h2>
        <p className="mt-2 text-gray-600 text-base max-w-110 mx-auto">
          Meet the most inspiring and dedicated teachers who are shaping the future of education.
        </p>
      </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5">
          {teachers?.map((teacher, index) => (
            <div
              key={index}
              className="bg-white rounded-xl  overflow-hidden border
               border-neutral-200 hover:shadow-md transition duration-300"
            >
              <div className="relative w-full h-48">
              <Image
                src={teacher?.image}
                alt={teacher?.name}
                fill
                className="object-contain object-center rounded-t-xl"
                sizes="(max-width: 768px) 100vw, 25vw"
                priority={false}  
              />
                <div className="absolute top-2 right-2 
                bg-blue-600 bg-opacity-80  text-white
                text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                  {teacher?.role}
                </div>
              </div>


              <div className="p-3 space-y-2 bg-indigo-50/70">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[18px] font-semibold text-gray-900">
                    {teacher.name}
                  </h3>
                  <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-600 font-medium rounded-full">
                    {teacher.subject}
                  </span>
                </div>
                
                <div>
                    <p className="text-gray-500 text-sm line-clamp-3">
                    {teacher.bio}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 text-yellow-400 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.565-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.92 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                    {teacher.rating} ({teacher.reviews})
                  </div>

                  <div className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    <p className="text-gray-600 text-sm mb-1">
                      Class : {teacher.classes}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="text-center mt-10">
      <button
        className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full text-lg transition duration-300"
      >
        See all teachers
      </button>
    </div>
    </section>
  );
}
