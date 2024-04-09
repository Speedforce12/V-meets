import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import CardActions from "./card-actions";
import Avatars from "./avatars";

const UpcomingMeetingCard = () => {
  return (
    <Card className='border-0 bg-[#1C1F2E]'>
      <CardHeader>
        <CardTitle>
          <Image
            src={"/icons/upcoming.svg"}
            alt='upcoming'
            width={30}
            height={30}
            className=''
          />
        </CardTitle>
        <CardDescription className='space-y-2'>
          <div className='text-white font-semibold text-lg line-clamp-5'>
            Team Sync: Sprint Planning & Updates
          </div>

          <div className='text-white/70 font-semibold text-xs'>
            April 9, 2024 - 12:27 AM
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter className='justify-between'>
        <Avatars />
        <CardActions />
      </CardFooter>
    </Card>
  );
};

export default UpcomingMeetingCard;
3;
