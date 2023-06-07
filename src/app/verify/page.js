import Image from "next/image";
import Link from "next/link";
import React from "react";
import { fingerprint, upload } from "../../../public/asset";

export default function Verify() {
  return (
    <div className="h-full pt-5 px-4">
      {/* <Link className="text-gray-700 text-[1em]" href="/home">
        Back
      </Link> */}
      <div className="mt-3 flex flex-col gap-2">
        <h3 className="font-semibold text-xl">Electoral poll</h3>
        <h2 className="font-bold text-3xl">Verify Details</h2>
      </div>
      <div className="flex flex-col items-center gap-5 mt-5">
        <div>
          <label htmlFor="cardNum" className="">
            Voters card number
          </label>
          <input
            name="cardNum"
            className="border uppercase text-xl font-bold p-2 py-4 rounded-xl w-full"
            type="text"
            placeholder="2ls353"
          />
        </div>
        <div>
          <label htmlFor="cardNum">Full Name</label>
          <input
            name="Full Name"
            className="border uppercase text-xl font-bold p-2 py-4 rounded-xl w-full"
            type="text"
            placeholder="Gafar Seun Chibike"
          />
        </div>
      </div>
      {/* upload & fingerprint */}
      <div className="flex flex-col items-center gap-4 mt-4 text-center text-xl">
        <div className="flex flex-col items-center gap-2">
          <Image src={upload} alt="upload" />
          <p>Upload proof of identification with a picture of yourself</p>
        </div>
        <p className="text-[0.9em] text-[#7000FF]">or</p>
        <div className="flex flex-col items-center gap-2">
          <Image src={fingerprint} alt="finger" />
          <p>Verify through finger print</p>
        </div>
      </div>
      {/* verify button */}
      <div className="my-4 grid place-items-center">
        <Link
          href="/select"
          className="bg-[#7000FF] text-xl text-white px-8 py-2
      rounded-md"
        >
          Verify
        </Link>
      </div>
    </div>
  );
}
