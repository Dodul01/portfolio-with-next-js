/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { apiCall } from "@/utils/apiCall";
import { useState, FormEvent } from "react";
import { toast } from "sonner";

const CreateBlog = ({ session }: any) => {
  // Form state for the blog fields.
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const blogData = {
      title,
      description,
      image,
      author: session?.user?.name,
      email: session?.user?.email,
    };

    apiCall("api/create-blog", "POST", blogData)
      .then((data) => {
        if (data.insertedId) {
          toast.success("Blog has been created");
        }
        console.log("Created blog:", data);
      })
      .catch((error) => {
        toast.error("Opps Something went wrong!");
        console.error("Error creating blog:", error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="rounded-lg shadow-lg w-full max-w-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Create Blog Post
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block font-semibold mb-2">
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Blog title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-transparent border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Description */}
          <div>
            <label htmlFor="description" className="block font-semibold mb-2">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Write your blog content..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-transparent border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={6}
              required
            ></textarea>
          </div>
          {/* Image URL */}
          <div>
            <label htmlFor="image" className="block font-semibold mb-2">
              Image URL
            </label>
            <input
              id="image"
              type="url"
              placeholder="https://example.com/image.jpg"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full bg-transparent border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-md bg-gradient-to-r from-[#021035] to-[#0B2E82] hover:from-[#0B2E82] hover:to-[#021035] transition-colors duration-500 ease-in-out"
          >
            Create Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
