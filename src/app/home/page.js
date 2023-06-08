"use client";
import Image from "next/image";
import React, { useState } from "react";
import { arrow_right } from "../../../public/asset";
import Link from "next/link";

export default function Home() {
  const [results, setResults] = useState([
    "Presidential",
    "Gubernitoral",
    "Senate",
    "Local goverment",
  ]);
  return (
    <div className="h-full pt-10 px-4">
      <h2 className="text-3xl font-bold">Welcome</h2>
      {/* Active polls */}
      <Link
        href="/active"
        className="text-white bg-gray-900 p-2 py-3 px-4 flex 
        justify-between items-center rounded-md sm:w-3/4 mt-4"
      >
        <div>
          <h3 className="text-xl font-semibold ">Active Polls</h3>
          <p>cast your vote</p>
        </div>
        <Image src={arrow_right} alt="ar" />
      </Link>
      {/* Edit */}

      <div className="flex items-center w-full mt-3 p-1 gap-3 text-center">
        <Link
          href="/notfound"
          className="flex-[0.5] bg-[#7000FF] text-white text-xl p-2 py-3 rounded-sm"
        >
          <p>Create new poll</p>
        </Link>
        <Link href="/notfound" className="flex-[0.5] border-2  p-2 text-xl">
          <p>Edit an ongoing poll</p>
        </Link>
      </div>
      {/* Result */}
      <div className="mt-3">
        <h2 className="text-2xl font-semibold">Poll Results</h2>
        <div className="flex flex-col gap-4 mt-2">
          {results.map((result, index) => (
            <Link href="/result" className="w-full border p-4" key={index}>
              <h2 className="text-xl">{result}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
