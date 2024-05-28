"use client";

import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { tokenProvider } from "@/actions/stream-action";
import Spinner from "@/components/spinner";

const API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamClientProvider = ({ children }) => {
  const { isLoaded, user } = useUser();
  const [streamClient, setStreamClient] = useState(null);

  useEffect(() => {
    if (!isLoaded) return;
    if (!API_KEY) throw new Error("Stream API key is missing");

    const client = new StreamVideoClient({
      apiKey: API_KEY,
      user: {
        id: user?.id,
        image: user?.imageUrl,
        name: user?.username || user?.id,
      },
      tokenProvider,
    });

    setStreamClient(client);

    return () => {
      client.disconnectUser();
      setStreamClient(null);
    };
  }, [user?.id, user?.username, user?.imageUrl, isLoaded]);

  if (!streamClient) return <Spinner />;

  return <StreamVideo client={streamClient}>{children}</StreamVideo>;
};

export default StreamClientProvider;
