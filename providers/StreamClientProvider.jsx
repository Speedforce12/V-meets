"use client";

import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { tokenProvider } from "@/actions/stream-action";
import Spinner from "@/components/spinner";

const StreamClientProvider = ({ children }) => {
  const [streamClient, setStreamClient] = useState();
  const { isLoaded, user } = useUser();

  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

  useEffect(() => {
    if (!apiKey) {
      throw new Error("API key not provided");
    }

    if (!isLoaded || !user) return;

    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: user?.id,
        image: user?.imageUrl,
        name: user?.firstName || user?.fullName || user?.username,
      },
      tokenProvider,
    });

    setStreamClient(client);

    return () => {
      client
        .disconnectUser()
        .catch((error) => console.error(`Couldn't disconnect user`, error));
      setStreamClient(undefined);
    };
  }, [apiKey, isLoaded, user]);

  if (!streamClient) return <Spinner />;

  return <StreamVideo client={streamClient}>{children}</StreamVideo>;
};

export default StreamClientProvider;
