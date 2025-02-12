import { FileSpreadsheet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogsPage = () => {
  const blogs = [
    {
      id: "01",
      title: "Understanding the MERN Stack: A Beginner's Guide",
      description:
        "Dive into the basics of MongoDB, Express, React, and Node.js to learn how to build full-stack applications from scratch.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Alice Johnson",
      email: "alice.johnson@example.com",
      postDate: "2023-01-15",
    },
    {
      id: "02",
      title: "Building RESTful APIs with Express and Node.js",
      description:
        "Learn how to create scalable and secure RESTful APIs using Express and Node.js to power your MERN applications.",
      image:
        "https://www.ovhcloud.com/sites/default/files/styles/large_screens_1x/public/2022-05/whatis_rest_api.png",
      author: "Bob Smith",
      email: "bob.smith@example.com",
      postDate: "2023-02-10",
    },
    {
      id: "03",
      title: "Mastering React: Best Practices for Modern Web Apps",
      description:
        "Explore advanced techniques in React development, including component patterns, hooks, and state management for building robust applications.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Carol Williams",
      email: "carol.williams@example.com",
      postDate: "2023-03-05",
    },
    {
      id: "04",
      title: "Optimizing MongoDB for High-Performance Applications",
      description:
        "A deep dive into MongoDB, covering indexing, performance tuning, and effective data modeling strategies for large-scale apps.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbq8laVlsGPg5PILx-OD_3cVlXsZbpxFYjAQ&s",
      author: "David Brown",
      email: "david.brown@example.com",
      postDate: "2023-03-25",
    },
    {
      id: "05",
      title: "Modern Web Development with Node.js",
      description:
        "Understand the power of Node.js for server-side development, focusing on asynchronous programming and real-time application capabilities.",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Eva Green",
      email: "eva.green@example.com",
      postDate: "2023-04-10",
    },
    {
      id: "06",
      title: "Integrating GraphQL with the MERN Stack",
      description:
        "Discover how to combine GraphQL with your MERN stack applications to optimize data fetching and improve client-server communication.",
      image:
        "https://miro.medium.com/v2/resize:fit:4268/1*bv0i371l04u2tGzDWtvDtQ.png",
      author: "Frank Moore",
      email: "frank.moore@example.com",
      postDate: "2023-04-20",
    },
    {
      id: "07",
      title: "Deploying MERN Applications to the Cloud",
      description:
        "Step-by-step guide on deploying your MERN stack projects to popular cloud platforms like Heroku and AWS for production readiness.",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Grace Lee",
      email: "grace.lee@example.com",
      postDate: "2023-05-05",
    },
    {
      id: "08",
      title: "Enhancing User Experience in Modern Web Apps",
      description:
        "Explore innovative techniques and best practices for creating intuitive and engaging user interfaces in web development.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQFWQergz71NmA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1693311672949?e=2147483647&v=beta&t=anOsNMsQIVqLsLHM3t1t4tvDrRrggCgSFDtKjHK1vYw",
      author: "Henry Adams",
      email: "henry.adams@example.com",
      postDate: "2023-05-20",
    },
    {
      id: "09",
      title: "State Management in React: Context API vs. Redux",
      description:
        "An in-depth comparison of the Context API and Redux for managing state in large-scale React applications, with practical examples.",
      image:
        "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Isabella Clark",
      email: "isabella.clark@example.com",
      postDate: "2023-06-01",
    },
    {
      id: "10",
      title: "Securing Your MERN Stack Applications",
      description:
        "Learn essential security practices for your MERN stack apps, including authentication, authorization, and protection against common web vulnerabilities.",
      image:
        "https://www.capitalnumbers.com/blog/wp-content/uploads/2025/01/MERN-Stack-Security-Best-Practices-to-Keep-Hackers-at-Bay.png",
      author: "Jack Wilson",
      email: "jack.wilson@example.com",
      postDate: "2023-06-15",
    },
  ];

  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-t from-transparent to-[#021035] bg-opacity-30 -z-10"></div>

      <header className="my-20">
        <h1 className="text-4xl text-center">
          Expending My Knowledge & Yours
          <br /> One Blog at a Time
        </h1>
      </header>

      <main className="m-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blogs, idx) => (
            <div
              key={idx}
              className="bg-[#021035] bg-opacity-50 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
            >
              <div className="relative h-56">
                <Image
                  src={blogs.image}
                  alt={blogs.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {blogs.title}
                </h3>
                <p className="text-white">{blogs.description}</p>
                <div className="flex items-center justify-start gap-4 mt-3">
                  <Link href={`/blogs/${blogs.id}`}>
                    <button className="cursor-pointer rounded-lg font-semibold overflow-hidden relative z-100 border border-white group px-8 py-2">
                      <span className="flex items-center text-sm gap-2 relative z-10 text-white group-hover:text-black duration-500">
                        <FileSpreadsheet /> Read More
                      </span>
                      <span className="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                      <span className="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogsPage;
