"use client";

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const SeeAllButton = () => {
  const router = useRouter();
  return (
    <Button
      asChild
      variant='ghost'
      className='hover:bg-transparent hover:text-white/60 cursor-pointer'
      onClick={() => router.push("/upcoming")}>
      <span className='text-sm'>See all</span>
    </Button>
  );
};

export default SeeAllButton;
