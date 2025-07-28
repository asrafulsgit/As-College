import Image from 'next/image';





const testimonials = [
  {
    name: "Sarah Chen",
    role: "Parent of a 10th Grader",
    message:
      '"Our child\'s grades have significantly improved. The teachers are incredibly supportive and the online resources are a game-changer!"',
    image:
      "https://i.ibb.co/Y4GLvQz6/girl.png",
    alt: "Guardian Sarah Chen",
  },
  {
    name: "Michael Wong",
    role: "Guardian of a 9th Grader",
    message:
      'The transparent results system gives us peace of mind. We always know where our child stands academically.',
    image:
      "https://i.ibb.co/gMdPv5Wf/boy-2.png",
    alt: "Guardian Michael Wong",
  },
  {
    name: "Jessica Brown",
    role: "Parent of a 12th Grader",
    message:
      '"The digital class schedule and book archive are incredibly convenient. This platform truly supports modern learning."',
    image:
      "https://i.ibb.co/kgryPT7h/boy.png",
    alt: "Guardian Jessica Brown",
  },
];

export default function Testimonials () {
  return (
    <section
      className="max-w-[1350px] mx-auto py-10 px-5 md:px-15"
    >
      <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
         What Says Student Guardians
        </h2>
        <p className="mt-2 text-gray-600 text-base max-w-110 mx-auto">
           Hear from the parents and guardians who trust us with their children's
          education.
        </p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-neutral-200/30 hover:border-neutral-200/40 p-6 shadow-sm transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                                <Image
                src={testimonial.image}
                alt={testimonial.alt}
                width={48}
                height={48}
                className="rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

