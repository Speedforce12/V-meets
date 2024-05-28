import React from "react";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";

const CopyButton = ({ onCopy }) => {
  return (
    <Button className='space-x-2 bg-[#11131f]' onClick={onCopy}>
      <Copy size={20} className='mr-2' />
      Copy Invitation
    </Button>
  );
};

export default CopyButton;
