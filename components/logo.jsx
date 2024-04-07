import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href='/' className='flex items-center gap-x-2 pt-2'>
      <Image
        src='/logo.svg'
        alt='V-Meets'
        width={40}
        height={40}
        className='size-10'
      />
      <h1 className='text-white text-lg mt-2 font-bold leading-6'>V-Meets</h1>
    </Link>
  );
};

export default Logo;
