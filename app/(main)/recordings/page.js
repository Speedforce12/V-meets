import CallGroups from '@/components/call-groups';
import React from 'react'

const RecordingsPage = () => {
  return (
    <section className='h-full flex flex-col'>
      <h1 className='font-semibold text-2xl tracking-tight'>
        Recorded Meetings
      </h1>

      <CallGroups type='recordings' />
    </section>
  );
}

export default RecordingsPage