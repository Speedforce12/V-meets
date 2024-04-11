import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/useModal";

import React, { useState } from "react";
import CreateMeetingForm from "./new-meeting/create-meeting";
import CreateSuccess from "./new-meeting/create-success";
import JoinViaLink from "./join-link";

const MeetingCardModal = () => {
  const { open, isClose, cardType } = useModal();
  const [call, setCall] = useState();

  const instantMeeting = cardType === "instant";

  return (
    <Dialog onOpenChange={isClose} open={open}>
      <DialogContent className='bg-[#1C1F2E] border-0'>
        {!call && cardType !== "join" && (
          <DialogHeader>
            <DialogTitle className='text-xl font-bold'>
              Create Meeting
            </DialogTitle>
          </DialogHeader>
        )}

        {cardType === "schedule" && <CreateMeetingForm setCall={setCall} />}

        {instantMeeting && (
          <CreateMeetingForm
            isInstantMeeting={instantMeeting}
            setCall={setCall}
          />
        )}

        {cardType === "join" && <JoinViaLink />}

        {call && !instantMeeting && <CreateSuccess call={call} />}
      </DialogContent>
    </Dialog>
  );
};

export default MeetingCardModal;
