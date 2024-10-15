import { FaGithub, FaYoutube, FaStackOverflow } from "react-icons/fa";
import Link from "next/link";

const socialLinks = [
  {
    icon: <FaGithub />,
    path: "#",
  },
  {
    icon: <FaYoutube />,
    path: "#",
  },
  {
    icon: <FaStackOverflow />,
    path: "#",
  },
];

const Social = () => {
  return (
    <div className="flex gap-6">
      {socialLinks.map((item, index) => (
        <Link
          href={item.path}
          key={index}
          className="flex items-center justify-center h-10 w-10 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-100 transition-all duration-300" // Adjusted styles for better sizing and colors
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
