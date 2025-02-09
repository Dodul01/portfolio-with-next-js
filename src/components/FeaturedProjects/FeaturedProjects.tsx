import Image from "next/image";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Project One",
      description:
        "This is a brief overview of project one. It's innovative and engaging.",
      image:
        "https://cdn.dribbble.com/userupload/15924017/file/original-f8fd7075b98bbca408f28ca0ad7b2ce7.png?resize=1024x768&vertical=center",
    },
    {
      title: "Project Two",
      description:
        "This is a brief overview of project two. It's modern and responsive.",
      image:
        "https://cdn.dribbble.com/userupload/9819817/file/original-da0f1592042d80f67687207deb50024c.jpg?resize=1024x768&vertical=center",
    },
    {
      title: "Project Three",
      description:
        "This is a brief overview of project three. It stands out with unique features.",
      image:
        "https://cdn.dribbble.com/userupload/13551434/file/original-8e87467f2d04d630dd655e8f94a2a13b.png?resize=1024x768&vertical=center",
    },
  ];

  return (
    <section className="relative py-16">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-[#021035] bg-opacity-30 z-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 z-20">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#021035] bg-opacity-50 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
            >
              <div className="relative h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
