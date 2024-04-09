import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Avatars = () => {
  return (
    <div className='-space-x-2 flex'>
      {Array.from({ length: 4 }).map((_, index) => (
        <Avatar
          className='size-8 ring-white dark:ring-gray-800 ring-2'
          key={index}>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ))}

      <Avatar className='size-8 ring-white dark:ring-gray-800 ring-2'>
        <AvatarImage src='' />
        <AvatarFallback className='bg-slate-800 text-xs font-medium text-white'>
          99+
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Avatars;
