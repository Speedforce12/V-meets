"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavItem = ({ name, icon, href }) => {
  const path = usePathname();
  const isActive = (value) => {
    return value === path;
  };

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center hover:bg-gradient-to-r from-blue-500 transition  to-blue-700 rounded-md space-x-2 px-2",
        isActive(href) ? "bg-gradient-to-r from-blue-500  to-blue-700" : ""
      )}>
      <div className='flex items-center p-2 gap-2'>
        <Image src={icon} alt={name} width={25} height={25} />

        <span className='text-base font-semibold text-white'>{name}</span>
      </div>
    </Link>
  );
};

export default NavItem;
