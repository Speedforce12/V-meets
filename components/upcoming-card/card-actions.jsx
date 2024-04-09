import React from "react";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";

const CardActions = () => {
  return (
    <div className='flex items-center space-x-2'>
      <Button
        className='bg-[#0E78F9] text-white hover:bg-[#0E78F9] font-semibold'
        size='sm'>
        Start
      </Button>
      <Button className='space-x-2 bg-[#11131f]'>
        <Copy size={20} className='mr-2' />
        Copy Invitation
      </Button>
    </div>
  );
};

export default CardActions;
