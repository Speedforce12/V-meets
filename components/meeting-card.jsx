"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useModal } from "@/hooks/useModal";
import Image from "next/image";
import { useRouter } from "next/navigation";

const cardColor = [
  "bg-orange-500",
  "bg-sky-500",
  "bg-indigo-500",
  "bg-amber-500",
];

const MeetingCard = ({ title, description, icon, index, type }) => {
  const { isOpen } = useModal();
  const router = useRouter();

  return (
    <Card
      className={` ${cardColor[index]} border-0 cursor-pointer`}
      onClick={() =>
        type == undefined ? router.push("/recordings") : isOpen(type)
      }>
      <CardHeader>
        <div className='size-10  flex items-center justify-center bg-[#ffffff35] rounded-md'>
          <Image
            src={icon}
            alt={title}
            width={25}
            height={25}
            className='object-cover '
          />
        </div>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className='flex flex-col justify-start items-start'>
        <div className='font-bold text-lg text-white'>{title}</div>
        <div className='text-sm text-white/70 tracking-tight font-medium'>
          {description}
        </div>
      </CardFooter>
    </Card>
  );
};

export default MeetingCard;
