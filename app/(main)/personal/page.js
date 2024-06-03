"use client";

import CopyButton from "@/components/buttons/copy-button";
import StartMeetingButton from "@/components/buttons/start-meeting-button";
import { useSetCall } from "@/hooks/useSetCall";
import { absoluteUrl } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Record = ({ title, description }) => {
  return (
    <div className='flex flex-col xl:flex-row gap-3 items-start'>
      <h1 className='text-sky-500 font-medium text-base lg:text-xl xl:min-w-32'>
        {title}
      </h1>
      <div className='text-sm  lg:text-xl font-bold truncate max-sm:max-w-[300px]'>
        {description}
      </div>
    </div>
  );
};

const PersonalPage = () => {
  const { user } = useUser();
  const router = useRouter();

  const meetingId = user.id;

  const client = useStreamVideoClient();

  const { call } = useSetCall(meetingId);

  const onStartMeeting = async () => {
    if (!client) return;

    if (!call) {
      await client.call("default", meetingId).getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
          custom: {
            description: `${user.firstName}'s Personal Meeting Room`,
          },
        },
      });
    }

    router.push(`/meeting/${meetingId}?personal=true`);
  };

  const meetingLink = absoluteUrl(meetingId);

  return (
    <section className='flex flex-col size-full'>
      <h1 className='xl:text-2xl text-xl font-medium'>Personal Meeting Room</h1>

      <div className='pt-5 gap-8 w-full flex flex-col'>
        <Record
          title='Topic:'
          description={`${user.firstName}'s Personal Meeting Room`}
        />
        <Record title='Meeting ID:' description={`${meetingId}`} />
        <Record title='Passcode:' description='********' />
        <Record
          title='Invite Link:'
          description={`${meetingLink}?personal=true`}
        />
      </div>
      <div className='flex pt-5 gap-5'>
        <StartMeetingButton handleStartCall={onStartMeeting} />
        <CopyButton
          onCopy={() => {
            navigator.clipboard.writeText(meetingLink);
            toast.success("Link Copied");
          }}
        />
      </div>
    </section>
  );
};

export default PersonalPage;
