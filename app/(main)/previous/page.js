import CallGroups from "@/components/call-groups";
import React from "react";

const PreviousPage = () => {
  return (
    <section className='h-full flex flex-col'>
      <h1 className='font-semibold text-2xl tracking-tight'>
        Previous Meetings
      </h1>

      <CallGroups type='ended' />
    </section>
  );
};

export default PreviousPage;
