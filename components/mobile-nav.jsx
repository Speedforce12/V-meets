import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import Sidebar from "./sidebar";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className=' lg:hidden block'>
        <Menu />
      </SheetTrigger>
      <SheetContent className='w-[264px] bg-[#343b5d] p-0 ' side='left'>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
