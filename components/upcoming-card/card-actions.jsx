"use client";

import { absoluteUrl } from "@/lib/utils";
import CopyButton from "../buttons/copy-button";
import { toast } from "sonner";
import StartMeetingButton from "../buttons/start-meeting-button";
import { useRouter } from "next/navigation";

const CardActions = ({ callId }) => {
  const router = useRouter();

  const meetingLink = absoluteUrl(callId);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(meetingLink);

      toast.success("Meeting Link copied!");
    } catch (err) {
      toast.error("Failed to copy the meeting link");
      console.error("Failed to copy: ");
    }
  };

  const handleStartCall = () => {
    router.push(meetingLink);
  };

  return (
    <div className='flex items-center space-x-2'>
      <StartMeetingButton handleStartCall={handleStartCall} />
      <CopyButton onCopy={handleCopy} />
    </div>
  );
};

export default CardActions;
