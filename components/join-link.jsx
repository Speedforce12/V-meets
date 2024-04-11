import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useRouter } from "next/navigation";

const JoinViaLink = () => {
  const [link, setLink] = useState("");

  const router = useRouter();

  return (
    <div className='flex w-full flex-col'>
      <div className='w-full'>
        <h1 className='text-xl font-bold text-white text-start'>
          Join Meeting
        </h1>

        <div className='mt-6'>
          <Label htmlFor='link' className='text-gray-400'>
            Add a link to join a meeting
          </Label>
          <Input
            id='link'
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className='bg-transparent ring-0 focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 border-gray-700'
          />
        </div>
        <div className='flex flex-col w-full mt-5'>
          <Button
            className='w-full bg-gradient-to-tr from-blue-500 to-blue-700 font-semibold shadow-md gap-x-1.5 hover:from-blue-600 hover:to-blue-800'
            onClick={() => router.push(`${link}`)}>
            Join Meeting
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JoinViaLink;
