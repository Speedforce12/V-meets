import { navElement } from "@/constant/constant";
import Logo from "./logo";
import NavItem from "./nav-items";

const Sidebar = () => {
  return (
    <aside className='w-[264px] bg-[#1C1F2E] h-full'>
      <div className='flex flex-col items-center'>
        <Logo />

        <nav className='mt-5 flex flex-col space-y-3 w-full px-6'>
          {navElement.map((navItem) => (
            <NavItem key={navItem.id} {...navItem} />
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
