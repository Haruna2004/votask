import Image from "next/image";
import React from "react";
import { next_right } from "../../../public/asset";
import Link from "next/link";

export default function Active() {
  const select = [
    "Presidential",
    "Gubernitoral",
    "Senate",
    "Local Goverment",
    "House of Rep",
  ];
  return (
    <div className="h-full pt-5 px-4">
      <h2 className="font-bold text-2xl text-[#7000FF]">Active Polls</h2>
      <div className="flex flex-col gap-5 mt-3">
        {select.map((active, index) => (
          <Link
            href="/verify"
            key={index}
            className="bg-white flex items-center justify-between p-4 shadow rounded-sm"
          >
            <p>{active}</p>
            <Image src={next_right} alt="next-right" />
          </Link>
        ))}
      </div>
    </div>
  );
}
