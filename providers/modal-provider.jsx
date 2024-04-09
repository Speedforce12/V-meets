"use client";

import MeetingCardModal from "@/components/meeting-modal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null;
  }

  return (
    <>
      <MeetingCardModal />
    </>
  );
};

export default ModalProvider;
