"use client";

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const SeeAllButton = () => {
  const router = useRouter();
  return (
    <Button
      variant='ghost'
      className='hover:bg-transparent hover:text-white/60 cursor-pointer text-sm text-white'
      onClick={() => router.push("/upcoming")}>
      See all
    </Button>
  );
};

export default SeeAllButton;
