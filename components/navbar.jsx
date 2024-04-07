import { UserButton } from "@clerk/nextjs";
import MobileNav from "./mobile-nav";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between h-12 px-6 bg-[#1C1F2E]'>
      <MobileNav />
      <div className='ml-auto'>
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
