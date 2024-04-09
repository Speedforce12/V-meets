import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/store/useModal";

import React from "react";

const MeetingCardModal = () => {
  const { open, isClose } = useModal();
  return (
    <Dialog onOpenChange={isClose} open={open}>
      <DialogContent className='bg-[#1C1F2E] border-0'>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingCardModal;
