"use client";

import { useSetCall } from "@/hooks/useSetCall";
import {
  StreamCall,
  StreamTheme,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import MeetingSetup from "./_components/meeting-setup";
import MeetingRoom from "./_components/meeting-room";
import Link from "next/link";

const MeetingPage = () => {
  const { id } = useParams();

  const { call, isLoading } = useSetCall(id);
  const [setUpComplete, setSetUpComplete] = useState(false);
  const { useCallEndedAt, useCallStartsAt } = useCallStateHooks();

  const callEndedAt = useCallEndedAt();

  const callHasEnded = !!callEndedAt;

  if (!call)
    return (
      <p className='text-center text-3xl font-bold text-white h-screen flex items-center justify-center'>
        Call Not Found
      </p>
    );

  if (callHasEnded) {
    return (
      <div className='flex flex-col items-center gap-6'>
        <p className='font-bold'>This meeting has ended</p>
        <Link href='/' className={buttonClassName}>
          Go home
        </Link>
      </div>
    );
  }

  return (
    <div className='h-screen w-full'>
      <StreamCall call={call}>
        <StreamTheme>
          {setUpComplete ? (
            <MeetingRoom />
          ) : (
            <MeetingSetup setSetUpComplete={setSetUpComplete} />
          )}
        </StreamTheme>
      </StreamCall>
    </div>
  );
};

export default MeetingPage;
