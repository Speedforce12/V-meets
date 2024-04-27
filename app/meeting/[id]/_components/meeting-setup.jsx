"use client";

import {
  DeviceSettings,
  VideoPreview,
  useCall,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Mic, MicOff, Video, VideoOff } from "lucide-react";
import NoVideoPreview from "./no-video";

const MeetingSetup = ({ setSetUpComplete }) => {
  const { useCallSettings, useCameraState, useMicrophoneState } =
    useCallStateHooks();
  const { camera, isMute } = useCameraState();
  const { microphone } = useMicrophoneState();

  const call = useCall();

  if (!call) {
    throw new Error("Call must be made in a stream client!");
  }

  const [isMicToggled, setIsMicToggled] = useState(false);
  const [isCamToggled, setIsCamToggled] = useState(false);

  useEffect(() => {
    call.camera.enable();
    call.microphone.enable();
  }, [call.camera, call.microphone]);

  const handleCameraToggle = async () => {
    setIsCamToggled(!isCamToggled);
    await camera.toggle();
  };

  const handleMicrophoneToggle = async () => {
    setIsMicToggled(!isMicToggled);
    await microphone.toggle();
  };

  return (
    <div className='flex items-center justify-center h-full flex-col '>
      <h1 className='text-2xl font-semibold my-5'>Meeting SetUp</h1>
      <div className='w-full flex items-center justify-center'>
        {!isMute ? (
          <VideoPreview className='w-[480px] h-[373px]' />
        ) : (
          <NoVideoPreview />
        )}
      </div>

      <div className='bg-blue-900 w-72 rounded-md shadow-md mt-5 p-1.5'>
        <div className='flex w-full items-center justify-between'>
          <div className='flex items-center gap-x-2'>
            <Button
              size='icon'
              variant='ghost'
              className='rounded-full bg-slate-900 hover:bg-slate-800'
              onClick={handleMicrophoneToggle}>
              {isMicToggled ? (
                <Mic size={20} className='text-white' />
              ) : (
                <MicOff className='text-white' />
              )}
            </Button>

            <Button
              size='icon'
              variant='ghost'
              className='rounded-full bg-slate-900 hover:bg-slate-800'
              onClick={handleCameraToggle}>
              {isCamToggled ? (
                <Video size={20} className='text-white' />
              ) : (
                <VideoOff size={20} className='text-white' />
              )}
            </Button>

            <DeviceSettings />
          </div>

          <Button
            onClick={() => {
              call.join();

              setSetUpComplete(true);
            }}>
            Join Meeting
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MeetingSetup;
