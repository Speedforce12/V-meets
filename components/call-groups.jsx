"use client";

import useGetCalls from "@/hooks/useGetCalls";
import Spinner from "./spinner";
import { useEffect, useState } from "react";
import CallGroupCard from "./upcoming-card/upcoming-meeting-card";

const CallGroups = ({ type }) => {
  const { endedCalls, isLoading, recordings, upcomingCalls } = useGetCalls();
  const [recorded, setRecorded] = useState([]);

  const getCalls = () => {
    switch (type) {
      case "upcoming":
        return upcomingCalls;

      case "ended":
        return endedCalls;

      case "recording":
        recorded;

      default:
        return [];
    }
  };

  const getNoCallsMessage = () => {
    switch (type) {
      case "ended":
        return "No Previous Calls";
      case "upcoming":
        return "No Upcoming Calls";
      case "recordings":
        return "No Recordings";
      default:
        return "";
    }
  };

  useEffect(() => {
    const fetchRecordings = async () => {
      const callData = await Promise.all(
        recordings?.map((meeting) => meeting.queryRecordings()) ?? []
      );

      const recordedCalls = callData
        .filter((call) => call.recordings.length > 0)
        .flatMap((call) => call.recordings);

      setRecorded(recordedCalls);
    };

    if (type === "recordings") {
      fetchRecordings();
    }
  }, [type, recordings]);

  if (isLoading) return <Spinner />;

  const calls = getCalls();

  console.log("call groups ", calls);

  if (!calls)
    return (
      <div className=' text-white/70 flex items-center h-full justify-center text-2xl font-semibold 🥲'>
        {getNoCallsMessage()}
      </div>
    );

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 gap-3 my-5'>
      {calls &&
        calls.length > 0 &&
        calls.map((meeting) => <CallGroupCard key={meeting.id} meeting={meeting} />)}
    </div>
  );
};

export default CallGroups;
