"use client";

import React from "react";
import { Button } from "../ui/button";
import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";

const EndCallButton = () => {
  const call = useCall();
  const router = useRouter();

  if (!call)
    throw new Error(
      "useStreamCall must be used within a StreamCall component."
    );

  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();

  const meetingOwner =
    localParticipant &&
    call.state.createdBy &&
    localParticipant.userId === call.state.createdBy.id;

  if (!meetingOwner) return null;

  const endCall = async () => {
    await call.endCall();
    router.push("/");
  };

  return (
    <Button
      className='shadow-lg bg-red-500 border-b-4 border-red-700 hover:bg-red-500 active:bg-red-800 hover:border-b-0'
      onClick={endCall}>
      End Call
    </Button>
  );
};

export default EndCallButton;
