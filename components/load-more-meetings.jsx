"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Spinner from "./spinner";

const LoadMoreMeetings = () => {

  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const { ref, inView } = useInView({
    threshold: 0.2,
    onChange: () => {
      if (inView) {
        setIsLoading(true);
        setPage((prevPage) => prevPage + 1);
      }
    },
  });



  return (
    <>
      <div ref={ref}>LoadMoreMeetings</div>

      <section className='flex justify-center items-center w-full' ref={ref}>
        {inView && isLoading && <Spinner />}
      </section>
    </>
  );
};

export default LoadMoreMeetings;
