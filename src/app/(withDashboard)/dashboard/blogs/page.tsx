/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiCall } from "@/utils/apiCall";
import { authOptions } from "@/utils/authOptions";
import { EditIcon, TrashIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import Image from "next/image";

const Blogs = async () => {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  if (!userEmail) {
    return <p className="p-6">You must be logged in to see blogs.</p>;
  }
  const allBlogs = await apiCall("api/blogs", "GET");
  const userBlogs = allBlogs.filter((blog: any) => blog.email === userEmail);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Blogs</h1>
      {userBlogs.length === 0 ? (
        <div className="p-8 text-center text-[#0B2E82] rounded-lg bg-white shadow-lg">
          <p className="text-xl font-semibold">No blogs found</p>
          <p className="text-gray-600 mt-2">
            Create your first blog post to get started
          </p>
        </div>
      ) : (
        <div className="rounded-xl overflow-hidden shadow-xl border border-[#021035]/10">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead className="bg-[#021035] text-white">
                <tr>
                  <th className="p-4 text-left rounded-tl-xl">Image</th>
                  <th className="p-4 text-left">Title</th>
                  <th className="p-4 text-left">Description</th>
                  <th className="p-4 text-left rounded-tr-xl">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#021035]/10 ">
                {userBlogs.map((blog: any) => (
                  <tr
                    key={blog._id}
                    className="hover:bg-[#0B2E82]/05 transition-colors duration-200"
                  >
                    <td className="p-4">
                      <div className="w-16 h-16 overflow-hidden rounded-lg border-2 border-[#021035]/10">
                        <Image
                          src={blog.image || "/placeholder.jpg"}
                          alt={blog.title}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="p-4 font-semibold text-white">
                      {blog.title}
                    </td>
                    <td className="p-4 text-gray-600 max-w-[300px] line-clamp-2">
                      {blog.description}
                    </td>
                    <td className="p-4">
                      <div className="flex gap-3">
                        <button
                          className="px-4 py-2 rounded-lg bg-[#0B2E82] text-white 
                             hover:bg-[#021035] transition-colors duration-200
                             flex items-center gap-2"
                        >
                          <EditIcon size={16} />
                          <span>Edit</span>
                        </button>
                        <button
                          className="px-4 py-2 rounded-lg bg-red-500 text-white 
                             hover:bg-red-600 transition-colors duration-200
                             flex items-center gap-2"
                        >
                          <TrashIcon size={16} />
                          <span>Delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
