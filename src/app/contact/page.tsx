"use client"
import illustration from "@/assets/contact-page-background.png";
import Image from "next/image";

const ContactPage = () => {
  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Log all values as a message in the console
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-t from-transparent to-[#021035] bg-opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="mb-8 text-gray-400">
            I’d love to hear from you! Drop me a message and I’ll get back to
            you as soon as possible.
          </p>
          <form onSubmit={handleForm} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="flex-1 border bg-transparent rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#021035]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="flex-1 border bg-transparent rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#021035]"
              />
            </div>
            <textarea
              name="message"
              placeholder="Type Your Message..."
              className="w-full border bg-transparent rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#021035] resize-none h-32"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#0B2E82] to-[#021035] bg-opacity-30 font-semibold rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex-1 relative w-full h-96 hidden md:block">
          <Image
            src={illustration}
            alt="Contact Illustration"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
