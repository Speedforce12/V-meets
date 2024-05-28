import React from "react";
import { Button } from "../ui/button";

const StartMeetingButton = ({ handleStartCall }) => {
  return (
    <Button
      onClick={handleStartCall}
      className='bg-[#0E78F9] text-white hover:bg-[#0E78F9] font-semibold'
      size='sm'>
      Start
    </Button>
  );
};

export default StartMeetingButton;
