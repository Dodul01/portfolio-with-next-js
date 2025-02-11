"use client";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full min-h-[700px] bg-gradient-to-t from-transparent to-[#021035] bg-opacity-30 -z-10"></div>

      <div className="max-w-md w-full bg-black bg-opacity-30 shadow-xl rounded-lg p-8 mx-4">
        <h1 className="text-3xl font-bold text-center mb-2">Welcome Back!</h1>
        <p className="text-center text-gray-600 mb-8">
          Please sign in with one of the following options
        </p>

        <div className="flex justify-center gap-6">
          <button
            onClick={() =>
              signIn("github", {
                callbackUrl: "http://localhost:3000/dashboard",
              })
            }
            className="group relative cursor-pointer outline-none border-none rounded-full flex flex-row items-center justify-center h-12 w-12 hover:!w-[100px] transition-all duration-[0.75s] before:content-[''] before:absolute before:w-full before:h-full before:inset-0 before:bg-[linear-gradient(130deg,#181717,#24292e)] before:ring-4 before:ring-offset-4 before:ring-[#24292e] before:rounded-full before:transition before:duration-300 before:ring-offset-[#fff] hover:before:scale-105 active:before:scale-95 text-white"
          >
            <svg
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-2 group-hover:left-1.5 group-active:left-[10px] duration-300 transition-[left] z-10 w-8 h-8 text-white"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
            </svg>
            <span className="absolute right-1.5 text-[15px] font-semibold [--w:calc(100%-48px)] w-[--w] max-w-[--w] overflow-hidden flex items-center justify-end -z-[1] group-hover:z-[9] pointer-events-none select-none opacity-0 group-hover:opacity-100 text-transparent group-hover:text-inherit group-active:right-2 transition-all duration-[2s] group-hover:duration-300 group-active:scale-[0.85]">
              Github
            </span>
          </button>

          <button className="group relative cursor-pointer outline-none border-none rounded-full flex flex-row items-center justify-center h-12 w-12 hover:!w-[100px] transition-all duration-[0.75s] before:content-[''] before:absolute before:w-full before:h-full before:inset-0 before:bg-[linear-gradient(130deg,#4285F4,#34A853,#FBBC05,#EA4335)] before:ring-4 before:ring-offset-4 before:ring-[#4285F4] before:rounded-full before:transition before:duration-300 before:ring-offset-[#fff] hover:before:scale-105 active:before:scale-95 text-white">
            <svg
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-2 group-hover:left-1.5 group-active:left-[10px] duration-300 transition-[left] z-10 w-8 h-8"
            >
              <path
                fill="#4285F4"
                d="M21.35 11.1h-9.18v2.97h5.24c-.23 1.25-.94 2.31-2.01 3.02v2.52h3.26c1.91-1.76 3.01-4.36 3.01-7.01 0-.47-.04-.93-.1-1.38z"
              />
              <path
                fill="#34A853"
                d="M12.17 22c2.73 0 5.03-.9 6.71-2.44l-3.26-2.52c-.91.61-2.08.97-3.45.97-2.65 0-4.9-1.79-5.71-4.2H3.56v2.63A9.94 9.94 0 0 0 12.17 22z"
              />
              <path
                fill="#FBBC05"
                d="M6.46 13.42a5.99 5.99 0 0 1 0-3.74V7.05H3.56a10 10 0 0 0 0 9.9l2.9-2.63z"
              />
              <path
                fill="#EA4335"
                d="M12.17 5.58c1.48 0 2.81.51 3.86 1.52l2.9-2.9A9.94 9.94 0 0 0 12.17 2 9.94 9.94 0 0 0 3.56 7.05l2.9 2.63c.81-2.41 3.06-4.2 5.71-4.2z"
              />
            </svg>
            <span className="absolute right-1.5 text-[15px] font-semibold [--w:calc(100%-48px)] w-[--w] max-w-[--w] overflow-hidden flex items-center justify-end -z-[1] group-hover:z-[9] pointer-events-none select-none opacity-0 group-hover:opacity-100 text-transparent group-hover:text-inherit group-active:right-2 transition-all duration-[2s] group-hover:duration-300 group-active:scale-[0.85]">
              Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// // import { loginUser } from "@/utils/actions/loginUser";
// import { signIn } from "next-auth/react";
// import Image from "next/image";
// import Link from "next/link";
// // import { useRouter } from "next/navigation";
// // import { useForm } from "react-hook-form";

// export type FormValues = {
//   email: string;
//   password: string;
// };

// const LoginPage = () => {
//   // const {
//   //   register,
//   //   handleSubmit,
//   //   formState: { errors },
//   // } = useForm<FormValues>();

//   // const router = useRouter();

//   // const onSubmit = async (data: FormValues) => {
//   //   // console.log(data);
//   //   try {
//   //     const res = await loginUser(data);
//   //     console.log(res);
//   //     if (res.accessToken) {
//   //       alert(res.message);
//   //       localStorage.setItem("accessToken", res.accessToken);
//   //       router.push("/");
//   //     }
//   //   } catch (err: any) {
//   //     console.error(err.message);
//   //     throw new Error(err.message);
//   //   }
//   // };

//   return (
//     <div className="my-10 w-[90%] mx-auto">
//       <h1 className="text-center text-4xl mb-5 font-bold">
//         Login <span className="text-teal-500">Here</span>
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
//         <div>
//           <Image
//             src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?t=st=1710130697~exp=1710134297~hmac=f1b21d9c1823a0657d339c256a1c4ad8301168480e35b35aeba5106568a21010&w=740"
//             width={500}
//             height={200}
//             alt="login page"
//             className="w-full h-auto"
//           />
//         </div>

//         <div className="w-[80%] mx-auto bg-white p-6 shadow-lg rounded-lg">
//           {/* <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="mb-6">
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 {...register("email")}
//                 placeholder="Email"
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
//                 required
//               />
//             </div>

//             <div className="mb-6">
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 {...register("password")}
//                 placeholder="Email"
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
//                 required
//               />
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="w-full border border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded-md shadow-md hover:bg-teal-500 hover:text-black"
//               >
//                 Login
//               </button>
//             </div>
//           </form> */}

//           <p className="text-center mt-4 text-sm text-gray-600">
//             Don&apos;t have an account?{" "}
//             <Link href="/register" className="text-teal-500 hover:underline">
//               Create an account
//             </Link>
//           </p>

//           <p className="text-center mt-6 text-sm text-gray-500">
//             Or Sign Up Using
//           </p>

//           {/* Social Login Buttons */}
//           <div className="flex justify-center gap-4 mt-4">
//             <button
//               className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
//               onClick={() =>
//                 signIn("google", {
//                   callbackUrl: "http://localhost:3000/dashboard",
//                 })
//               }
//             >
//               <Image
//                 src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
//                 width={30}
//                 height={30}
//                 alt="Google logo"
//               />
//             </button>
//             <button
//               className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
//               onClick={() =>
//                 signIn("github", {
//                   callbackUrl: "http://localhost:3000/dashboard",
//                 })
//               }
//             >
//               <Image
//                 src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
//                 width={25}
//                 height={25}
//                 alt="GitHub logo"
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
