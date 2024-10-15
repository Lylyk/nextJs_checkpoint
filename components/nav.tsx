import { Link } from 'react-scroll';

const menu = [
  {
    name: 'Services',
    href: 'services',
  },
  {
    name: 'Work',
    href: 'work',
  },
  {
    name: 'FAQ',
    href: 'FAQ',
  },
  {
    name: 'Contact',
    href: 'Contact',
  },
];

const Nav = () => {
  return (
    <nav className='z-50 flex gap-8 bg-[#D8C6C1] p-4 rounded-lg shadow-lg shadow-rose-300'>
      {menu.map((item, index) => (
        <Link
          to={item.href}
          spy={true}
          smooth={true}
          key={index}
          className='cursor-pointer text-lg font-medium capitalize transition-all duration-200'
        >
          <span className='pb-2 transition-all border-b-2 border-transparent hover:border-rose-600 hover:text-rose-600'>
            {item.name}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
