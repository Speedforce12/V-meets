"use server";

import { currentUser } from "@clerk/nextjs";
import { StreamClient } from "@stream-io/node-sdk";

const api_key = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const api_secret = process.env.STREAM_SECRET_KEY;

export async function tokenProvider() {
  const user = await currentUser();

  if (!api_key) {
    throw new Error("API key not provided");
  }

  if (!api_secret) {
    throw new Error("API secret not provided");
  }

  if (!user) {
    throw new Error("User not authenticated");
  }

  const expiredAt = Math.round(new Date().getTime() / 1000) + 60 * 60;

  const client = new StreamClient(api_key, api_secret);

  const token = client.createToken(user.id, expiredAt);

  return token;
}
