"use client";

import { useEffect, useMemo, useState } from "react";

const CurrentDate = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (now.getSeconds() !== currentDateTime.getSeconds()) {
        setCurrentDateTime(now);
      }
    }, 1000); 

    return () => clearInterval(interval);
  }, [currentDateTime]); // Only re-run effect if currentDateTime changes

  const formatDate = useMemo(() => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return (date) => date.toLocaleDateString(undefined, options);
  }, []);

  const formatTime = useMemo(() => {
    const options = { hour: "numeric", minute: "numeric",};
    return (date) => date.toLocaleTimeString(undefined, options);
  }, []);
  return (
    <div className='absolute bottom-4 flex flex-col'>
      <p className='text-white md:text-5xl text-4xl font-bold'>
        {formatTime(currentDateTime)}
      </p>
      <p className='md:text-xl text-lg text-slate-400 font-bold'>
        {formatDate(currentDateTime)}
      </p>
    </div>
  );
};

export default CurrentDate;
