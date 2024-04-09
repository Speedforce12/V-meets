"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useModal } from "@/store/useModal";
import Image from "next/image";

const cardColor = [
  "bg-orange-500",
  "bg-sky-500",
  "bg-indigo-500",
  "bg-amber-500",
];

const MeetingCard = ({ title, description, icon, index }) => {
  const { isOpen } = useModal();
  return (
    <Card
      className={` ${cardColor[index]} border-0 cursor-pointer`}
      onClick={() => isOpen()}>
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
        <p className='font-bold text-lg text-white'>{title}</p>
        <p className='text-sm text-white/70 tracking-tight font-medium'>
          {description}
        </p>
      </CardFooter>
    </Card>
  );
};

export default MeetingCard;
