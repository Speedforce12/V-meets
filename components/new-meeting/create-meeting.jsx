import { toast } from "sonner";

import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { nanoid } from "nanoid";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/useModal";
import Spinner from "../spinner";

const CreateMeetingForm = ({ setCall, isInstantMeeting }) => {
  const [description, setDescription] = useState("");
  const [schedule, setSchedule] = useState(new Date());
  const client = useStreamVideoClient();
  const router = useRouter();
  const { isClose } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!client) return;

    const starts_at =
      schedule.toISOString() || new Date(Date.now()).toISOString();

    try {
      const callId = nanoid();

      await client
        .call("default", callId)
        .getOrCreate({
          ring: true,
          data: {
            starts_at,
            custom: {
              description: description || "Instant meeting",
            },
          },
        })
        .then(({ call }) => {
          setCall(call);

          if (!description) {
            router.push(`/meeting/${call.id}`);
          }
        });

      toast.success("Meeting Created");
    } catch (error) {
      console.log(error);
      toast.error("Failed to create meeting");
    } finally {
      isClose();
    }
  };

  if (!client) return <Spinner />;

  return (
    <form className='space-y-5' onSubmit={handleSubmit}>
      {!isInstantMeeting && (
        <>
          {" "}
          <div className='space-y-2'>
            <Label htmlFor='description' className='text-gray-400'>
              Add a description
            </Label>
            <Textarea
              className='bg-transparent ring-0 focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 border-gray-700'
              name='description'
              id='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className='space-y-2 flex flex-col'>
            <Label htmlFor='schedule' className='text-gray-400'>
              Select Date & Time
            </Label>
            <ReactDatePicker
              showTimeInput
              timeFormat='hh:mm'
              timeCaption='time'
              dateFormat='MMMM d, yyyy h:mm aa'
              className='w-full rounded bg-transparent  p-2 border border-gray-700'
              selected={schedule}
              timeIntervals={15}
              onChange={(date) => setSchedule(date)}
            />
          </div>
        </>
      )}

      <Button className='font-semibold w-full bg-[#0E78F9] hover:bg-[#0e78f9b9]'>
        {!isInstantMeeting ? "Schedule Meeting" : "Create Meeting"}
      </Button>
    </form>
  );
};

export default CreateMeetingForm;
