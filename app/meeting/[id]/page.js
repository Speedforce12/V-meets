"use client";

import { useSetCall } from "@/hooks/useSetCall";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import MeetingSetup from "./_components/meeting-setup";
import MeetingRoom from "./_components/meeting-room";

const MeetingPage = () => {
  const { id } = useParams();

  const { call, isLoading } = useSetCall(id);
  const [setUpComplete, setSetUpComplete] = useState(false);

  if (!call)
    return (
      <p className='text-center text-3xl font-bold text-white h-screen flex items-center justify-center'>
        Call Not Found
      </p>
    );

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
