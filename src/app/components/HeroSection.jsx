
export default function HeroSection() {
  return (
    <div
      className="p-5 bg-gradient-to-r from-blue-500 to-indigo-600
       text-white min-h-[90vh] flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold leading-tight mb-4">
          Empowering Future Education
        </h2>
        <p className="lato-text text-xl mb-8 opacity-90">
          A centralized platform to enhance transparency, access to information,
          and communication for students, teachers, and administrators.
        </p>
        <div className="space-x-4">
          <button className="bg-white cursor-pointer text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out border-2 border-white">
            Join Now
          </button>
          <button className="bg-transparent  cursor-pointer text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold border-2 border-white transition duration-300 ease-in-out">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
