import Link from "next/link";

import { FaLinkedinIn, FaGoogle } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaGoogle />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <>
      <div className={containerStyles}>
        {socials.map((item, index) => {
          return (
            <Link key={index} href={item.path} className={iconStyles}>
              {item.icon}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Socials;
