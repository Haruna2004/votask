"use client";
import ProgressBar from "@ramonak/react-progress-bar";
import { Candidates } from "..";
import total from "..";
import Image from "next/image";

function getPercent(count) {
  return (Number(count) / total).toFixed(2) * 100 + 20;
}

export default function Result() {
  return (
    <div className="h-full p-5 px-4">
      <h2 className="font-semibold text-2xl">Electoral Result</h2>
      <div className="flex flex-col mt-3 overflow-y-auto gap-4">
        {Candidates.map(({ id, name, count, logo }) => (
          <div className="flex flex-col justify-center gap-3" key={id}>
            <div className="flex items-center gap-5">
              <Image src={logo} alt={name} className="h-20 w-20 rounded-full" />
              <p className="font-bold text-xl">{name}</p>
              <h3>{count} Votes</h3>
            </div>
            <ProgressBar completed={getPercent(count)} />
          </div>
        ))}
      </div>
    </div>
  );
}
