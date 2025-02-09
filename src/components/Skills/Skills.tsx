import JSLogo from "../../assets/JavaScript-logo.png";
import TSLogo from "../../assets/typescript.webp";
import ReactLogo from "../../assets/react.png";
import NodeLogo from "../../assets/node.webp";
import ExpressLogo from "../../assets/express-js.png";
import MongoDBLogo from "../../assets/mongodb-icon-1.svg";
import MongooseLogo from "../../assets/mongoose.png";
import TailwindLogo from "../../assets/tailwind.png";
import GitLogo from "../../assets/git.png";
import GitHubLogo from "../../assets/github.png";
import PostmanLogo from "../../assets/postman.png";
import Image from "next/image";

const Skills = () => {
  const skillArr = [
    { name: "Javascript", icon: JSLogo },
    { name: "Typescript", icon: TSLogo },
    { name: "React JS", icon: ReactLogo },
    { name: "Tailwind CSS", icon: TailwindLogo },
    { name: "Node JS", icon: NodeLogo },
    { name: "Express JS", icon: ExpressLogo },
    { name: "MongoDB", icon: MongoDBLogo },
    { name: "Mongoose", icon: MongooseLogo },
    { name: "Git", icon: GitLogo },
    { name: "GitHub", icon: GitHubLogo },
    { name: "Postman", icon: PostmanLogo },
  ];

  return (
    <section className="bg-[#021035] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white pb-12">
          My Skills
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skillArr.map(({ name, icon }) => (
            <div
              key={name}
              className="bg-white bg-opacity-5 backdrop-blur-md rounded-lg p-6 flex flex-col items-center justify-center transform hover:scale-105 transition duration-300 shadow-md"
            >
              <div className="w-20 h-20 relative mb-4">
                <Image
                  src={icon}
                  alt={name}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h3 className="text-lg font-medium text-white">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
