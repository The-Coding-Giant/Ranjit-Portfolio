import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="px-4 py-2 text-[#ADB7BE] text-sm font-medium rounded-lg hover:text-white hover:bg-[#1a1624] transition-all duration-300"
    >
      {title}
    </Link>
  );
};

export default NavLink;
