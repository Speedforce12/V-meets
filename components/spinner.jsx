import { Loader } from "lucide-react";
import React from "react";

const Spinner = () => {
  return (
    <div className='flex items-center h-screen justify-center'>
      <Loader className='animate-spin text-muted-foreground' size={30} />
    </div>
  );
};

export default Spinner;
