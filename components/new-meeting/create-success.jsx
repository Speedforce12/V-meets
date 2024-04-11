import { BadgeCheck, Copy } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";

const CreateSuccess = ({ call }) => {
  const meetingLink = window.location.origin + "/meeting/" + call?.id;

  const handleCopyLink = async () => {
    await navigator.clipboard
      .writeText(meetingLink)
      .then(() => toast.success("Link Copied!"))
      .catch(() => toast.error("Failed to copy link"));
  };

  return (
    <div className='flex justify-center items-center w-full flex-col '>
      <div className='flex items-center justify-center flex-col space-y-2'>
        <BadgeCheck size={75} className='fill-blue-600 ' />

        <h1 className='text-2xl font-bold text-white'>Meeting Created</h1>
      </div>

      <div className='flex flex-col w-full space-y-4 mt-7'>
        <Button
          className='w-full bg-gradient-to-tr from-blue-500 to-blue-700 font-semibold shadow-md gap-x-1.5 hover:from-blue-600 hover:to-blue-800'
          onClick={handleCopyLink}>
          <Copy size={20} /> Copy Invitation
        </Button>
        <Button className="">Email Link</Button>
      </div>
    </div>
  );
};

export default CreateSuccess;
