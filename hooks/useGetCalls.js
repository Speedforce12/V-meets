"use client";

import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

const useGetCalls = () => {
  const { user } = useUser();
  const [calls, setCalls] = useState();
  const [isLoading, setIsLoading] = useState(false);

  let client = useStreamVideoClient();

  useEffect(() => {
    const getCalls = async () => {
      if (!client || !user?.id) return;

      try {
        setIsLoading(true);
        const { calls } = await client.queryCalls({
          filter_conditions: {
            starts_at: {
              $exists: true,
            },
            $or: [
              { created_by_user_id: user.id },
              { members: { $in: [user.id] } },
            ],
          },
          sort: [{ field: "starts_at", direction: -1 }],
        });

        console.log(calls);

        setCalls(calls);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getCalls();
  }, [client, user?.id]);

  const currentTime = new Date();

  const endedCalls = calls?.filter(({ state: { startsAt, endedAt } }) => {
    return (startsAt && startsAt < currentTime) || !!endedAt;
  });

  const upcomingCalls = calls?.filter(({ state: { startsAt } }) => {
    return startsAt && new Date(startsAt) > currentTime;
  });

  return {
    endedCalls,
    upcomingCalls,
    recordings: calls,
    isLoading,
  };
};

export default useGetCalls;
