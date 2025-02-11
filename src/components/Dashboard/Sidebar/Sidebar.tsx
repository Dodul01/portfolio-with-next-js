// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { FileText, Briefcase, Mail, Menu } from "lucide-react";

// const Sidebar = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const menuItems = [
//     {
//       label: "Blog Management",
//       route: "/dashboard/blogs",
//       icon: <FileText size={24} />,
//     },
//     {
//       label: "Project Management",
//       route: "/dashboard/projects",

//       icon: <Briefcase size={24} />,
//     },
//     {
//       label: "Message Management",
//       route: "/dashboard/messages",
//       icon: <Mail size={24} />,
//     },
//   ];

//   return (
//     <aside
//       className={`bg-gray-800 text-white h-screen p-4 ${
//         isCollapsed ? "w-20" : "w-64"
//       } transition-all duration-300`}
//     >
//       {/* Toggle Button */}
//       <div className="flex justify-end">
//         <button
//           onClick={() => setIsCollapsed(!isCollapsed)}
//           className="text-white focus:outline-none"
//           aria-label="Toggle sidebar"
//         >
//           <Menu />
//         </button>
//       </div>

//       {/* Navigation Menu */}
//       <nav className="mt-8 space-y-4">
//         {menuItems.map((item) => (
//           <Link key={item.route} href={item.route}>
//             <div className="flex items-center gap-4 p-2 hover:bg-gray-700 rounded-md cursor-pointer">
//               <div>{item.icon}</div>
//               {!isCollapsed && (
//                 <div className="flex flex-col">
//                   <span className="font-semibold">{item.label}</span>
//                 </div>
//               )}
//             </div>
//           </Link>
//         ))}
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;
"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, Briefcase, Mail, Menu, ChevronDown } from "lucide-react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      label: "Blogs",
      route: "/dashboard/blogs",
      icon: <FileText size={24} />,
      subItems: [
        { label: "All Posts", route: "/dashboard/blogs" },
        { label: "Create New", route: "/dashboard/blogs/create" },
      ],
    },
    {
      label: "Projects",
      route: "/dashboard/projects",
      icon: <Briefcase size={24} />,
      subItems: [
        { label: "All Projects", route: "/dashboard/projects" },
        { label: "Add Project", route: "/dashboard/projects/create" },
      ],
    },
    {
      label: "Messages",
      route: "/dashboard/messages",
      icon: <Mail size={24} />,
      subItems: [{ label: "Inbox", route: "/dashboard/messages" }],
    },
  ];

  const toggleDropdown = (route: string) => {
    setOpenDropdown(openDropdown === route ? null : route);
  };

  return (
    <aside
      className={`bg-[#021035] text-white h-screen p-4 ${
        isCollapsed ? "w-20" : "w-64"
      } transition-all duration-300 fixed left-0 top-0 overflow-y-auto`}
    >
      <div className="flex justify-end">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-white focus:outline-none hover:bg-[#0B2E82] p-2 rounded-md"
          aria-label="Toggle sidebar"
        >
          <Menu />
        </button>
      </div>

      <nav className="mt-8 space-y-2">
        {menuItems.map((item) => (
          <div key={item.route}>
            <div className="flex items-center justify-between gap-4 p-2 hover:bg-[#0B2E82] rounded-md cursor-pointer">
              <Link
                href={item.route}
                className="flex items-center gap-4 flex-1"
              >
                <div>{item.icon}</div>
                {!isCollapsed && (
                  <span className="font-semibold">{item.label}</span>
                )}
              </Link>
              {!isCollapsed && item.subItems && (
                <button
                  onClick={() => toggleDropdown(item.route)}
                  className="focus:outline-none"
                  aria-label="Toggle dropdown"
                >
                  <ChevronDown
                    size={18}
                    className={`transform transition-transform duration-300 ${
                      openDropdown === item.route ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}
            </div>
            {!isCollapsed && item.subItems && (
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openDropdown === item.route ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="ml-8 py-1 space-y-2">
                  {item.subItems.map((subItem) => (
                    <Link
                      href={subItem.route}
                      key={subItem.route}
                      className="block p-2 text-sm hover:bg-[#0B2E82] rounded-md"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
