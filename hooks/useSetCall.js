import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

export const useSetCall = (id) => {
  const client = useStreamVideoClient();
  const [call, setCall] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id || !client) {
      return;
    }

    //   search for the call with the given id
    const findCalls = async () => {
      try {
        setIsLoading(true);
        const { calls } = await client.queryCalls({
          filter_conditions: { id },
        });

        if (calls.length > 0) {
          setCall(calls[0]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    findCalls();
  }, [client, id]);

  return { call, isLoading };
};
