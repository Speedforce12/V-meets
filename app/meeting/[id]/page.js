"use client";

import { useSetCall } from "@/hooks/useSetCall";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useParams } from "next/navigation";
import React from "react";

const MeetingPage = () => {
  const { id } = useParams();

  const { call, isLoading } = useSetCall(id);

  return (
    <StreamTheme>
      <StreamCall call={call}>
        <div></div>
      </StreamCall>
    </StreamTheme>
  );
};

export default MeetingPage;
