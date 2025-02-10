import { Github, Globe } from "lucide-react";
import Image from "next/image";

const ProjectsPage = () => {
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
    <div>
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-t from-transparent to-[#021035] bg-opacity-30 -z-10"></div>

      <header className="my-11">
        <h1 className="text-4xl text-center">
          Drive into creativity <br /> with my projects collection
        </h1>
      </header>

      <main className="m-6">
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
                <div className="flex items-center justify-start gap-4 mt-3">
                  <button className="cursor-pointer rounded-lg font-semibold overflow-hidden relative z-100 border border-white group px-8 py-2">
                    <span className="flex items-center gap-2 relative z-10 text-white group-hover:text-black duration-500">
                      <Globe /> Visit Website
                    </span>
                    <span className="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                    <span className="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                  </button>
                  <button className="cursor-pointer rounded-lg font-semibold overflow-hidden relative z-100 border border-white group px-8 py-2">
                    <span className="flex items-center gap-2 relative z-10 text-white group-hover:text-black duration-500">
                      <Github /> Github
                    </span>
                    <span className="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                    <span className="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
