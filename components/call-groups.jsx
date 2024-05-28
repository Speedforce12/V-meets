"use client";

import useGetCalls from "@/hooks/useGetCalls";
import Spinner from "./spinner";
import { useEffect, useState } from "react";
import CallGroupCard from "./upcoming-card/upcoming-meeting-card";
import { getFirstTwoUpcomingMeetings } from "@/lib/utils";

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
        return recorded;

      case "homepage":
        return upcomingCalls;

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

  if (!calls)
    return (
      <div className=' text-white/70 flex items-center h-full justify-center text-2xl font-semibold 🥲'>
        {getNoCallsMessage()}
      </div>
    );

  return type === "homepage" ? (
    <div className='grid grid-cols-1 xl:grid-cols-2 gap-3 my-5'>
      {calls &&
        calls.length > 0 &&
        calls
          .splice(0, 2)
          .map((meeting) => (
            <CallGroupCard key={meeting.id} meeting={meeting} />
          ))}
    </div>
  ) : (
    <div className='grid grid-cols-1 xl:grid-cols-2 gap-3 my-5 pb-6'>
      {calls &&
        calls.length > 0 &&
        calls.map((meeting) => (
          <CallGroupCard key={meeting.id} meeting={meeting} />
        ))}
    </div>
  );
};

export default CallGroups;
