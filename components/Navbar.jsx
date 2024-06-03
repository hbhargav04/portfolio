"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="flex gap-8">
        {links.map((menu, index) => (
          <Link
            href={menu.path}
            key={index}
            className={`${
              menu.path === pathname && "text-bhagwa border-b-2 border-bhagwa"
            } capitalize font-medium hover:text-bhagwa transition-all`}
          >
            {menu.name}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
