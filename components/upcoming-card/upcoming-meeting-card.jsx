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
import { formatTime } from "@/lib/utils";

const CallGroupCard = ({ meeting }) => {
  
  console.log("CallGroupCard", meeting.id);

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
          <span className='text-white font-semibold text-lg line-clamp-5'>
            {meeting?.state?.custom?.description || "No description"}
          </span>

          <span className='text-white/70 font-semibold text-xs'>
            {formatTime(meeting?.state?.startsAt).toLocaleString()}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className='justify-between'>
        <Avatars />

        <CardActions callId={meeting.id} />
      </CardFooter>
    </Card>
  );
};

export default CallGroupCard;
