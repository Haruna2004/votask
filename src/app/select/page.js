"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Candidates } from "..";
import Link from "next/link";

export default function Select() {
  const [checked, setChecked] = useState(0);
  return (
    <div className="h-full pt-5 px-4">
      <h2 className="font-bold text-2xl text-center">Presidential Poll</h2>
      <h5 className="text-center font-medium text-xl">Select your candidate</h5>
      <div className="flex flex-col items-center justify-center overflow-y-scroll gap-4 mt-2">
        {Candidates.map(({ id, name, logo }) => (
          <div
            key={id}
            className="flex w-full items-center justify-between"
            onClick={() => setChecked(id)}
          >
            <Image src={logo} alt="logo" className="h-25 w-25" />
            <p className="font-semibold text-xl">{name}</p>
            <input
              checked={id == checked}
              className="w-10 h-10 rounded-xl"
              type="checkbox"
              name={name}
              id={id}
            />
          </div>
        ))}
      </div>
      {/* Vote selected */}
      <div className="my-4 grid place-items-center ">
        <Link
          href="/success"
          className="bg-[#7000FF] text-xl mb-2 font-semibold text-white px-8 py-3
      rounded-md"
        >
          Vote Selected
        </Link>
      </div>
    </div>
  );
}
