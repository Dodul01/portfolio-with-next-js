import Image from "next/image";

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;
  const projects = [
    {
      id: "01",
      title: "Project One",
      description:
        "This is a brief overview of project one. It's innovative and engaging.",
      image:
        "https://cdn.dribbble.com/userupload/15924017/file/original-f8fd7075b98bbca408f28ca0ad7b2ce7.png?resize=1024x768&vertical=center",
    },
    {
      id: "02",
      title: "Project Two",
      description:
        "This is a brief overview of project two. It's modern and responsive.",
      image:
        "https://cdn.dribbble.com/userupload/9819817/file/original-da0f1592042d80f67687207deb50024c.jpg?resize=1024x768&vertical=center",
    },
    {
      id: "03",
      title: "Project Three",
      description:
        "This is a brief overview of project three. It stands out with unique features.",
      image:
        "https://cdn.dribbble.com/userupload/13551434/file/original-8e87467f2d04d630dd655e8f94a2a13b.png?resize=1024x768&vertical=center",
    },
    {
      id: "04",
      title: "Project One",
      description:
        "This is a brief overview of project one. It's innovative and engaging.",
      image:
        "https://cdn.dribbble.com/userupload/15924017/file/original-f8fd7075b98bbca408f28ca0ad7b2ce7.png?resize=1024x768&vertical=center",
    },
    {
      id: "05",
      title: "Project Two",
      description:
        "This is a brief overview of project two. It's modern and responsive.",
      image:
        "https://cdn.dribbble.com/userupload/9819817/file/original-da0f1592042d80f67687207deb50024c.jpg?resize=1024x768&vertical=center",
    },
    {
      id: "06",
      title: "Project Three",
      description:
        "This is a brief overview of project three. It stands out with unique features.",
      image:
        "https://cdn.dribbble.com/userupload/13551434/file/original-8e87467f2d04d630dd655e8f94a2a13b.png?resize=1024x768&vertical=center",
    },
    {
      id: "07",
      title: "Project One",
      description:
        "This is a brief overview of project one. It's innovative and engaging.",
      image:
        "https://cdn.dribbble.com/userupload/15924017/file/original-f8fd7075b98bbca408f28ca0ad7b2ce7.png?resize=1024x768&vertical=center",
    },
    {
      id: "08",
      title: "Project Two",
      description:
        "This is a brief overview of project two. It's modern and responsive.",
      image:
        "https://cdn.dribbble.com/userupload/9819817/file/original-da0f1592042d80f67687207deb50024c.jpg?resize=1024x768&vertical=center",
    },
    {
      id: "09",
      title: "Project Three",
      description:
        "This is a brief overview of project three. It stands out with unique features.",
      image:
        "https://cdn.dribbble.com/userupload/13551434/file/original-8e87467f2d04d630dd655e8f94a2a13b.png?resize=1024x768&vertical=center",
    },
    {
      id: "10",
      title: "Project One",
      description:
        "This is a brief overview of project one. It's innovative and engaging.",
      image:
        "https://cdn.dribbble.com/userupload/15924017/file/original-f8fd7075b98bbca408f28ca0ad7b2ce7.png?resize=1024x768&vertical=center",
    },
    {
      id: "11",
      title: "Project Two",
      description:
        "This is a brief overview of project two. It's modern and responsive.",
      image:
        "https://cdn.dribbble.com/userupload/9819817/file/original-da0f1592042d80f67687207deb50024c.jpg?resize=1024x768&vertical=center",
    },
    {
      id: "12",
      title: "Project Three",
      description:
        "This is a brief overview of project three. It stands out with unique features.",
      image:
        "https://cdn.dribbble.com/userupload/13551434/file/original-8e87467f2d04d630dd655e8f94a2a13b.png?resize=1024x768&vertical=center",
    },
  ];
  const project = projects.find((pj) => pj.id === projectId);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-wrap my-12 gap-12 mx-4">
        <Image
          className="flex-1 w-full h-full object-cover bg-center"
          src={project?.image || "https://placehold.co/600x400"}
          height={300}
          width={300}
          alt={project?.title || "Project Title go here."}
        />
        <div>
          <h1 className="text-3xl">{project?.title}</h1>
          <h1 className="text-lg">{project?.description}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
