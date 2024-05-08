import Spinner from "@/components/spinner";
import { cn } from "@/lib/utils";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import {
  CallControls,
  CallParticipantsList,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import MeetingOptions from "./meeting-options";
import { Encode_Sans } from "next/font/google";

const MeetingRoom = () => {
  const { useCallCallingState, useParticipantCount } = useCallStateHooks();
  const router = useRouter();
  const callingState = useCallCallingState();
  const participantCount = useParticipantCount();
  const [showParticipants, setShowParticipants] = useState(true);
  const [layout, setLayout] = useState("speaker-right");

  if (callingState !== CallingState.JOINED) return <Spinner />;

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;

      case "speaker-Left":
        return <SpeakerLayout participantsBarPosition='left' />;

      default:
        return <SpeakerLayout participantsBarPosition='right' />;
    }
  };

  return (
    <section className='relative items-center flex h-screen pt-5 flex-col overflow-hidden '>
      <div className='flex items-center justify-center size-full relative gap-3 mb-5'>
        <div className='max-w-5xl size-full flex items-center'>
          <CallLayout />
        </div>

        <div
          className={cn(
            "h-[calc(100vh-86px)] ml-2 w-52",
            showParticipants ? "md:block" : "hidden"
          )}>
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>
      <div className='fixed bottom-0 flex w-full items-center justify-center gap-5 '>
        <CallControls onLeave={() => router.push(`/`)} />

        <MeetingOptions setLayout={setLayout} />
      </div>
    </section>
  );
};

export default MeetingRoom;
