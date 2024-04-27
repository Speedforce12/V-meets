import React from "react";

const NoVideoPreview = () => {
  return (
    <div className='w-[480px] h-[373px] rounded-md aspect-video bg-gray-800 flex items-center justify-center'>
      <p className='text-white/70 animate-pulse text-2xl'>No Video Preview</p>
    </div>
  );
};

export default NoVideoPreview;
