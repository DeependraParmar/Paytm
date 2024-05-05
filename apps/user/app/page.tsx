"use client"

import React from 'react'
import { PrismaClient } from '@repo/db/client';
import { useBalance } from "@repo/store/useBalance";
const client = new PrismaClient();

const page = () => {
  const balance = useBalance();
  return (
    <>
      <div className='text-2xl'>Hi there</div>
      <div>Your balance is: {balance}</div>
    </>
  )
}

export default page;
